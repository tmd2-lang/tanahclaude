import usePageTitle from "../hooks/usePageTitle.js";
import PageIntro from "../components/PageIntro.jsx";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <PageIntro
      intro={{
        label: "404",
        title: "Nothing here.",
        sub: "That page doesn’t exist. It may have moved when the site was rebuilt.",
        actions: [{ label: "Back to the home page", href: "/", variant: "primary" }],
      }}
    />
  );
}
