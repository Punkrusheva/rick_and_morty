import PropTypes from 'prop-types';
import styles from './PaginationGroup.module.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

function PaginationGroup ({prevPage, nextPage, onClickPrev, onClickNext}) {
  return (<>
    <ButtonGroup style={{ display: 'flex', justifyContent: 'center', boxShadow: 'none', margin: '10px'}} className={styles.button_group} variant="contained" color="primary" aria-label="contained primary button group">
      {prevPage && <Button onClick={onClickPrev}>Prev</Button>}
      {nextPage && <Button onClick={onClickNext}>Next</Button>}
    </ButtonGroup>
  </>)
  };

PaginationGroup.defaultProps = {
  prevPage: '',
  nextPage: '',

};

PaginationGroup.propTypes = {
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
};

export default PaginationGroup;