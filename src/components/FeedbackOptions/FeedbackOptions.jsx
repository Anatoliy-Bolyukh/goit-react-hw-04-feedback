import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            onClick={() => {
              onFeedback(option);
            }}
            type="button"
            name={option}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onFeedback: PropTypes.func,
};

export default FeedbackOptions;
