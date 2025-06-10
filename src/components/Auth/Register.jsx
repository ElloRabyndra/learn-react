import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

export default function Register() {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const allEmail = users.map((user) => user.email.toLowerCase());

  const registerSchema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .min(5, "Email must be at least 5 characters")
      .email("Email must be a valid email address")
      .regex(
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
        "Email must be a valid Gmail address"
      )
      .transform((email) => email.toLowerCase())
      .refine((email) => !allEmail.includes(email), {
        message: "Email already exists",
      }),
    password: z
      .string()
      .min(1, "Password is required")
      .min(5, "Password must be at least 5 characters"),
    passwordConfirmation: z
      .string()
      .min(1, "Password confirmation is required")
      .min(5, "Password confirmation must be at least 5 characters")
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"]
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    // Ambil data email dan password dari form
    const { email, password } = data;
    const userData = { email, password };

    // Simpan data ke localStorage
    const updatedUsers = [...users, userData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Reset form
    reset();

    // Alert sukses
    alert("Registration successful!");

    // Redirect ke halaman login
    navigate("/Login");
  };

  return (
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
              />
              {errors.passwordConfirmation && (
                <ErrorMessage
                  ErrorMessage={errors.passwordConfirmation.message}
                />
              )}
            </div>
            <Button type="submit" className="w-full cursor-pointer">
              Register
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
  );
}
