//Regla: rules/medium/js-cache-function-results.md

import { useMemo } from "react";

export default function Stats({ data }) {
  const total = useMemo(
    () => data.reduce((sum, n) => sum + n, 0),
    [data]
  );

  return <p>Total: {total}</p>;
}


//Mejora:
//Evita recomputar
//Render más barato