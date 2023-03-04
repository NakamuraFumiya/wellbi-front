import {useEffect, useState} from "react";
import axios from "axios";
import {LoadmapRow} from "@/components/page/Roadmaps/List/LoadmapRow";
import {Roadmap, ElementNode, RoadmapResponse} from "@/types/roadmap";

const { NEXT_PUBLIC_API_HOST_URL } = process.env

export const List = () => {
  const [roadmaps, setLoadmaps] = useState<Roadmap[]>([]);
  useEffect(() => {
    axios.get(`${NEXT_PUBLIC_API_HOST_URL}/api/posts`).then((response) => {
      const roadmapList: Roadmap[] = [];
      response.data.map((roadmap: RoadmapResponse) => {
        // MessageとElementNodeのマッピング処理
        const elementNodes: ElementNode[] = []
        JSON.parse(roadmap.Message).map((elementNode: ElementNode) => {
          console.log(elementNode)
          elementNodes.push(elementNode)
        })
        roadmapList.push({ ID: roadmap.ID, Message: elementNodes })
      })
      setLoadmaps(roadmapList)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      {
        roadmaps.map((roadmap) => {
          return <LoadmapRow roadmap={roadmap} key={roadmap.ID}/>
        })
      }
      <h1>Listページです</h1>
    </>
  );
}