import { useState } from "react";
import { Btn,Cute } from "./App.styled";

export const App = () => {
  const [first, setfirst] = useState(false);
  
  const Click = () =>{
    setfirst(prev => !prev)

  }
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    ТЫ ЛОХ
    <Btn type="button" onClick={Click}>Клацни</Btn>
    {first && <Cute>Стася ЛОХ</Cute>}
    </div>
  );
};
