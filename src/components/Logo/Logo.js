import PropTypes from 'prop-types';
import styles from './Logo.module.css';
import { CSSTransition } from "react-transition-group";
import "../../stylesheets/animation.css";

function Logo ({text}) {
    return (<>
      <CSSTransition
        in={true} appear={true}
        classNames='logo'
        timeout={500}
        unmountOnExit>
        <h1 className={styles.logo}>{text}</h1>
      </CSSTransition>
    </>)
  };

Logo.defaultProps = {
  text: '',
};

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;