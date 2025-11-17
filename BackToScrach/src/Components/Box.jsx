import { useState, useContext, createContext } from "react";

export const Box = () => {
  const team = useContext(TeamContext);

  return (
    <main className="w-full h-[85vh] flex-center">
      <div className={`container bg-${team}`}></div>
    </main>
  );
};
