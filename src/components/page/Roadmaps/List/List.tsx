import {useEffect} from "react";
import axios from "axios";

const { NEXT_PUBLIC_API_HOST_URL } = process.env

export const List = () => {
  useEffect(() => {
    axios.get(`${NEXT_PUBLIC_API_HOST_URL}/api/posts`).then((response) => console.log(response)).catch((error) => console.log(error))
  }, [])

  return (
    <h1>Listページです</h1>
  );
}