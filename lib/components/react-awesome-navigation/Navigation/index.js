import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import cx                   from 'classnames';
import styles               from './styles.scss';

const KEY_ESC = 27;

class Navigation extends Component {
  static displayName = 'react-awesome-navigation/Navigation';

  static propTypes = {
    menu: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
    effect: PropTypes.string, // TODO PropTypes.onOf array of strings
    enterDuration: PropTypes.string.isRequired,
    leaveDuration: PropTypes.string.isRequired,
    navigationBackground: PropTypes.string.isRequired,
    contentBackground: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      init: false,
      appear: false,
      leave: false,
      end: false,
    }
  }
  
  componentWillReceiveProps(nextProps) {
    const { leaveDuration } = this.props;

    if(nextProps.open) {
        this.setState(() => ({
          init: true
        }), this.setState.bind(this, () => ({
          appear: true
        }), this.setState.bind(this, () => ({
          init: false,
        }))))
    } else {
      // We are going to close
      if(nextProps.open || this.props.open) {
        this.setState(() => ({
          leave: true,
        }), this.setState.bind(this, () => ({
          appear: false,
        })))

        setTimeout(() => {
          this.setState(() => ({
            leave: false
          }))
        }, parseInt(leaveDuration, 10))
      }
    }

  }

  close = (cb) => {
    const { leaveDuration } = this.props;

    this.setState(() => ({
      leave: true,
    }), this.setState.bind(this, () => ({
      appear: false,
    })));

    setTimeout(() => {
        this.setState(() => ({
          leave: false
        }), cb)
    }, parseInt(leaveDuration, 10));
  }

  handleKeyDown = (e) => {
    const { onClose } = this.props;

    if(e.which === KEY_ESC && this.state.appear) {
      onClose()
    }
  }

  render () {
    const { className, menu, content, enterDuration, leaveDuration, navigationBackground, contentBackground, onClose } = this.props;

    const transitionDuration = this.state.leave ? leaveDuration : (this.state.appear) ? enterDuration : null;

    return (
      <div
        onClick={onClose}
        tabIndex={"1"}
        onKeyDown={this.handleKeyDown}
        className={cx(styles.navigation, className)}
        style={{
          background: navigationBackground
        }}
      >
        <div
          className={cx(styles['menu'], this.state.appear && styles['menu-appear'], this.state.leave && styles['menu-leave'], this.state.end && styles['menu-end'])}
          style={{
            WebkitTransition: 'all',
            WebkitTransitionDuration: transitionDuration
          }}
        >
          {menu}
        </div>

        <div
          className={cx(styles['content'], this.state.appear && styles['content-appear'], this.state.leave && styles['content-leave'], this.state.end && styles['content-end'])}
          style={{
            background: contentBackground,
            WebkitTransition: 'all',
            WebkitTransitionDuration: transitionDuration
          }}
        >
          {content}
        </div>
      </div>
    )
  }
}

export default Navigation;