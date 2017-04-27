import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import cx                   from 'classnames';
import styles               from './styles.scss';

class Item extends Component {
  static displayName = 'react-awesome-navigation/Menu/Item';

  static propTypes = {
    className: PropTypes.string
  }

  render () {
    const { className, children } = this.props;
    
    return (
      <li className={cx(styles.item, className)}>
        {children}
      </li>
    )
  }
}

export default Item