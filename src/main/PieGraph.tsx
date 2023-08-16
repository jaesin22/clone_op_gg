import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import useSummonerData from "../hooks/useSummonerData";
import { GameData, participants } from "./Utils";

const PieGraph = () => {
  const { gameData, puuId }: any = useSummonerData();
  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);

  useEffect(() => {
    calculateVictory(gameData);
  }, [gameData]);

  const calculateVictory = (gameData: GameData[]) => {
    let winCount = 0;
    let loseCount = 0;

    gameData?.forEach((data: any) => {
      data.participants.forEach((participant: participants) => {
        if (participant.puuid === puuId) {
          participant.win ? winCount++ : loseCount++;
        }
      });
    });

    setWin(winCount);
    setLose(loseCount);
  };

  const data = [
    { name: "Wins", value: win },
    { name: "Losses", value: lose },
  ];

  const COLORS = ["#5382e9", "#e84057"];
  const totalGames = data.reduce((sum, entry) => sum + entry.value, 0);
  const winRate = (data[0].value / totalGames) * 100;

  return (
    <div style={{ width: "88px", height: "88px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={27}
            outerRadius={40}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              value={`${winRate.toFixed(0)}%`}
              position="center"
              fontSize={12}
              fontStyle={"#5383E8"}
              fill="#5383E8"
              fontWeight="bold"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieGraph;
