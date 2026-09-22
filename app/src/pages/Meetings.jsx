import meetings from "../data/meetings.js";
import usePageTitle from "../hooks/usePageTitle.js";
import PageIntro from "../components/PageIntro.jsx";
import { Block, Split } from "../components/Block.jsx";
import Listing from "../components/Listing.jsx";
import Placeholder from "../components/Placeholder.jsx";
import Band from "../components/Band.jsx";

export default function Meetings() {
  usePageTitle("Meetings");
  const { intro, upcoming, calendar, minutes, questions } = meetings;
  return (
    <>
      <PageIntro intro={intro} />

      <Split label={upcoming.label} heading={upcoming.heading}>
        <Listing items={upcoming.items} />
      </Split>

      <Block>
        <Placeholder {...calendar} />
      </Block>

      <Split label={minutes.label} heading={minutes.heading}>
        <Listing items={minutes.items} />
      </Split>

      <Band band={questions} />
    </>
  );
}
