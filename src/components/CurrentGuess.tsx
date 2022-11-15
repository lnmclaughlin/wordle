import Wordle from "./Wordle";

export interface GuessProps {
  guess: string[];
}
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
