import reunion from "../data/reunion.js";
import usePageTitle from "../hooks/usePageTitle.js";
import PageIntro from "../components/PageIntro.jsx";
import { Block, Split } from "../components/Block.jsx";
import Rows from "../components/Rows.jsx";
import Prose from "../components/Prose.jsx";
import Placeholder from "../components/Placeholder.jsx";
import Countdown from "../components/Countdown.jsx";
import Reveal from "../components/Reveal.jsx";
import SmartLink from "../components/SmartLink.jsx";

export default function Reunion() {
  usePageTitle("Reunion");
  const { intro, details, weekend, shirts, order, stay } = reunion;
  return (
    <>
      <PageIntro intro={intro} />

      <Split label={details.label} aside={<Countdown as="h2" className="countdown-heading" />}>
        <Rows rows={details.rows} />
      </Split>

      <Block label={weekend.label} heading={weekend.heading}>
        <ol className="days">
          {weekend.days.map((day) => (
            <Reveal as="li" className="day" key={day.date}>
              <p className="label">{day.date}</p>
              <h3>{day.title}</h3>
              <ul className="day__events">
                {day.events.map((event) => (
                  <li key={event.time}>
                    <time>{event.time}</time>
                    <span>{event.what}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </Block>

      <Block id="tshirts">
        <div className="shirt">
          <Reveal>
            <div className="shirt__slot" role="img" aria-label={shirts.slotAlt} />
            <p className="shirt__caption">{shirts.caption}</p>
          </Reveal>
          <Reveal className="shirt__main">
            <p className="label">{shirts.label}</p>
            <h2>{shirts.heading}</h2>
            <Rows rows={shirts.rows} />
            <p className="deadline">{shirts.deadline}</p>
            <p>{shirts.deadlineNote}</p>
            <div className="actions">
              <SmartLink className="action" href={shirts.action.href}>{shirts.action.label}</SmartLink>
            </div>
          </Reveal>
        </div>
        <div className="shirt__order">
          <Placeholder {...order} />
        </div>
      </Block>

      <Split label={stay.label} heading={stay.heading}>
        <Prose paragraphs={stay.paragraphs} />
        <div className="aside-note">
          <p className="label">{stay.headcount.label}</p>
          <h3>{stay.headcount.title}</h3>
          <p>{stay.headcount.text}</p>
          <div className="actions">
            <SmartLink className="action" href={stay.headcount.action.href}>{stay.headcount.action.label}</SmartLink>
          </div>
        </div>
      </Split>
    </>
  );
}
