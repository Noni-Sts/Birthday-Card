import { useState } from "react";
import "./splat.css";

const DOTS = [
  { id: 1, top: "20%", left: "30%" },
  { id: 2, top: "40%", left: "60%" },
  { id: 3, top: "65%", left: "25%" },
  { id: 4, top: "30%", left: "70%" },
  { id: 5, top: "55%", left: "50%" },
];

const LINES = [
  "Random match.",
  "Didn’t expect much.",
  "Queued again anyway.",
  "Turned into something real.",
  "Still here.",
];

const SplatScreen = ({ onComplete }) => {
  const [splatted, setSplatted] = useState([]);

  const handleSplat = (id) => {
    if (splatted.includes(id)) return;

    const next = [...splatted, id];
    setSplatted(next);

    if (next.length === DOTS.length) {
      setTimeout(onComplete, 800);
    }
  };

  return (
    <div className="splat-stage">
      {DOTS.map((dot, index) => (
        <div
          key={dot.id}
          className={`dot ${splatted.includes(dot.id) ? "splatted" : ""}`}
          style={{ top: dot.top, left: dot.left }}
          onClick={() => handleSplat(dot.id)}
        />
      ))}

      <div className="splat-text">{LINES[splatted.length - 1]}</div>
    </div>
  );
};

export default SplatScreen;
