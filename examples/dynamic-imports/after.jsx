//Regla: rules/high/bundle-dynamic-imports.md

import dynamic from "next/dynamic";

const HeavyChart = dynamic(() => import("./HeavyChart"), {
  ssr: false,
  loading: () => <p>Loading chart...</p>,
});

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HeavyChart />
    </div>
  );
}


//Mejora:
//Menor bundle inicial
//Mejor LCP
//Carga bajo demanda