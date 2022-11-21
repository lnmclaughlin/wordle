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
    return (
      <div className="submitted-guess">
        {Array.from({ length: 5 }).map((_, i) => {
          const currentLetterGuess = guess[i];
          const currentPuzzleLetter = puzzleWord[i];
          const isCorrect = currentLetterGuess === currentPuzzleLetter;
          // const isPresent =
          //   !isCorrect && !!puzzleWordLetterCount[currentPuzzleLetter];

          if (isCorrect) {
            return (
              <div className="correct-letter">
                <span className="letter" key={i}>
                  {currentLetterGuess}
                </span>
              </div>
            );
          }
          // else if (isPresent) {
          //   return (
          //     <div className="present-letter">
          //       <span className="letter" key={i}>
          //         {/* {} */}
          //       </span>
          //     </div>
          //   );
          // }
          else {
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
