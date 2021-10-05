export const FeedbackOptions = ({
  chooseGoodFeedback,
  chooseNeutralFeedback,
  chooseBadFeedback,
}) => {
  return (
    <div>
      <button onClick={chooseGoodFeedback}>Good</button>
      <button onClick={chooseNeutralFeedback}>Neutral</button>
      <button onClick={chooseBadFeedback}>Bad</button>
    </div>
  );
};
