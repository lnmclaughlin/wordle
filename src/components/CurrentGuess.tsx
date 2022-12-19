import Wordle from "./Wordle";

export type GuessType = string[];

export type GuessProps = {
  guess: GuessType;
};
const CurrentGuess = ({ guess }: GuessProps) => {
  return (
    <div className="current-guess">
      <div className="row">
        {Array.from({ length: 5 }).map((_, i) => {
          return (
            <span className="letter" key={i}>
              {guess[i] || ""}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentGuess;
