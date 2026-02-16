import { useState } from "react";
import Stage from "./components/Stage/Stage";
import IdleScreen from "./components/IdleScreen/IdleScreen";
import SplatScreen from "./components/SplatScreen/SplatScreen";
import RevealScreen from "./components/RevealScreen/RevealScreen";

function App() {
  const [state, setState] = useState("idle");

  return (
    <Stage>
      {state === "idle" && <IdleScreen onStart={() => setState("splat")} />}

      {state === "splat" && (
        <SplatScreen onComplete={() => setState("reveal")} />
      )}

      {state === "reveal" && <RevealScreen />}
    </Stage>
  );
}

export default App;
