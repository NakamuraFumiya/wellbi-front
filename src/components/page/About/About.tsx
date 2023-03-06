
import styled from "styled-components";
import { useSession, signIn } from "next-auth/react";
import {Header} from "@/components/ui/Layout/Header/Header";

const Spacer = styled.div`
  padding-top: 4rem;
`;

const DescriptionSpacer = styled.div`
  padding-top: 1rem;
`;

const FlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 22rem;
  margin-right: 15rem;
`;

const Circle = styled.div`
  //posision: fixed;
  //width: 100vw;
  //top: 50px;
  //left: 50px;
  width: 19rem;
  height: 19rem;
  border-radius: 50%;
  background-color: #D6E3ED;
  opacity: 0.3;
`;

const StyledTitle = styled.h1`
  font-size: 2.8rem;
`;

const StyledDescription = styled.p`
  color: #6E7B85;
`;

const Border = styled.div`
  padding-top: 10rem;
  border-bottom: 1px solid #D6E3ED;
`;

const StyledHowItWorks = styled.h2`
  text-align: center;
  font-size: 2.9rem;
  padding-top: 0.5rem;
`

const StyledContentFlexBox = styled.div`
  display: flex;
  flex-display: row;
  column-gap: 5rem;
  padding-top: 2rem;
  justify-content: center;
`;

const StyledContentChild = styled.div`
  background-color: rgba(255, 108, 108, 0.3);
  width: 19rem;
  border-radius: 1.2rem;
  padding: 1rem;
  text-align: center;
`;

const StyledServiceVisionFlexBox = styled.div`
  display: flex;
  column-gap: 10rem;
  padding-left: 10rem;
`;
const StyledServiceVisionTitle = styled.h2`
  font-size: 1.7rem;
  width: 20rem;
`;
const StyledServiceVisionDescription = styled.p`
  font-size: 1rem;
  width: 40rem;
  color: #6E7B85;
`;

// 4つ目のブロック
const StyledJoinFlexBox = styled.div`
  display: flex;
  background-color: rgba(255, 108, 108, 0.3);
  border-radius: 1.2rem;
  column-gap: 10rem;
  padding: 0 5rem;
  margin: 0 auto;
  width: 60rem;
  justify-content: space-between;

`;
const StyledJoinTitle = styled.h2`
  padding-top: 2rem;
  font-size: 2.5rem;
`;
const StyledJoinDescription = styled.h2`
  font-size: 1.1rem;
  color: #6E7B85;
`;
const StyledJoinButton = styled.button`
  font-size: 1.1rem;
  color: white;
  background-color: #FF6C6C;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  border-radius: 1rem;
  cursor: pointer;
`

export const About = () => {
  const { data: session } = useSession();

  return (
    <>
      <Header aboutPage={true}/>
      <main>
        <Spacer />
        <FlexBoxRow>
          <div>
            <StyledTitle>Write roadmap for someone</StyledTitle>
            <StyledDescription>wellbi(ウェルビ)はキャリアチェンジ情報共有プラットフォームです。誰かのために、自分のために、キャリアチェンジのためのロードマップを作りましょう。</StyledDescription>
          </div>
          <img src={"/images/pages/About/headline.png"} width="489" height="335" alt="header-icon" />
        </FlexBoxRow>
        <Border />

        <Spacer />
        <StyledHowItWorks>How it works</StyledHowItWorks>
        <StyledContentFlexBox>
          <StyledContentChild>
            <h3>ロードマップを公開しよう</h3>
            <img src={"/images/pages/About/article.png"} width={280} height={186} />
            <StyledDescription>キャリアチェンジのための、あなたの実体験やアイディアをシェアしましょう。きっとだれかのロールモデルになるはず。</StyledDescription>
          </StyledContentChild>
          <StyledContentChild>
            <h3>自分なりのキャリアモデルを見つけよう</h3>
            <img src={"/images/pages/About/roadmap.png"} width={280} height={195}/>
            <StyledDescription>キャリアのモデルとする記事を見つけましょう。ゴールが明確になれば前に進むことが楽しくなります。</StyledDescription>
          </StyledContentChild>
          <StyledContentChild>
            <h3>ドーナツを贈って著者を応援しよう</h3>
            <img src={"/images/pages/About/donuts.png"} width={280} height={181} />
            <StyledDescription>著者を応援したくなったら有料のドーナツを贈りましょう。ドーナツを受け 取った著者には、現金やAmazonギフト券が還元されます。</StyledDescription>
          </StyledContentChild>
        </StyledContentFlexBox>
        <Border />

        <Spacer />
        <Spacer />
        <StyledServiceVisionFlexBox>
          <StyledServiceVisionTitle>全ての人が自分なりのキャリアをデザインできるように</StyledServiceVisionTitle>
          <div>
            <StyledServiceVisionDescription>人生において仕事はたくさんの時間を占めます。</StyledServiceVisionDescription>
            <DescriptionSpacer />
            <StyledServiceVisionDescription>お金のために働く。</StyledServiceVisionDescription>
            <StyledServiceVisionDescription>でもそれだけだとなにか物足りない。</StyledServiceVisionDescription>
            <DescriptionSpacer />
            <StyledServiceVisionDescription>仕事に対して情熱を持つことができたり</StyledServiceVisionDescription>
            <StyledServiceVisionDescription>もっと充実した時間を送ることができるなら. . .</StyledServiceVisionDescription>
            <StyledServiceVisionDescription>人生の幸福度はきっと高まるはず。</StyledServiceVisionDescription>
            <DescriptionSpacer />
            <StyledServiceVisionDescription>Wellbiでは、実際にキャリアチェンジした方の実体験やアイディアを待っています。</StyledServiceVisionDescription>
            <DescriptionSpacer />
            <StyledServiceVisionDescription>さぁ、自分のために、誰かのために、あなたの知見をシェアしましょう。</StyledServiceVisionDescription>
          </div>
        </StyledServiceVisionFlexBox>
        <Border />

        {/*4つ目のブロック*/}
        {!session && (
          <>
            <Spacer />
            <StyledJoinFlexBox>
              <div>
                <StyledJoinTitle>Join Wellbi</StyledJoinTitle>
                <StyledJoinDescription>あなたの実体験やアイディアを共有しよう</StyledJoinDescription>
                <StyledJoinButton onClick={() => signIn()}>今すぐはじめる</StyledJoinButton>
              </div>
              <img src={"/images/pages/About/book.png"} width={432} height={303} />
            </StyledJoinFlexBox>
            <Border />
          </>
        )}
      </main>
    </>
  )
}