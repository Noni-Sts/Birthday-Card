import "./idle.css";

const IdleScreen = ({ onStart }) => {
  return (
    <div className="idle" onClick={onStart}>
      <p>Connection established.</p>
      <p>Tap to begin.</p>
    </div>
  );
};

export default IdleScreen;
