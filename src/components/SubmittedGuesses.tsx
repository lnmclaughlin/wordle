import { GuessProps } from "./CurrentGuess";

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
    puzzleWord,
  }: GuessProps & {
    puzzleWord: string;
    puzzleWordLetterCount: Record<string, number>;
  }) {
    let letterMap = { ...puzzleWordLetterCount };

    guess.forEach((currentLetterGuess, i) => {
      const isCorrect = puzzleWord[i] === currentLetterGuess;
      if (isCorrect) {
        letterMap[currentLetterGuess] -= 1;
      }
    });

    return (
      <div className="submitted-guess">
        {guess.map((currentLetterGuess, i) => {
          const currentPuzzleLetter = puzzleWord[i];
          const isCorrect = currentLetterGuess === currentPuzzleLetter;

          if (isCorrect) {
            letterMap[currentLetterGuess] -= 1;
          }
          let isPresent = false;
          if (!isCorrect && letterMap[currentLetterGuess]) {
            isPresent = true;
            letterMap[currentLetterGuess] -= 1;
          }

          if (isCorrect) {
            return (
              <div className="correct-letter">
                <span className="letter" key={i}>
                  {currentLetterGuess}
                </span>
              </div>
            );
          } else if (isPresent) {
            return (
              <div className="present-letter">
                <span className="letter" key={i}>
                  {currentLetterGuess}
                </span>
              </div>
            );
          } else {
            return (
              <div className="incorrect-letter">
                <span className="letter" key={i}>
                  {guess[i] || ""}
                </span>
              </div>
            );
          }
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
            key={i}
            puzzleWordLetterCount={puzzleWordLetterCount}
          />
        );
      })}
    </div>
  );
};

export default SubmittedGuesses;
