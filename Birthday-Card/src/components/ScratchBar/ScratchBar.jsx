import { useState } from "react";
import "./scratch.css";

const ScratchBar = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="scratch-wrapper" onClick={() => setRevealed(true)}>
      {!revealed && <div className="scratch-cover">SCRATCH TO REVEAL</div>}
      {revealed && (
        <p className="scratch-text">Some matches change everything.</p>
      )}
    </div>
  );
};

export default ScratchBar;
