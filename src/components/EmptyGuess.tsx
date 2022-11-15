const EmptyGuess = () => {
  return (
    <div className="row">
      {Array.from({ length: 5 }).map((_, i) => {
        return <span className="letter" key={i} />;
      })}
    </div>
  );
};
export default EmptyGuess;
