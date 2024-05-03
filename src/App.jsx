import { useState } from "react";
// import "./App.css";

let arrValue = new Array(9);

function App() {
  const [input, setInput] = useState("X");
  const [winner, setWinner] = useState("");
  const [theme, setTheme] = useState("white");

  function handleGame(move) {
    setInput(input === "X" ? "O" : "X");
    arrValue[move] = input;
    // console.log(arrValue);

    if (
      (arrValue[0] == "X" && arrValue[1] == "X" && arrValue[2] == "X") ||
      (arrValue[3] == "X" && arrValue[4] == "X" && arrValue[5] == "X") ||
      (arrValue[6] == "X" && arrValue[7] == "X" && arrValue[8] == "X") ||
      (arrValue[0] == "X" && arrValue[3] == "X" && arrValue[6] == "X") ||
      (arrValue[1] == "X" && arrValue[4] == "X" && arrValue[7] == "X") ||
      (arrValue[2] == "X" && arrValue[5] == "X" && arrValue[8] == "X") ||
      (arrValue[0] == "X" && arrValue[4] == "X" && arrValue[8] == "X") ||
      (arrValue[2] == "X" && arrValue[4] == "X" && arrValue[6] == "X")
    ) {
      setWinner("Winner is X");
    } else if (
      (arrValue[0] == "O" && arrValue[1] == "O" && arrValue[2] == "O") ||
      (arrValue[3] == "O" && arrValue[4] == "O" && arrValue[5] == "O") ||
      (arrValue[6] == "O" && arrValue[7] == "O" && arrValue[8] == "O") ||
      (arrValue[0] == "O" && arrValue[3] == "O" && arrValue[6] == "O") ||
      (arrValue[1] == "O" && arrValue[4] == "O" && arrValue[7] == "O") ||
      (arrValue[2] == "O" && arrValue[5] == "O" && arrValue[8] == "O") ||
      (arrValue[0] == "O" && arrValue[4] == "O" && arrValue[8] == "O") ||
      (arrValue[2] == "O" && arrValue[4] == "O" && arrValue[6] == "O")
    ) {
      setWinner("Winner is O");
    }
  }

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: `${theme}`
      }}
    >
      <div
        style={{
          width: "500px",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "50px"}}>
          <h1 style={{color: `${theme === "white" ? "black" : "white"}`}}>TIC TAC TOE</h1>
          <button
            onClick={() => setTheme(theme === "white" ? "black" : "white")}
            style={{ padding: "5px", color: "black", backgroundColor: "white", borderRadius: "4px"}}
          >
            {theme === "white" ? "dark" : "light"}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <div style={{ display: "flex", }}>
            <button
              style={{ width: "40px", height: "40px", borderRight: "2px solid black", borderBottom: "2px solid black", borderLeft: "none", borderTop: "none", backgroundColor: "gray" }}
              onClick={() => handleGame(0)}
            >
              {arrValue[0]}
            </button>
            <button
              style={{ width: "40px", height: "40px" }}
              onClick={() => handleGame(1)}
            >
              {arrValue[1]}
            </button>
            <button
              style={{ width: "40px", height: "40px" }}
              onClick={() => handleGame(2)}
            >
              {arrValue[2]}
            </button>
          </div>
          <div style={{ display: "flex" }}>
            <button
              style={{ width: "40px", height: "40px" }}
              onClick={() => handleGame(3)}
            >
              {arrValue[3]}
            </button>
            <button
              style={{ width: "40px", height: "40px" }}
              onClick={() => handleGame(4)}
            >
              {arrValue[4]}
            </button>
            <button
              style={{ width: "40px", height: "40px" }}
              onClick={() => handleGame(5)}
            >
              {arrValue[5]}
            </button>
          </div>
          <div style={{ display: "flex" }}>
            <button
              style={{ width: "40px", height: "40px" }}
              onClick={() => handleGame(6)}
            >
              {arrValue[6]}
            </button>
            <button
              style={{ width: "40px", height: "40px" }}
              onClick={() => handleGame(7)}
            >
              {arrValue[7]}
            </button>
            <button
              style={{ width: "40px", height: "40px" }}
              onClick={() => handleGame(8)}
            >
              {arrValue[8]}
            </button>
          </div>
        </div>
        <button style={{marginTop: "5px"}}>Play</button>
        <span style={{color: `${theme === "white" ? "black" : "white"}`}}>{winner}</span>
      </div>
    </main>
  );
}

export default App;
