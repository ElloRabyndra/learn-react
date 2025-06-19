import {
  CardAction,
  CardContent,
} from "@/components/ui/card";
import ErrorCard from "../Error/ErrorCard";

export default function ErrorModal({ onClose }) {
  return (
    <section className="fixed inset-0 flex items-center justify-center bg-zinc-600/25 backdrop-blur-0 font-[Poppins]">
      <ErrorCard>
        <CardContent className={"space-y-1 px-4"}>
          <h1 className="text-xl font-semibold md:text-2xl">Oops!</h1>
          <p className="text-sm">Error parsing users from localStorage</p>
        </CardContent>
        <CardAction className={"w-full flex justify-center"}>
          <button
            className="px-5 py-2 text-white bg-red-400 rounded-full cursor-pointer"
            onClick={onClose}
          >
            Close
          </button>
        </CardAction>
      </ErrorCard>
    </section>
  );
}
