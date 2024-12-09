import { Pre, highlight } from "codehike/code";

export async function Code({ value, lang }: { value: string; lang?: string }) {
  const highlighted = await highlight(
    { value, lang: lang ?? "", meta: "" },
    "github-light"
  );
  return <Pre code={highlighted} />;
}
