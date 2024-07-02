import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [dontSwitchWins, setDontSwitchWins] = useState(0);
  const [switchWins, setSwitchWins] = useState(0);
  const [iterations, setIterations] = useState(Array(100).fill(null).map(() => ({ dontSwitch: null, switch: null })));

  const startSimulation = () => {
    let dontSwitchWinsCount = 0;
    let switchWinsCount = 0;
    const newIterations = iterations.map(() => {
      const correctDoor = Math.floor(Math.random() * 2);
      const initialChoice = Math.floor(Math.random() * 2);
      const dontSwitchWin = initialChoice === correctDoor;
      const switchWin = !dontSwitchWin;

      if (dontSwitchWin) dontSwitchWinsCount++;
      if (switchWin) switchWinsCount++;

      return { dontSwitch: dontSwitchWin, switch: switchWin };
    });

    setDontSwitchWins(dontSwitchWinsCount);
    setSwitchWins(switchWinsCount);
    setIterations(newIterations);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-4">Monty Hall Problem Visual Play Tester</h1>
      <Button onClick={startSimulation} className="mb-4">Start Simulation</Button>
      <div className="flex justify-around w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-xl mb-2">Don't Switch Wins: {dontSwitchWins}</h2>
          <div className="grid grid-cols-5 gap-1">
            {iterations.map((iteration, index) => (
              <div key={index} className={`w-8 h-8 ${iteration.dontSwitch ? "bg-green-500" : "bg-red-500"}`}></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl mb-2">Switch Wins: {switchWins}</h2>
          <div className="grid grid-cols-5 gap-1">
            {iterations.map((iteration, index) => (
              <div key={index} className={`w-8 h-8 ${iteration.switch ? "bg-green-500" : "bg-red-500"}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;