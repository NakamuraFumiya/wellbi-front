import {useEffect} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import axios from "axios";
import FormData from "form-data";
import {$generateHtmlFromNodes} from '@lexical/html';

type Props = {
  httpRequestHook: boolean,
}
export const HttpClientPlugin = ({httpRequestHook}: Props) => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    if (httpRequestHook) {
      const editorState = editor.getEditorState();
      const json = editorState.toJSON();
      const data = new FormData();
      data.append("message", JSON.stringify(json))
      axios.post("http://localhost:1323/api/posts", data).then((response) => console.log(response));
    }
  }, [httpRequestHook])

  return null;
};