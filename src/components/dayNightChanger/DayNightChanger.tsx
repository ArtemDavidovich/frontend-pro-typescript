import { useState } from "react";


export default function DayNightChanger(): JSX.Element {
    const [dayTime, setDayTime] = useState<boolean>(false);
    
   // let text = "Night 🌚";    

  const dayTimeText = (): void => {
    setDayTime((state) => !state);
    // if (text === "Night 🌚") {
    //   text = "Day 🌞";
      
    // } else if(text === "Day 🌞"){
    //   text = "Night 🌚";
      
    // }    
  };  

  return (
    <div>
      <span>{dayTime ? 'Day 🌞' : 'Night 🌚'}</span>
      <button onClick={dayTimeText}>Change</button>
    </div>
  );
}
