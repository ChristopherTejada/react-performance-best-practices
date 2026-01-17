//Regla: rules/critical/server-parallel-fetching.md


export default async function Page() {
  const userRes = await fetch("https://api.example.com/user");
  const user = await userRes.json();

  const postsRes = await fetch(
    `https://api.example.com/posts?user=${user.id}`
  );
  const posts = await postsRes.json();

  return (
    <div>
      <h1>{user.name}</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
