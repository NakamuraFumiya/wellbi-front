import {useEffect, useState} from "react";
import axios from "axios";
import {LoadmapRow} from "@/components/page/Roadmaps/List/LoadmapRow";
import {Roadmap, ElementNode, RoadmapResponse} from "@/types/roadmap";
import {Header} from "@/components/ui/Layout/Header/Header";
import styled from "styled-components";

const { NEXT_PUBLIC_API_HOST_URL } = process.env

const Spacer = styled.div`
  padding-top: 4rem;
`;

const StyledListContainer = styled.div`
  padding: 0 15rem;
`;

const StyledItemContainer = styled.a`
  justify-content: center;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const StyledContentFlexBox = styled.div`
  display: flex;
  padding-top: 5rem;
`;

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
      <Header listPage={true} />
      <Spacer />
      <StyledListContainer>
        <h2>今日のあなたに</h2>
        <StyledContentFlexBox>
          {
            roadmaps.map((roadmap) => {
              return (
                <>
                  <StyledItemContainer>
                    <LoadmapRow roadmap={roadmap} key={roadmap.ID}/>
                  </StyledItemContainer>
                </>
              )
            })
          }
        </StyledContentFlexBox>
      </StyledListContainer>
    </>
  );
}