import { Roadmap } from "@/types/roadmap";

type Props = {
  roadmap: Roadmap
}
export const LoadmapRow = ({roadmap}: Props) => {
  return (
    <div>
      {roadmap.ImageURL ? (
        <img src={roadmap.ImageURL} width={200} height={105} />
      ) : (
        <img src={"/images/pages/Roadmaps/List/default-item.png"} width={200} height={105}/>
      )}
      <p>{roadmap.Title ? roadmap.Title : "記事タイトルなし"}</p>
      <p>{roadmap.Message[0].children[0] ? roadmap.Message[0].children[0].text : "文章なし"}</p>
    </div>
  )
}