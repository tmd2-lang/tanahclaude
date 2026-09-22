import dues from "../data/dues.js";
import usePageTitle from "../hooks/usePageTitle.js";
import PageIntro from "../components/PageIntro.jsx";
import { Block, Split } from "../components/Block.jsx";
import Rows from "../components/Rows.jsx";
import Placeholder from "../components/Placeholder.jsx";
import Faq from "../components/Faq.jsx";
import Band from "../components/Band.jsx";

export default function Dues() {
  usePageTitle("Dues");
  const { intro, funds, payment, faq, receipt } = dues;
  return (
    <>
      <PageIntro intro={intro} />

      <Split label={funds.label} heading={funds.heading}>
        <Rows rows={funds.rows} />
      </Split>

      <Block>
        <Placeholder {...payment} />
      </Block>

      <Split label={faq.label} heading={faq.heading}>
        <Faq items={faq.items} />
      </Split>

      <Band band={receipt} />
    </>
  );
}
