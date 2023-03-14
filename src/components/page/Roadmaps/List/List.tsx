import {useEffect, useState} from "react";
import axios from "axios";
import {LoadmapRow} from "@/components/page/Roadmaps/List/LoadmapRow";
import {Roadmap, ElementNode, RoadmapResponse} from "@/types/roadmap";
import {Header} from "@/components/ui/Layout/Header/Header";
import styled from "styled-components";
import Router from "next/router";

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
  column-gap: 2rem;
  padding-top: 5rem;
`;

export const List = () => {
  const [roadmaps, setLoadmaps] = useState<Roadmap[]>([]);
  const handler = (path: string) => {
    Router.push(path)
  };
  const { NEXT_PUBLIC_API_HOST_URL } = process.env;

  useEffect(() => {
    axios.get(`${NEXT_PUBLIC_API_HOST_URL}/api/roadmaps`).then((response) => {
      const roadmapList: Roadmap[] = [];
      response.data.map((roadmap: RoadmapResponse) => {
        // MessageとElementNodeのマッピング処理
        const elementNodes: ElementNode[] = []
        JSON.parse(roadmap.Message).map((elementNode: ElementNode) => {
          elementNodes.push(elementNode)
        })
        roadmapList.push({ ID: roadmap.ID, Title: roadmap.Title, Message: elementNodes, ImageURL: roadmap.ImageURL })
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
                  <StyledItemContainer onClick={() => handler(`/roadmaps/${roadmap.ID}`)} key={roadmap.ID}>
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