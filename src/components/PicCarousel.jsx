import { useState, useEffect } from "react";

// THIS IS ALSO AN EXAMPLE OF SEPARATING PRESENTATIONAL COMPONENTS FROM CONTAINER COMPONENTS
// THE FIRST COMPONENT IS PRESENTATIONAL, IT ONLY RENDERS THE JSX
function Pics({ src }) {
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={src} alt="pig" />
    </div>
  );
}

// THE NEXT COMPONENT IS A CONTAINER COMPONENT AND CONTAINS THE LOGIC BEFORE FINAL RENDER
// AND SHOULD IMPORT THE PRESENTATIONAL COMPONENT FIRST TO USE IT

const PICS = [
  "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
];

export default function PicsContainer() {
  const [currentPic, setcurrentPic] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      currentPic < PICS.length -1
        ? setcurrentPic((prev) => prev + 1)
        : setcurrentPic(0);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentPic]);

  return <Pics src={PICS[currentPic]} />;
}
