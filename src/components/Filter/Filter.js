import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({ value, placeholder, onChange }) {
  return (
    <label className={styles.label}>
      <input
        type='text'
        value={value}
        onChange={onChange}
        name='filter'
        className={styles.input}
        placeholder={placeholder}
      />
    </label>
  )
}

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};


export default Filter; 