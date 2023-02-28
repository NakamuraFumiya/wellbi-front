import {useEffect} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import axios from "axios";
import FormData from "form-data";

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

      const data = new FormData();
      data.append("message", json.root.children)
      axios.post("http://localhost:1323/api/posts", data).then((response) => console.log(response));
      // axios.get("http://localhost:1323/api/posts").then((response) => console.log(response));
    }
  }, [httpRequestHook])

  return null;
};