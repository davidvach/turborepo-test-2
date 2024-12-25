import { allHeroes } from "../data";

export const runtime = "edge";

export async function generateStaticParams() {
    return allHeroes.map((hero) => ({
        heroId: hero.id,
    }));
}

import HeroPage from "./HeroPage";

export default function Page({ params }) {
    return <HeroPage params={params} />;
}
  