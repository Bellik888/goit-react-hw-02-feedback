import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({
  chooseGoodFeedback,
  chooseNeutralFeedback,
  chooseBadFeedback,
}) => {
  return (
    <div className={s.wrapper}>
      <button
        className={[s.button, s.good].join(' ')}
        onClick={chooseGoodFeedback}
      >
        Good
      </button>
      <button
        className={[s.button, s.neutral].join(' ')}
        onClick={chooseNeutralFeedback}
      >
        Neutral
      </button>
      <button
        className={[s.button, s.bad].join(' ')}
        onClick={chooseBadFeedback}
      >
        Bad
      </button>
    </div>
  );
};
