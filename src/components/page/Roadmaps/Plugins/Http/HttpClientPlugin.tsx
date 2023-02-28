import {useEffect} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import axios from "axios";

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
      axios.get("http://localhost:1323/api/posts").then((response) => console.log(response));
    }
  }, [httpRequestHook])

  return null;
};