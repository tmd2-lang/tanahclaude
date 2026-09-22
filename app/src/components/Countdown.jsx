import { REUNION_START } from "../data/site.js";

const DAY = 86400000;

export function daysUntil(target, now = Date.now()) {
  return Math.ceil((new Date(target).getTime() - now) / DAY);
}

export function countdownLabel(days) {
  if (days > 1) return `${days} days away`;
  if (days >= 0) return "Happening now";
  return "Until next time";
}

export default function Countdown({ target = REUNION_START }) {
  return <p className="notice__count">{countdownLabel(daysUntil(target))}</p>;
}
