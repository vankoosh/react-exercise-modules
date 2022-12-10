import React, {useEffect, useState} from 'react'

export default function GithubUsers() {
  const url = "https://api.github.com/users";

  const get = async() => {
    const res = await fetch(url)
    const json = await res.json()
    console.log(json);
    setUsers(json);
  }
  
  const [users, setUsers] = useState([])

  useEffect(() => {
    document.title = "GithubUsers"
    get();    
  },[])

  return (
    <>
      {/* <button onClick={get}>GET</button> */}
      {users.map((user) => {
        return <p>{ user}</p>
      })}
    </>
)
}