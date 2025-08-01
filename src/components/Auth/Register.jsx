import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./Schema";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ErrorMessage from "./ErrorMessage";
import ErrorModal from "./ErrorModal";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/config/firebase";

export default function Register() {
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
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    // Ambil data email dan password dari form
    const { email, password } = data;

    setIsLoading(true);

    try {
      // Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("User registered successfully:", user);

      // Reset form
      reset();

      // Sign out user after registration so they can login manually
      await auth.signOut();

      // Navigate to login page
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);

      // Handle different error codes
      let message = "Registration failed. Please try again.";

      switch (error.code) {
        case "auth/email-already-in-use":
          message =
            "This email is already registered. Please use a different email or try logging in.";
          break;
        case "auth/weak-password":
          message = "Password is too weak. Please choose a stronger password.";
          break;
        case "auth/invalid-email":
          message = "Please enter a valid email address.";
          break;
        case "auth/operation-not-allowed":
          message =
            "Email/password accounts are not enabled. Please contact support.";
          break;
        default:
          message = error.message || "Registration failed. Please try again.";
      }

      setErrorMessage(message);
      setIsModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isModalOpen && (
        <ErrorModal onClose={handleCloseModal} message={errorMessage} />
      )}
      <Card className="w-full min-w-80 md:min-w-md">
        <CardHeader className={"flex items-center justify-between gap-2"}>
          <CardTitle>Register your account</CardTitle>
          <CardAction></CardAction>
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
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="passwordConfirmation">
                    Password Confirmation
                  </Label>
                </div>
                <Input
                  {...register("passwordConfirmation")}
                  id="passwordConfirmation"
                  type="password"
                  placeholder="Insert Password Confirmation..."
                  autoComplete="off"
                  disabled={isLoading}
                />
                {errors.passwordConfirmation && (
                  <ErrorMessage
                    ErrorMessage={errors.passwordConfirmation.message}
                  />
                )}
              </div>
              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? "Registering..." : "Register"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <CardDescription>
            Already have an account?{" "}
            <Link to="/Login" className="font-medium underline">
              Login
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </>
  );
}
