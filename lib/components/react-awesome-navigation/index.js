import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import cx                   from 'classnames';
import styles               from './styles.scss';

class Navigation extends Component {
  static displayName = 'react-awesome-navigation/Navigation';

  static propTypes = {
    menu: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
    effect: PropTypes.string, // TODO PropTypes.onOf array of strings
    enterDuration: PropTypes.string.isRequired,
    leaveDuration: PropTypes.string.isRequired,
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
  

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.menu.style.transition = `all ${styles.menuEffectMoveRightDuration} ease-in`
  //   }, parseInt(styles.menuEffectMoveRightDuration));

  //   setTimeout(() => {
  //     this.content.style.transition = `all ${styles.contentEffectMoveRightDuration} ease-in`
  //   }, parseInt(styles.contentEffectMoveRightDuration));
  // }

  componentWillReceiveProps(nextProps) {
    const { enterDuration, leaveDuration } = this.props;

    if(nextProps.open) {
      // We are going to open
      if(!this.props.open) {
        this.setState(() => ({
          // leave: false,
          init: true
        }), this.setState.bind(this, () => ({
          appear: true
        }), this.setState.bind(this, () => ({
          init: false,
        }))))
      }
    } else {
      // We are going to close
      if(this.props.open) {
        this.setState(() => ({
          leave: true,
          // appear: true,
        }), this.setState.bind(this, () => ({
          appear: false,
        })))

        setTimeout(() => {
          console.log("leave");
          this.setState(() => ({
            leave: false
          }))
        }, parseInt(leaveDuration))
      }
    }

  }

  render () {
    const { open, menu, content, effect, enterDuration, leaveDuration } = this.props;

    const transitionDuration = this.state.leave ? leaveDuration : (this.state.appear) ? enterDuration : null;
    console.log(this.state, transitionDuration);

    return (
      <div className={cx(styles.navigation, open && styles.open) }>
        <div
          className={cx(styles['menu'], this.state.appear && styles['menu-appear'], this.state.leave && styles['menu-leave'], this.state.end && styles['menu-end'])}
          style={{ 
            WebkitTransition: 'all',
            WebkitTransitionDuration: transitionDuration
          }}
        >
          {menu}
        </div>

        <div ref={(input) => this.content = input} className={cx(open && styles.content, effect || styles['effect-move-right'])}>
          {content}
        </div>
      </div>
    )
  }
}

export default Navigation