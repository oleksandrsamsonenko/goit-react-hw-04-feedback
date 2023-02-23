import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, total, positivePercentage, rateLevel }) => {
  return (
    <div>
      <ul className={css.list}>
        {rateLevel.map(item => {
          return (
            <li key={item}>
              <p>
                {item}: <span className={css.count}>{stats[item]}</span>
              </p>
            </li>
          );
        })}
        <li>
          <p>
            Total:
            <span className={css.count}> {total}</span>
          </p>
        </li>
        <li>
          <p>
            Positive feedback:
            <span className={css.count}>{positivePercentage}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  rateLevel: PropTypes.array.isRequired,
};
