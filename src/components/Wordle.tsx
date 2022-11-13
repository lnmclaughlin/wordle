import { useEffect, useState } from "react";

const Wordle = () => {
  const [submittedGuesses, setSubmittedGuesses] = useState<string[][]>([]);
  const [guess, setGuess] = useState<string[]>([]);

  useEffect(() => {
    function handleKeyDown({ key }: { key: string }) {
      const isChar = /^[a-z]$/.test(key);
      const isBackspace = key === "Backspace";
      const isGuessFinished = guess.length === 5;
      const isSubmit = key === "Enter";

      if (isBackspace) {
        setGuess((prev) => {
          const temp = [...prev];
          temp.pop();
          return temp;
        });
      } else if (isChar && !isGuessFinished) {
        setGuess((prev) => [...prev, key]);
      } else if (isGuessFinished && isSubmit) {
        setSubmittedGuesses((prev) => [...prev, guess]);
        setGuess([]);
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guess.length, guess]);

  return (
    <div>
      <div className="row">
        {Array.from({ length: 5 }).map((_, i) => {
          return (
            <span className="char" key={i}>
              {guess[i] || ""}
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default Wordle;
