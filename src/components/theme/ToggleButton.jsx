import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function ToggleButton() {
  return (
    <div className="absolute top-5 right-6">
      <Switch id="airplane-mode" className="scale-150 cursor-pointer" />
    </div>
  )
}
