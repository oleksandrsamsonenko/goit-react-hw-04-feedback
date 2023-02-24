import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ btnNames, handleFeedback }) => {
  return (
    <div>
      <ul className={css.list}>
        {btnNames.map(item => {
          return (
            <li key={item}>
              <button className={css.btn} onClick={() => handleFeedback(item)}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
  btnNames: PropTypes.array.isRequired,
};
