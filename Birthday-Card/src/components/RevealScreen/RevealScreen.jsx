import Poster from "../Poster/Poster";
import ScratchBar from "../ScratchBar/ScratchBar";
import PullTab from "../PullTab/PullTab";
import "./reveal.css";

const RevealScreen = () => {
  return (
    <div className="reveal">
      <Poster />
      <ScratchBar />
      <PullTab />
    </div>
  );
};

export default RevealScreen;
