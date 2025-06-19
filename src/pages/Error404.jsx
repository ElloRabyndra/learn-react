import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CardContent } from "@/components/ui/card";
import ErrorCard from "../components/Error/ErrorCard";

export default function Error404() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <section
      className={`${theme} min-h-screen flex items-center justify-center font-[Poppins]`}
    >
      <ErrorCard>
        <CardContent className={"space-y-1 px-4"}>
          <h1 className="text-xl font-semibold md:text-2xl">Oops!</h1>
          <p className="text-sm">404 Not Found</p>
        </CardContent>
      </ErrorCard>
    </section>
  );
}
