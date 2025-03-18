import  { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Eye, EyeOff, Key, User } from "lucide-react";
import { loginUser } from "@/services/AuthService";
import { toastNotifier } from "@/utils/toastNotifier";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "@/store/slices/authSlice";
import {GridLoader} from "react-spinners";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ success: false, message: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onLoginSubmit(values: z.infer<typeof loginSchema>) {
    const credentials = {
      email: values.email,
      password: values.password,
    };
  
    try {
      setLoading(true);
      const response = await loginUser(credentials);


      if (!response || !response.accessToken) {
        setFormStatus({
          success: false,
          message: "Invalid login credentials. Please try again.",
        });

        setLoading(false);
        return;
      }
      if (response.error) {
        toastNotifier({
          message:
            typeof response.error === "string"
              ? response.error
              : JSON.stringify(response.error),
          type: "error",
          duration: 3000,
        });
      }
      dispatch(
        login({
          user: {
            email: response.user.email || "",
            name: response.user.name || "",
            role: response.user.role || "",
          },
          accessToken: response.accessToken,
        })
      );
      toastNotifier({
        message: "Logged in successfully!",
        type: "success",
        duration: 3000,
      });
      //Set Token to local storage
      // localStorage.setItem("token", response.accessToken);
      console.log("Login response:", response);
      
      setFormStatus({ success: true, message: "Logged in successfully!" });
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setFormStatus({
        success: false,
        message: "Something went wrong. Please try again.",
      });
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <GridLoader color="#d64218" size={10} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(onLoginSubmit)}
          className="space-y-4"
        >
          {/* Display Success/Error Message */}
          {formStatus.message && (
              <div
                className={`text-center text-sm p-2 rounded-md ${
                  formStatus.success ?
                    "bg-green-200 text-green-700"
                    : "bg-red-200 text-red-700"
                }`}
              >
                {formStatus.message}
              </div>
            )}
          <FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="bg-black border-orange-400 pl-10 text-white" 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...field}
                      className="bg-black border-orange-400 pl-10 text-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 bg-transparent border-0 right-0 pr-3 flex items-center text-orange-500 hover:text-orange-600 transition-colors duration-200"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 opacity-70 hover:opacity-100" />
                      ) : (
                        <Eye className="h-4 w-4 opacity-70 hover:opacity-100" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 border-0"
          >
            Log in
          </Button>
        </form>
      </Form>
    </div>
  );
}
