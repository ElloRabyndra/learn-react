import { useForm } from "react-hook-form";
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

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const emailInput = watch("email");

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
            <Link to="/register">Register</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email", {
                  required: "Email is required",
                  minLength: 5,
                  pattern: {
                    value: /^[^\s@]+@gmail\.com$/,
                    message: "Email must be a valid Gmail address",
                  },
                  validate: value => users.find(user => user.email === value) || 'Email not registered',
                })}
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters",
                  },
                  validate: value => {
                    const user = users.find(user => user.email === emailInput) || {};
                    return user.password === value || 'Password is incorrect';
                  }
                })}
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
