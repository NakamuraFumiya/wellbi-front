import {Header} from "@/components/ui/Layout/Header/Header";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";

const initialConfig = {
  namespace: "MyEditor",
  onError: (error: Error) => console.error(error),
};

export const New = () => {
  return (
    <>
      <Header />
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div>今日もお疲れ様です。執筆されますか？</div>}
        />
      </LexicalComposer>
    </>
  )
};