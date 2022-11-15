import { useEffect, useState } from "react";
import CurrentGuess, { GuessProps } from "./CurrentGuess";
import EmptyGuess from "./EmptyGuess";
import SubmittedGuesses from "./SubmittedGuesses";

const totalGuesses = 6;

const Wordle = () => {
  const [submittedGuesses, setSubmittedGuesses] = useState<string[][]>([]);
  const [guess, setGuess] = useState<string[]>([]);

  useEffect(() => {
    function handleKeyDown({ key }: { key: string }) {
      const letter = /^[a-z]$/.test(key);
      const isBackspace = key === "Backspace";
      const isGuessFinished = guess.length === 5;
      const isSubmit = key === "Enter";

      if (isBackspace) {
        setGuess((prev) => {
          const temp = [...prev];
          temp.pop();
          return temp;
        });
      } else if (letter && !isGuessFinished) {
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
      <SubmittedGuesses submittedGuesses={submittedGuesses} />
      <CurrentGuess guess={guess} />
      {Array.from({ length: totalGuesses - submittedGuesses.length - 1 }).map(
        (_, i) => {
          return <EmptyGuess key={i} />;
        }
      )}
    </div>
  );
};

export default Wordle;
