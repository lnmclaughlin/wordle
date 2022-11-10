import { useEffect, useState } from "react";

const Wordle = () => {
  const [guess, setGuess] = useState<Array<string>>([]);

  useEffect(() => {
    function handleKeyDown({ key }: { key: string }) {
      if (guess.length < 5) {
        const isChar = /^[a-z]$/.test(key);
        if (isChar) {
          setGuess((prev) => [...prev, key]);
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guess.length]);

  console.log(guess);

  return (
    <div>
      <div className="row">
        {guess.map((char, i) => {
          return (
            <span className="char" key={i}>
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default Wordle;
