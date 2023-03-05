import {useEffect, useState} from "react";
import axios from "axios";
import {LoadmapRow} from "@/components/page/Roadmaps/List/LoadmapRow";
import {Roadmap, ElementNode, RoadmapResponse} from "@/types/roadmap";
import {Header} from "@/components/ui/Layout/Header/Header";
import styled from "styled-components";
import Router from "next/router";

const { NEXT_PUBLIC_API_HOST_URL } = process.env

const Spacer = styled.div`
  padding-top: 4rem;
`;

const StyledListContainer = styled.div`
  padding: 0 10rem;
`;

const StyledItemContainer = styled.a`
  justify-content: center;
  width: 12rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

const StyledContentFlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  padding-top: 5rem;
`;

export const List = () => {
  const [roadmaps, setLoadmaps] = useState<Roadmap[]>([]);
  const handler = (path: string) => {
    Router.push(path)
  };

  useEffect(() => {
    axios.get(`${NEXT_PUBLIC_API_HOST_URL}/api/posts`).then((response) => {
      const roadmapList: Roadmap[] = [];
      response.data.map((roadmap: RoadmapResponse) => {
        // MessageとElementNodeのマッピング処理
        const elementNodes: ElementNode[] = []
        JSON.parse(roadmap.Message).map((elementNode: ElementNode) => {
          // console.log(elementNode)
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
      <Header listPage={true} />
      <Spacer />
      <StyledListContainer>
        <h2>今日のあなたに</h2>
        <StyledContentFlexBox>
          {
            roadmaps.map((roadmap) => {
              return (
                  <StyledItemContainer onClick={() => handler("/")} key={roadmap.ID}>
                    <img src={"/images/pages/Roadmaps/List/default-item.png"} width={150} height={100}/>
                    <LoadmapRow roadmap={roadmap} />
                  </StyledItemContainer>
              )
            })
          }
        </StyledContentFlexBox>
      </StyledListContainer>
    </>
  );
}