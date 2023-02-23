import css from './SectionTitle.module.css';
import PropTypes from 'prop-types';

export const SectionTitle = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
