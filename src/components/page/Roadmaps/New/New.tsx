import {Header} from "@/components/ui/Layout/Header/Header";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import {useSession} from "next-auth/react";

const initialConfig = {
  namespace: "MyEditor",
  onError: (error: Error) => console.error(error),
};

export const New = () => {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      {session ? (
        <>
          <LexicalComposer initialConfig={initialConfig}>
            <RichTextPlugin
              contentEditable={<ContentEditable />}
              placeholder={<div>今日もお疲れ様です。執筆されますか？</div>}
            />
          </LexicalComposer>
        </>
      ) : (
        <>
          ログインし直してください
        </>
      )}
    </>
  )
};