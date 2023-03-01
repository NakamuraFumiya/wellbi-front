
import { Roadmap } from "@/types/roadmap";

type Props = {
  roadmap: Roadmap
}
export const LoadmapRow = ({roadmap}: Props) => {
  console.log(roadmap.Message)
  return <p>{roadmap.Message}</p>
}