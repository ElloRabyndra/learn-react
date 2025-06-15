import * as React from "react"
import { useNavigate  } from "react-router";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function Nav() {
  const navigate = useNavigate();

  function handleSelect(value) {
    navigate(value);
  }
  
  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Page" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Pages</SelectLabel>
          <SelectItem value="/">Home</SelectItem>
          <SelectItem value="/liftingStateUp">Lifting State Up</SelectItem>
          <SelectItem value="/Routing">Routing</SelectItem>
          <SelectItem value="/FormHandling">Form Handling</SelectItem>
          <SelectItem value="/Movies">Fetch Movies</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
