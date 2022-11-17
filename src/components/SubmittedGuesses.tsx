import Wordle from "./Wordle";
import CurrentGuess, { GuessProps } from "./CurrentGuess";

export type SubmittedGuessesProps = {
  submittedGuesses: string[][];
  puzzleWord: string;
};

const SubmittedGuesses = ({
  submittedGuesses,
  puzzleWord,
}: SubmittedGuessesProps) => {
  function SubmittedGuess({ guess }: GuessProps & { puzzleWord: string }) {
    return (
      <div className="submitted-guess">
        {Array.from({ length: 5 }).map((_, i) => {
          const currentLetterGuess = guess[i];
          const currentPuzzleLetter = puzzleWord[i];
          const isCorrect = currentLetterGuess === currentPuzzleLetter;
          if (isCorrect) {
            return (
              <div className="correct-letter">
                <span className="letter" key={i}>
                  {currentLetterGuess}
                </span>
              </div>
            );
          }
          return (
            <div className="incorrect-letter">
              <span className="letter" key={i}>
                {guess[i] || ""}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="SubmittedGuesses">
      {submittedGuesses.map((guess, i) => {
        return <SubmittedGuess puzzleWord={puzzleWord} guess={guess} key={i} />;
      })}
    </div>
  );
};

export default SubmittedGuesses;
