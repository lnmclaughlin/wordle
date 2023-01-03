import { useMemo } from "react";

type KeyPressHandler = (key: string) => void;

type KeyboardProps = {
  keyPressHandler: KeyPressHandler;
};

type KeyProps = {
  keyName: string;
  keyPressHandler: KeyPressHandler;
};

const Keyboard = ({ keyPressHandler }: KeyboardProps) => {
  const top = useMemo(() => {
    return `qwertyuiop`.split("").map((char) => {
      return (
        <Key keyPressHandler={keyPressHandler} key={char} keyName={char} />
      );
    });
  }, [keyPressHandler]);
  const middle = useMemo(() => {
    return `asdfghjkl`.split("").map((char) => {
      return (
        <Key keyPressHandler={keyPressHandler} key={char} keyName={char} />
      );
    });
  }, [keyPressHandler]);
  const bottom = useMemo(() => {
    const letters = `zxcvbnm`.split("").map((char) => {
      return (
        <Key keyPressHandler={keyPressHandler} key={char} keyName={char} />
      );
    });
    const enterKey = (
      <Key keyPressHandler={keyPressHandler} key="Enter" keyName="Enter" />
    );
    const backspaceKey = (
      <Key
        keyPressHandler={keyPressHandler}
        key="Backspace"
        keyName="Backspace"
      />
    );
    return [enterKey, ...letters, backspaceKey];
  }, [keyPressHandler]);

  function Key({ keyName, keyPressHandler }: KeyProps) {
    return (
      <span
        className="key "
        onClick={() => {
          keyPressHandler(keyName);
        }}
      >
        {keyName}
      </span>
    );
  }

  return (
    <div className="Keyboard">
      <div className="keyboard-row">{top}</div>
      <div className="keyboard-row">{middle}</div>
      <div className="keyboard-row">{bottom}</div>
    </div>
  );
};

export default Keyboard;
