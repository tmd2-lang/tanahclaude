import site from "../data/site.js";
import home from "../data/home.js";
import usePageTitle from "../hooks/usePageTitle.js";
import Hero from "../components/Hero.jsx";
import Plate from "../components/Plate.jsx";
import ReunionNotice from "../components/ReunionNotice.jsx";
import Trio from "../components/Trio.jsx";
import Band from "../components/Band.jsx";

export default function Home() {
  usePageTitle(null);
  return (
    <>
      <Hero established={site.established} hero={home.hero} />
      <Plate image={home.plate} />
      <ReunionNotice reunion={home.reunion} />
      <Trio heading={home.trioHeading} items={home.trio} />
      <Band band={home.closing} tone="alt" />
    </>
  );
}
