import { Link } from "react-router";
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

export default function Register() {
  return (
    <Card className="w-full min-w-80 md:min-w-md">
      <CardHeader className={"flex items-center justify-between gap-2"}>
        <CardTitle>Register your account</CardTitle>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Insert Email..."
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" placeholder="Insert Password..." required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password Confirmation</Label>
              </div>
              <Input id="password" type="passwordConfirmation" placeholder="Insert Password Confirmation..." required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Register
        </Button>
        <CardDescription>
          Already have an account? <Link to="/Login" className="font-medium underline">Login</Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
