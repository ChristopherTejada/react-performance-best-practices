
//Regla: rules/critical/server-parallel-fetching.md

export default async function Page() {
  const [userRes, postsRes] = await Promise.all([
    fetch("https://api.example.com/user"),
    fetch("https://api.example.com/posts"),
  ]);

  const user = await userRes.json();
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
