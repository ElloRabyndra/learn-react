import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export default function ToggleButton() {
  const  {toggleTheme} = useContext(ThemeContext);
  
  return (
    <div className="absolute top-5 right-6">
      <Switch id="airplane-mode" onClick={toggleTheme} className="scale-150 cursor-pointer" />
    </div>
  )
}
