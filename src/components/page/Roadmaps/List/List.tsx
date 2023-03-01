import {useEffect, useState} from "react";
import axios from "axios";
import {LoadmapRow} from "@/components/page/Roadmaps/List/LoadmapRow";

const { NEXT_PUBLIC_API_HOST_URL } = process.env

export const List = () => {
  const [roadmaps, setLoadmaps] = useState([]);
  useEffect(() => {
    axios.get(`${NEXT_PUBLIC_API_HOST_URL}/api/posts`).then((response) => {
      // console.log(response.data)
      // console.log(response.data[0].Message);
      console.log(response.data)
      setLoadmaps(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      {
        roadmaps.map((roadmap) => {
          console.log(roadmap)
          // <LoadmapRow roadmap={roadmap}/>
        })
      }
      <h1>Listページです</h1>
    </>
  );
}