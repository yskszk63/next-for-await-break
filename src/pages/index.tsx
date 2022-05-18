import { useEffect, useState } from "react"

async function* stream() { yield void 0; }

export default function Home() {
  const [err, setErr] = useState<unknown | null>(null);

  useEffect(() => {
    (async () => {
      for await (const _ of stream()) {
        break;
      }
    })().catch(setErr);
  }, [setErr]);

  return (
    <>
      <>It is works? {err && String(err)}</>
    </>
  )
}
