import Nav from "../components/Navigation/Nav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
export default function FormHandling() {
  return (
    <section className="flex items-center justify-center min-h-screen p-8 font-[Poppins]">
      <div className="p-8 space-y-3 text-center min-w-sm">
        <h1 className="text-2xl font-bold">Form Handling</h1>
        <div className="flex w-full gap-2">
          <Button className={"w-1/2"}><Link to="/register">Register</Link></Button>
          <Button className={"w-1/2"}><Link to="/login">Login</Link></Button> 
        </div>
        <Nav />
      </div>
    </section>
  );
}
