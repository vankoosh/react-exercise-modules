import { useEffect, useState } from "react";

export default function GithubUsers() {
  const url = "https://api.github.com/users/vankoosh/repos";

  async function get() {
    const res = await fetch(url);
    const json = await res.json();
    setUsers(json);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    document.title = "Github Users";
    get();
  }, []);

  return (
    <>
      {/* <button onClick={get}>GET</button> */}
      {users.map((user) => {
        return <p key={crypto.randomUUID()}>{user.name} is a repo about -- {user.description}</p>;
      })}
    </>
  );
}
