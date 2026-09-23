import Reveal from "./Reveal.jsx";
import Countdown from "./Countdown.jsx";
import Actions from "./Actions.jsx";

export default function ReunionNotice({ reunion }) {
  return (
    <section className="notice">
      <div className="wrap notice__inner">
        <Reveal>
          <p className="label">{reunion.label}</p>
          <p className="notice__line">{reunion.date}<br />{reunion.place}</p>
        </Reveal>
        <Reveal className="notice__right">
          <Countdown />
          <Actions items={[reunion.action]} />
        </Reveal>
      </div>
    </section>
  );
}
