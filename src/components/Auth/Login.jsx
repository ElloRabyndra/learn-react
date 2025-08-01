import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./Schema";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ErrorMessage from "./ErrorMessage";
import ErrorModal from "./ErrorModal";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

export default function Login() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // load data users
  useEffect(() => {
    try {
      // Check if user is already logged in
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, redirect to FormHandling
          navigate("/FormHandling"); 
        }
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Error checking auth state:", error);
    }
  }, [navigate]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setErrorMessage("");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    // Ambil data email dan password dari form
    const { email, password } = data;
    
    setIsLoading(true);
    
    try {
      // Sign in user with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      console.log("User logged in successfully:", user);
      
      // Reset form
      reset();
      
      // Navigate to dashboard or home page
      navigate("/FormHandling"); 
      
    } catch (error) {
      console.error("Login error:", error);
      
      // Handle different error codes
      let message = "Login failed. Please try again.";
      
      switch (error.code) {
        case "auth/user-not-found":
          message = "No account found with this email. Please check your email or register for a new account.";
          break;
        case "auth/wrong-password":
          message = "Incorrect password. Please check your password and try again.";
          break;
        case "auth/invalid-email":
          message = "Please enter a valid email address.";
          break;
        case "auth/user-disabled":
          message = "This account has been disabled. Please contact support.";
          break;
        case "auth/too-many-requests":
          message = "Too many failed login attempts. Please try again later.";
          break;
        case "auth/invalid-credential":
          message = "Invalid email or password. Please check your credentials and try again.";
          break;
        default:
          message = error.message || "Login failed. Please try again.";
      }
      
      setErrorMessage(message);
      setIsModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isModalOpen && <ErrorModal onClose={handleCloseModal} message={errorMessage} />}
      <Card className="w-full min-w-80 md:min-w-md">
        <CardHeader className={"flex items-center justify-between gap-2"}>
          <CardTitle>Login to your account</CardTitle>
          <CardAction>
            <Button variant="link">
              <Link to="/Register">Register</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="Insert Email..."
                  autoComplete="off"
                  disabled={isLoading}
                />
                {errors.email && (
                  <ErrorMessage ErrorMessage={errors.email.message} />
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                  placeholder="Insert Password..."
                  autoComplete="off"
                  disabled={isLoading}
                />
                {errors.password && (
                  <ErrorMessage ErrorMessage={errors.password.message} />
                )}
              </div>
              <Button 
                type="submit" 
                className="w-full cursor-pointer" 
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}