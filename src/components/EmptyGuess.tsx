const EmptyGuess = () => {
  return (
    <div className="empty-guess">
      <div className="row">
        {Array.from({ length: 5 }).map((_, i) => {
          return <span className="letter" key={i} />;
        })}
      </div>
    </div>
  );
};
export default EmptyGuess;
