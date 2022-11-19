import { useEffect, useMemo, useState } from "react";
import Word from "../db/Word";
import CurrentGuess, { GuessProps } from "./CurrentGuess";
import EmptyGuess from "./EmptyGuess";
import SubmittedGuesses from "./SubmittedGuesses";

const totalGuesses = 6;

type WordleProps = {
  puzzleWord: string;
};

const Wordle = ({ puzzleWord }: WordleProps) => {
  const [submittedGuesses, setSubmittedGuesses] = useState<string[][]>([]);
  const [guess, setGuess] = useState<string[]>([]);
  // const [wordOfTheDay, setWordOfTheDay] =useState<Word[]>([])

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

  // if (puzzleWord.length !== 5) {
  //   throw new Error(`${puzzleWord} is not a valid word.`);
  // }

  const isCorrect =
    submittedGuesses.length > 0 &&
    submittedGuesses[submittedGuesses.length - 1].join("") === puzzleWord;

  // const puzzleWordLetterCount = useMemo(() => {
  //   puzzleWord.split("").reduce<Record<string, number>>((acc, letter) => {
  //     if (!acc.hasOwnProperty(letter)) {
  //       acc[letter] = 1;
  //     } else {
  //       acc[letter] += 1;
  //     }
  //     return acc;
  //   }, {});
  // }, [puzzleWord]);

  return (
    <div className="Wordle">
      <SubmittedGuesses
        submittedGuesses={submittedGuesses}
        puzzleWord={puzzleWord}
      />
      {!isCorrect && <CurrentGuess guess={guess} />}
      {Array.from({
        length: totalGuesses - submittedGuesses.length - (isCorrect ? 0 : 1),
      }).map((_, i) => {
        return <EmptyGuess key={i} />;
      })}
    </div>
  );
};

export default Wordle;
