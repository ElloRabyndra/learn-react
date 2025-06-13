import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

export default function ErrorModal({ onClose }) {
  return (
    <section className="fixed inset-0 flex items-center justify-center bg-zinc-600/25 backdrop-blur-0 font-[Poppins]">
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
      </Card>
    </section>
  );
}
