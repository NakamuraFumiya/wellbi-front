import styled from "styled-components";
import Router from "next/router";
import {Session} from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";


const StyledHeaderParent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeaderChild = styled.div`
  display: flex;
  margin-right: 10rem;
  column-gap: 1rem;
  align-items: center;
`;

const StyledLoginButton = styled.button`
  //font-size: 1.5rem;
  color: white;
  background-color: #FF6C6C;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
`

const StyledLogOutButton = styled.button`
  color: white;
  background-color: cornflowerblue;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
`

const StyledHeaderButton = styled.button`
  color: #000000D1;
  font-size: 1rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: white;
  padding: 1rem 2rem;
`;

const Spacer = styled.div`
  padding-top: 4rem;
`;

type Props = {
  aboutPage?: boolean
  roadMapNewPage?: boolean
}
export const Header = ({aboutPage, roadMapNewPage}: Props) => {
  const { data: session } = useSession();
  const handler = (path: string) => {
    Router.push(path)
  };

  return (
    <div>
      <StyledHeader>
        <StyledHeaderParent>
          <StyledHeaderButton onClick={() => handler("/")}>
            <img src={"/images/common/project/wellbi-logo-icon.png"} width="97.3" height="23" alt="header-icon"/>

          </StyledHeaderButton>
          <div>
            <StyledHeaderChild>
              {
                !aboutPage && (
                  <StyledHeaderButton onClick={() => handler("/")}>Wellbiとは？</StyledHeaderButton>
                )
              }
              {session ? (
                <>
                  <StyledHeaderButton>Roadmapを見る</StyledHeaderButton>
                  {!roadMapNewPage && <StyledHeaderButton onClick={() => handler("/roadmaps/new")}>新規Roadmapを投稿する</StyledHeaderButton>}
                  <StyledLogOutButton onClick={() => signOut()}>Log Out</StyledLogOutButton>
                </>
              ) : (
                <>
                  <StyledHeaderButton>Roadmapを見る</StyledHeaderButton>
                  <StyledLoginButton onClick={() => signIn()}>Log In</StyledLoginButton>
                </>
              )}
            </StyledHeaderChild>
          </div>
        </StyledHeaderParent>
      </StyledHeader>
      <Spacer/>
    </div>
  );
};