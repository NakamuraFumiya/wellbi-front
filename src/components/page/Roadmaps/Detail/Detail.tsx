import {Header} from "@/components/ui/Layout/Header/Header";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ElementNode, Roadmap} from "@/types/roadmap";
import axios from "axios";

export const Detail = () => {
  const router = useRouter();
  const { roadmapID } = router.query;
  const [roadmap, setRoadmap] = useState<Roadmap>();
  const { NEXT_PUBLIC_API_HOST_URL } = process.env;


  useEffect(() => {
    axios.get(`${NEXT_PUBLIC_API_HOST_URL}/api/posts/${roadmapID}`)
      .then((response) => {
        const data = response.data;
        const elementNodes: ElementNode[] = []
        JSON.parse(data.Message).map((elementNode: ElementNode) => {
          elementNodes.push(elementNode)
        })
        setRoadmap({ID: data.ID, Title: data.Title, Message: elementNodes});
      });
  }, [])

  return (
    <>
      <Header />
      <h1>Roadmap詳細ページです</h1>
      <p>{roadmapID}</p>
    </>
  );
};