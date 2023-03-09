import {Header} from "@/components/ui/Layout/Header/Header";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ElementNode, Roadmap} from "@/types/roadmap";
import axios from "axios";
import styled from "styled-components";

const Spacer = styled.div`
  padding-top: 4rem;
`;

const SpacerBottom = styled.div`
  padding-top: 15rem;
`;

const StyledRoadmapContainer = styled.div`
  padding-left: 22rem;
`;

const StyledTitle = styled.div`
  padding-top: 2rem;
`;

 const StyledContent = styled.div`
   padding-top: 1rem;
 `;

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
      <Spacer />
      {roadmap && (
        <StyledRoadmapContainer>
          <>
            <img src={"/images/pages/Roadmaps/List/default-item.png"} width={650} height={340}/>

            <StyledTitle>
              <h1>{roadmap.Title ? roadmap.Title : "記事タイトルなし"}</h1>
            </StyledTitle>

            {roadmap.Message.map((elementNode: ElementNode) => {
              switch (elementNode.type) {
                case "heading":
                  if (elementNode.tag == "h1" || "h2") {
                    return (
                      <StyledContent>
                        <h2>{elementNode.children[0].text}</h2>
                      </StyledContent>
                    );
                  } else if (elementNode.tag == "h3") {
                    return (
                      <StyledContent>
                        <h3>{elementNode.children[0].text}</h3>
                      </StyledContent>
                    );                  };
                case "paragraph":
                  return (
                    <StyledContent>
                      <p>{elementNode.children[0].text}</p>
                    </StyledContent>
                  );              }
            })}
          </>
        </StyledRoadmapContainer>
      )}
      <SpacerBottom />
    </>
  );
};
