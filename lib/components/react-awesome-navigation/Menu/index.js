import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import cx                   from 'classnames';
import Item                 from './Item';
import styles               from './styles.scss';

class Menu extends Component {
  static displayName = 'react-awesome-navigation/Menu';

  static propTypes = {
  }

  static Item = Item;

  render () {
    const { className, children } = this.props;

    return (
      <ul className={cx(styles.menu, className)}>
        {children}
      </ul>
    )
  }
}

export default Menu