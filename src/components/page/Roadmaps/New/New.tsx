import { ComponentProps } from "react";
import {Header} from "@/components/ui/Layout/Header/Header";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {useSession} from "next-auth/react";
import styles from "./New.module.scss";
import styled from "styled-components";

const Spacer = styled.div`
  padding-top: 4rem;
`;

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "MyEditor",
  onError: (error) => console.error(error),
};

export const New = () => {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      {session ? (
        <>
          <LexicalComposer initialConfig={initialConfig}>
            <div className={styles.editorContainer}>
              <RichTextPlugin
                contentEditable={<ContentEditable className={styles.contentEditable} />}
                placeholder={<div className={styles.placeholder}>今日もお疲れ様です。執筆されますか？</div>}
                ErrorBoundary={LexicalErrorBoundary}
              />
            </div>
          </LexicalComposer>
        </>
      ) : (
        <>
          <Spacer />
          <p>投稿ページを利用するには、ログインし直してください。</p>
        </>
      )}
    </>
  )
};