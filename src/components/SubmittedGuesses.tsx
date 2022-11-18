import Wordle from "./Wordle";
import CurrentGuess, { GuessProps } from "./CurrentGuess";

export type SubmittedGuessesProps = {
  submittedGuesses: string[][];
  puzzleWord: string;
  puzzleWordLetterCount: Record<string, number>;
};

const SubmittedGuesses = ({
  submittedGuesses,
  puzzleWord,
  puzzleWordLetterCount,
}: SubmittedGuessesProps) => {
  function SubmittedGuess({
    guess,
  }: GuessProps & {
    puzzleWord: string;
    puzzleWordLetterCount: Record<string, number>;
  }) {
    return (
      <div className="submitted-guess">
        {Array.from({ length: 5 }).map((_, i) => {
          const currentLetterGuess = guess[i];
          const currentPuzzleLetter = puzzleWord[i];
          const isCorrect = currentLetterGuess === currentPuzzleLetter;
          const isPresent =
            !isCorrect && !!puzzleWordLetterCount[currentPuzzleLetter];

          if (isCorrect) {
            return (
              <div>
                <div className="correct-letter">
                  <span className="letter" key={i}>
                    {currentLetterGuess}
                  </span>
                </div>
              </div>
            );
          }
          return (
            <div>
              <div className="incorrect-letter">
                <span className="letter" key={i}>
                  {guess[i] || ""}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="SubmittedGuesses">
      {submittedGuesses.map((guess, i) => {
        return (
          <SubmittedGuess
            puzzleWord={puzzleWord}
            guess={guess}
            puzzleWordLetterCount={puzzleWordLetterCount}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default SubmittedGuesses;
