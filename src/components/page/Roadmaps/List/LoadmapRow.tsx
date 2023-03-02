
import { Roadmap } from "@/types/roadmap";

type Props = {
  roadmap: Roadmap
}
export const LoadmapRow = ({roadmap}: Props) => {
  return <p>{roadmap.ID}</p>
}