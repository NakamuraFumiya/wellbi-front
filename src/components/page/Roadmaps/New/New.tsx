import {ComponentProps, useState} from "react";
import {useSession} from "next-auth/react";
import styles from "./New.module.scss";
import styled from "styled-components";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {AutoFocusPlugin} from "@/components/page/Roadmaps/Plugins/AutoFocus/AutoFocusPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { nodes } from "./nodes";
import {ToolbarPlugin} from "@/components/page/Roadmaps/Plugins/Toolbar/ToolbarPlugin";
import {NewRoadmapHeader} from "@/components/ui/Layout/Header/NewRoadmapHeader";
import {HttpClientPlugin} from "@/components/page/Roadmaps/Plugins/Http/HttpClientPlugin";

const Spacer = styled.div`
  padding-top: 4rem;
`;

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "MyEditor",
  onError: (error) => console.error(error),
  nodes: nodes,
};

const StyledNone = styled.div`
  display: none;
`;

export const New = () => {
  const { data: session } = useSession();
  const [httpRequestHook, setHttpRequestHook] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  const titleHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(() => e.target.value)
  };

  return (
    <>
      <NewRoadmapHeader setHttpRequestHook={setHttpRequestHook}/>
      {session ? (
        <>
          <Spacer />
          <button onClick={(e) => {
            document.getElementById("fileUpload")?.click();
          }}>
            <img src={"/images/common/icon/upload-image.png"} width={50} height={50}/>
          </button>
          <StyledNone>
            <input
              id={"fileUpload"}
              type={"file"}
              accept={"image/*"}
            />
          </StyledNone>
          <input
            value={title}
            onChange={titleHandleChange}
            type={"text"}
            minLength={1}
            maxLength={100}
            placeholder={"記事タイトル"}
            className={styles.title}
          />
          <LexicalComposer initialConfig={initialConfig}>
            <ToolbarPlugin />
            <div className={styles.editorContainer}>
              <RichTextPlugin
                contentEditable={<ContentEditable className={styles.contentEditable} />}
                placeholder={<div className={styles.placeholder}>今日もお疲れ様です。執筆されますか？</div>}
                ErrorBoundary={LexicalErrorBoundary}
              />
            </div>
            <AutoFocusPlugin />
            <HistoryPlugin />
            <HttpClientPlugin httpRequestHook={httpRequestHook} title={title} />
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