import {Header} from "@/components/ui/Layout/Header/Header";
import {useRouter} from "next/router";

export const Detail = () => {
  const router = useRouter();
  const { roadmapID } = router.query;
  return (
    <>
      <Header />
      <h1>Roadmap詳細ページです</h1>
      <p>{roadmapID}</p>
    </>
  );
};