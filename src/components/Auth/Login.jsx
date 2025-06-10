import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

export default function Login() {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  
  const loginSchema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .min(5, "Email must be at least 5 characters")
      .email("Email must be a valid email address")
      .regex(/^[^\s@]+@gmail\.com$/, "Email must be a valid Gmail address")
      .transform((email) => email.toLowerCase())
      .refine(email => users.find(user => user.email.toLowerCase() === email), {
        message: "Email not registered",
      }),
    password: z
      .string()
      .min(1, "Password is required")
      .min(5, "Password must be at least 5 characters")
  })
  .refine(data => {
    const user = users.find(user => user.email.toLowerCase() === data.email);
    if (!user) return true; 
    return data.password === user.password;
  }, {
      message: "Incorrect password",
      path: ["password"],
  })
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  

  const onSubmit = (data) => {
    // Ambil data email dan password dari form
    const { email, password } = data;
    
    // Cek apakah email dan password cocok
    const user = users.find((user) => user.email === email && user.password === password);

    // Reset form
    reset();

    // Alert sukses
    user && alert("Login successful!");

    // Redirect ke halaman Form Handling
    user && navigate("/FormHandling");
  };

  return (
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
              />
              {errors.email && <ErrorMessage ErrorMessage={errors.email.message} />}
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
              {errors.password && <ErrorMessage ErrorMessage={errors.password.message} />}
            </div>
            <Button type="submit" className="w-full cursor-pointer">
              Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
