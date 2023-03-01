import {useEffect} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import axios from "axios";
import FormData from "form-data";
import {$generateHtmlFromNodes} from '@lexical/html';

const { NEXT_PUBLIC_API_HOST_URL } = process.env

if (!NEXT_PUBLIC_API_HOST_URL) throw new Error('You must provide API_HOST_URL env var.');

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
      axios.post(`${NEXT_PUBLIC_API_HOST_URL}/api/posts`, data).then((response) => console.log(response));
    }
  }, [httpRequestHook])

  return null;
};