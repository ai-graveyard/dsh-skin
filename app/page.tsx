import { getSkins } from "@/lib/skins";
import { HomeContent } from "@/components/home-content";

export default async function Home() {
  return <HomeContent skins={await getSkins()} />;
}
