export async function getStars() {
  const res = await fetch(`https://api.github.com/repos/Fatuousnerd/Konvata`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.stargazers_count;
}

export async function getForks() {
  return await fetch(`https://api.github.com/repos/Fatuousnerd/Konvata`, {
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((js) => js.stargazers_count);
}
