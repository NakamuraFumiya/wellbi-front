import { Roadmap } from "@/types/roadmap";

type Props = {
  roadmap: Roadmap
}
export const LoadmapRow = ({roadmap}: Props) => {
  return (
    <div>
      <p>{roadmap.Title ? roadmap.Title : "記事タイトルなし"}</p>
      <p>{roadmap.Message[0].children[0] ? roadmap.Message[0].children[0].text : "文章なし"}</p>
    </div>
  )
}