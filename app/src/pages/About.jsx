import about from "../data/about.js";
import usePageTitle from "../hooks/usePageTitle.js";
import PageIntro from "../components/PageIntro.jsx";
import { Block, Split } from "../components/Block.jsx";
import Prose from "../components/Prose.jsx";
import Rows from "../components/Rows.jsx";
import Actions from "../components/Actions.jsx";
import Reveal from "../components/Reveal.jsx";
import SmartLink from "../components/SmartLink.jsx";

export default function About() {
  usePageTitle("About");
  const { intro, history, purpose, officers, documents, lines } = about;
  return (
    <>
      <PageIntro intro={intro} />

      <Split tone="alt" label={history.label} heading={history.heading}>
        <Prose paragraphs={history.paragraphs} />
      </Split>

      <Split label={purpose.label} heading={purpose.heading}>
        <Prose paragraphs={purpose.paragraphs} />
      </Split>

      <Split tone="alt" label={officers.label} heading={officers.heading}>
        <Rows rows={officers.rows} />
        <div className="aside-note">
          <p className="label">{documents.label}</p>
          <p>{documents.text}</p>
          <div className="actions"><Actions items={documents.actions} /></div>
        </div>
      </Split>

      <Block heading={lines.heading} sub={lines.sub}>
        <ul className="lines">
          {lines.items.map((line) => (
            <Reveal as="li" key={line.name}>
              <p className="label">{line.year}</p>
              <h3>{line.name}</h3>
              <p>
                {line.note}
                {line.href && <> <SmartLink href={line.href}>Write to the Historian.</SmartLink></>}
              </p>
            </Reveal>
          ))}
        </ul>
      </Block>
    </>
  );
}
