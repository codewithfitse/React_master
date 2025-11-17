import { useState, useContext, createContext } from "react";

//const [count, setCount] = useState(0)
const TeamContext = createContext(null);

const [team, setTeam] = useState("light");

export { team, setTeam, TeamContext };
