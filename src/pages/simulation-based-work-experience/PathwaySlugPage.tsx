import { useParams } from "react-router-dom";
import PathwayPage from "@/components/PathwayPage";
import { pathways } from "@/data/pathways";
import NotFound from "@/pages/NotFound";

export default function PathwaySlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? pathways[slug] : undefined;

  if (!data) return <NotFound />;

  return <PathwayPage data={data} />;
}
