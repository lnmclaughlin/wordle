import Wordle from "./Wordle";
import CurrentGuess, { GuessProps } from "./CurrentGuess";

export type SubmittedGuessesProps = {
  submittedGuesses: string[][];
};

const SubmittedGuesses = ({ submittedGuesses }: SubmittedGuessesProps) => {
  function SubmittedGuess({ guess }: GuessProps) {
    return (
      <div className="submitted-guess">
        {Array.from({ length: 5 }).map((_, i) => {
          return (
            <span className="letter" key={i}>
              {guess[i] || ""}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div className="SubmittedGuesses">
      {submittedGuesses.map((guess, i) => {
        return <SubmittedGuess guess={guess} key={i} />;
      })}
    </div>
  );
};

export default SubmittedGuesses;
