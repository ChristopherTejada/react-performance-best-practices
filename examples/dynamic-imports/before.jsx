//Regla: rules/high/bundle-dynamic-imports.md

import HeavyChart from "./HeavyChart";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HeavyChart />
    </div>
  );
}


//Problema:
//Bundle inicial grande
//Código pesado cargado aunque no se use