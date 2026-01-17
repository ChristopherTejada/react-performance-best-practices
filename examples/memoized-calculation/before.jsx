//Regla: rules/medium/js-cache-function-results.md

export default function Stats({ data }) {
  const total = data.reduce((sum, n) => sum + n, 0);

  return <p>Total: {total}</p>;
}


//Problema:
//El cálculo corre en cada render
//Escala mal con listas grandes
//
//