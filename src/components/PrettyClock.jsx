import { useState,useEffect } from "react";

export default function PrettyClock() {
  const [date, setdate] = useState({date: new Date()})
  useEffect(()=>{
    setInterval(() => {
      setdate({ date: new Date() });
    }, 1000)
  },[])

  return (
      <div>
        <p>{date.date.toLocaleTimeString()}</p>
      </div>
    )
}
