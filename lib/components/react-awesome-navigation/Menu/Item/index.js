import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import styles               from './styles.scss';

class Item extends Component {
  static displayName = 'react-awesome-navigation/Menu/Item';

  static propTypes = {
  }

  render () {
    const { children } = this.props;
    
    return (
      <li className={styles.item}>
        {children}
      </li>
    )
  }
}

export default Item