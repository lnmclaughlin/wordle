import { useMemo } from "react";

const Keyboard = () => {
  const top = useMemo(() => {
    return `qwertyuiop`.split("").map((char) => {
      return (
        <span className="key" key={char}>
          {char}
        </span>
      );
    });
  }, []);
  const middle = useMemo(() => {
    return `asdfghjkl`.split("").map((char) => {
      return (
        <span className="key" key={char}>
          {char}
        </span>
      );
    });
  }, []);
  const bottom = useMemo(() => {
    return `zxcvbnm`.split("").map((char) => {
      return (
        <span className="key" key={char}>
          {char}
        </span>
      );
    });
  }, []);
  return (
    <div className="Keyboard">
      <div className="wrapper">
        <div className="keyboard-row">{top}</div>
        <div className="keyboard-row">{middle}</div>
        <div className="keyboard-row">
          <span className="key">Enter</span>
          {bottom}
          <span className="key">Backspace</span>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
