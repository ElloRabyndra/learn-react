import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";


export default function Error404() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <section className={`${theme} min-h-screen flex items-center justify-center font-[Poppins]`}>
      <Card className="w-[300px] md:w-[380px] text-center pt-0 overflow-auto shadow-2xl">
        <CardHeader
          className={
            "bg-red-400 text-white flex justify-center items-center p-5"
          }
        >
          <i className="text-4xl md:text-5xl bx bx-error"></i>
        </CardHeader>
        <CardContent className={"space-y-1 px-4"}>
          <h1 className="text-xl font-semibold md:text-2xl">Oops!</h1>
          <p className="text-sm">404 Not Found</p>
        </CardContent>
      </Card>
    </section>
  );
}
