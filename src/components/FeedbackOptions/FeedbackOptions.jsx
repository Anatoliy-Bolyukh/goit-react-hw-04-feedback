import PropTypes from 'prop-types';

const FeedbackOptions = ({ children, onFeedback }) => {
  return (
    <>
      {children.map(child => {
        return (
          <button
            onClick={() => {
              onFeedback(child);
            }}
            type="button"
            name={child}
            key={child}
          >
            {child}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string),
  onFeedback: PropTypes.func,
};

export default FeedbackOptions;
