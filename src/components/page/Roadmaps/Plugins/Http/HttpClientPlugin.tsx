import {useEffect} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";

type Props = {
  httpRequestHook: boolean,
}
export const HttpClientPlugin = ({httpRequestHook}: Props) => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    if (httpRequestHook) {
      const editorState = editor.getEditorState();
      const json = editorState.toJSON();
      console.log("投稿する");
      console.log(json.root.children);
    }
  }, [httpRequestHook])

  return null;
};