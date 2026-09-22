import site from "./data/site.js";
import Masthead from "./components/Masthead.jsx";
import Hero from "./components/Hero.jsx";
import Plate from "./components/Plate.jsx";
import ReunionNotice from "./components/ReunionNotice.jsx";
import Trio from "./components/Trio.jsx";
import Closing from "./components/Closing.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Masthead name={site.name} nav={site.nav} />
      <main id="main">
        <Hero established={site.established} hero={site.hero} />
        <Plate alt={site.plateAlt} />
        <ReunionNotice reunion={site.reunion} />
        <Trio heading={site.trioHeading} items={site.trio} />
        <Closing closing={site.closing} />
      </main>
      <Footer footer={site.footer} />
    </>
  );
}
