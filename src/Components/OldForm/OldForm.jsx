import { useState } from "react";
import FormInput from "./OldFormInput";
import Preview from "./OldPreview";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function OldForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  return (
    <Card className="w-full min-w-80 md:min-w-md">
      <CardHeader>
        <CardTitle className={"text-center text-xl font-bold -mb-2"}>Lifting State Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <FormInput formData={formData} setFormData={setFormData} />
          <Preview formData={formData} />
        </form>
      </CardContent>
    </Card>
  );
}
