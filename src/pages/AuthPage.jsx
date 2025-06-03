import { useState } from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen font-[Poppins]">
      <div className="p-8 space-y-3 min-w-sm">
        <Outlet />
        <Button className={"w-full text-md"} variant={"link"}><Link to="/FormHandling">Back</Link></Button>
      </div>
    </section>
  );
}
