import {
  Card,
  CardHeader,
} from "@/components/ui/card";

export default function ErrorCard({children}) {
  return (
    <Card className="w-[300px] md:w-[380px] text-center pt-0 overflow-auto shadow-2xl">
      <CardHeader
        className={"bg-red-400 text-white flex justify-center items-center p-5"}
      >
        <i className="text-4xl md:text-5xl bx bx-error"></i>
      </CardHeader>
      {children}
    </Card>
  );
}
