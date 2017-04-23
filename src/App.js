import React                from 'react'
import cx                   from 'classnames'
import { Navigation}        from 'components/react-awesome-navigation'
import styles               from './styles.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleMenu() {
    this.setState((prevState, props) => ({
      open: !this.state.open
    }))
  }

  render() {
    const Menu = (
      <div>
        Menu
      </div>
    )

    const Content = (
      <div className={styles.content}>
        <header>
          <h1 className={styles.title}>
            Perspective Page View Navigation 
          </h1>
          <h3 className={styles.subtitle}>
            Transforms the page in 3D to reveal a menu
          </h3>
        </header>
        
        {/* Body */}
        <div className={styles.body}>
          <div className={styles["left-col"]}>
            <div>
              <button className={styles["show-menu-btn"]} onClick={this.toggleMenu.bind(this)}>Show Menu</button>
            </div>
            <p>
              Click on this button to see the content being pushed away in 3D to reveal a navigation or other items.
            </p>
          </div>

          <div className={styles["right-col"]}>
            <nav>
              <a className={cx(styles["btn"], styles["active"])}>Airbnb Effect</a> <a className={styles["btn"]}>Move Left</a> <a className={styles["btn"]}>Rotate Left</a> <a className={styles["btn"]}>Move Down</a> <a className={styles["btn"]}>Rotate Top</a> <a className={styles["btn"]}>Lay Down</a>
            </nav>

            <p className={styles.notice}>
              * I'm still need to work on the other animations so wait for them :)
            </p>
          </div>

        </div>

        <div className={styles.original}>
          <p>
            This project was heavily inspired on this original project (non-React):
          </p>
          <p>
            <a href="https://tympanus.net/codrops/2013/12/18/perspective-page-view-navigation/">Perspective Page View Navigation</a>
          </p>
        </div>
      </div>
    )

    return (
      <Navigation
        open={this.state.open}
        menu={Menu}
        content={Content}
        enterDuration={'800ms'}
        leaveDuration={'300ms'}
        navigationBackground={'#b8b6b4'}
        contentBackground={'#FFF'}
      />
    );
  }
}
export default App
