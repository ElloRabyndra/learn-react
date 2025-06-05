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

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const allEmail = users.map((user) => user.email.toLowerCase());
  const passwordInput = watch("password");

  const onSubmit = (data) => {
    // Ambil data email dan password dari form
    const { email, password } = data;
    const userData = { email, password };
    
    // Simpan data ke localStorage
    const updatedUsers = [...users, userData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

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
                {...register("email", {
                  required: "Email is required",
                  minLength: {
                    value: 5,
                    message: "Email must be at least 5 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                    message: "Email must be a valid Gmail address",
                  },
                  validate: value => !allEmail.includes(value.toLowerCase()) || "Email already exists",
                })}
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                    message: "Password must be at least 5 characters",
                  },
                })}
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
                {...register("passwordConfirmation", {
                  required: "Password Confirmation is required",
                  minLength: {
                    value: 5,
                    message:
                      "Password Confirmation must be at least 5 characters",
                  },
                  validate: value => value.toLowerCase() === passwordInput.toLowerCase() || "Passwords do not match",
                })}
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
