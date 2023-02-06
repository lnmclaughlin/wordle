import { useCallback, useEffect, useMemo, useState } from "react";
import CurrentGuess from "./CurrentGuess";
import EmptyGuess from "./EmptyGuess";
import Keyboard from "./Keyboard";
import SubmittedGuesses from "./SubmittedGuesses";

const totalGuesses = 6;
type WordleProps = {
  puzzleWord: string;
};

const Wordle = ({ puzzleWord }: WordleProps) => {
  const [submittedGuesses, setSubmittedGuesses] = useState<string[][]>([]);
  const [guess, setGuess] = useState<string[]>([]);
  console.log(puzzleWord);

  const handleKeyInput = useCallback(
    (key: string) => {
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
    },
    [guess]
  );
  useEffect(() => {
    function handleKeyDown({ key }: { key: string }) {
      handleKeyInput(key);
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guess.length, guess, handleKeyInput]);

  const isCorrect =
    submittedGuesses.length > 0 &&
    submittedGuesses[submittedGuesses.length - 1].join("") === puzzleWord;

  const isFailure = !isCorrect && submittedGuesses.length === totalGuesses;

  const puzzleWordLetterCount = useMemo(() => {
    return puzzleWord
      .split("")
      .reduce<Record<string, number>>((acc, letter) => {
        if (!acc.hasOwnProperty(letter)) {
          acc[letter] = 1;
        } else {
          acc[letter] += 1;
        }
        return acc;
      }, {});
  }, [puzzleWord]);

  return (
    <div className="Wordle">
      <div className="gameboard">
        <>
          {isCorrect && (
            <p className="win">Look at you, you little rockstar! Well done!</p>
          )}
          {isFailure && (
            <p className="fail">So close! Better luck next time.</p>
          )}
        </>
        <SubmittedGuesses
          submittedGuesses={submittedGuesses}
          puzzleWord={puzzleWord}
          puzzleWordLetterCount={puzzleWordLetterCount!}
        />
        {!isFailure && !isCorrect && <CurrentGuess guess={guess} />}
        {Array.from({
          length: totalGuesses - submittedGuesses.length - (isCorrect ? 0 : 1),
        }).map((_, i) => {
          return <EmptyGuess key={i} />;
        })}
      </div>
      <div className="keyboard">
        <Keyboard keyPressHandler={handleKeyInput} />
      </div>
    </div>
  );
};

export default Wordle;
