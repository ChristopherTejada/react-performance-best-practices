import { useMemo } from "react";

export default function ProductList({ products }) {
  const filtered = useMemo(
    () => products.filter((p) => p.inStock),
    [products]
  );

  return (
    <ul>
      {filtered.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}
