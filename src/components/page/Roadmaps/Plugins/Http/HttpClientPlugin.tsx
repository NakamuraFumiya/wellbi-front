import {useEffect} from "react";
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import axios from "axios";
import FormData from "form-data";
import {$generateHtmlFromNodes} from '@lexical/html';
import Router from "next/router";

const { NEXT_PUBLIC_API_HOST_URL } = process.env

if (!NEXT_PUBLIC_API_HOST_URL) throw new Error('You must provide API_HOST_URL env var.');

type Props = {
  httpRequestHook: boolean;
  title: string;
  imageURL: string;
}
export const HttpClientPlugin = ({httpRequestHook, title, imageURL}: Props) => {
  const [editor] = useLexicalComposerContext();
  const handler = (path: string) => {
    Router.push(path)
  };

  useEffect(() => {
    if (httpRequestHook) {
      const editorState = editor.getEditorState();
      const json = editorState.toJSON();
      const data = new FormData();
      data.append("title", title);
      data.append("message", JSON.stringify(json.root.children))
      if (imageURL) {
        data.append("imageURL", imageURL)
      }
      axios.post(`${NEXT_PUBLIC_API_HOST_URL}/api/posts`, data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      handler("/roadmaps/list");
    }
  }, [httpRequestHook])

  return null;
};