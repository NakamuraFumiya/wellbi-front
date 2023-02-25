
import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100vw;
//   height: 100vh;
// `;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: yellow;
  padding: 1rem 2rem;
`;

const Spacer = styled.div`
  padding-top: 4rem;
`;

const FlexBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10rem;
  margin-right: 10rem;
`;

const Circle = styled.div`
  posision: relative;
  top: 50px;
  left: 50px;
  width: 19rem;
  height: 19rem;
  border-radius: 50%;
  background-color: aliceblue;
`;

const H1 = styled.h1`
  font-size: 2.8rem;
  //margin-left: 491px;
`;

const P = styled.p`
  //margin-left: 491px;
  color: #6E7B85;
`;

export const About = () => {
  return (
    <>
      {/*<Container>*/}
        {/*headerのブロック*/}
        <HeaderWrapper>
          <img src={"/images/common/project/wellbi-logo-icon.png"} width="97.3" height="23" alt="header-icon" />
        </HeaderWrapper>
        <Spacer />

        <main>
          <Circle />
          <FlexBoxRow>
            <div>
              <H1>Write roadmap for someone</H1>
              <P>wellbi(ウェルビ)はキャリアチェンジ情報共有プラットフォームです。誰かのために、自分のために、キャリアチェンジのためのロードマップを作りましょう。</P>
            </div>
            <img src={"/images/pages/About/headline.png"} width="489" height="335" alt="header-icon" />
          </FlexBoxRow>

          <h2>How it works</h2>
          <h3>再現性のある記事を書こう</h3>
          <img src={"/images/pages/About/article.png"} />
          <p>キャリアチェンジのための、あなたの実体験やアイディアをシェアしましょう。思わぬ反響があるかもしれません。</p>
          <h3>ロードマップを見つけよう</h3>
          <img src={"/images/pages/About/roadmap.png"} />
          <p>キャリアチェンジのモデルとする記事を見つけましょう。ゴールが明確になれば前に進むことが楽しくなります。</p>
          <h3>ドーナツを贈って著者を応援しよう</h3>
          <img src={"/images/pages/About/donuts.png"} />
          <p>著者を応援したくなったら有料のドーナツを贈りましょう。ドーナツを受け 取った著者には、現金やAmazonギフト券が還元されます。(※近日公開予定です)</p>

          <h2>全ての人が自分なりのキャリアをデザインできるように</h2>
          <p>興味を持った仕事、「やってみたい！」と思えた仕事。</p>
          <p>キャリアチェンジを考えたものの、最初の1歩が踏み出せなかったり、 道半ばで諦めてしまうのはすごくもったいないことです。</p>
          <p>新しいキャリアをスタートさせるためには、再現性のあるプロセスを最短距離で辿るのが一番だと考えています。</p>
          <p>Wellbiでは、実際にキャリアチェンジした方の実体験やアイディアをナレッジとして蓄積し、夢を追いかける方を支援します。</p>
          <p>さぁ、自分のために、誰かのために、あなたの知見をシェアしましょう。</p>
        </main>
      {/*</Container>*/}


    </>
  )
}