import React                from 'react'
import Navigation           from 'components/react-awesome-navigation'

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
      <div>
        <button onClick={this.toggleMenu.bind(this)}>Open</button>
      </div>
    )

    return (
      <Navigation
        open={this.state.open}
        menu={Menu}
        content={Content}
        enterDuration={'500ms'}
        leaveDuration={'500ms'}
        navigationBackground={'#b8b6b4'}
        contentBackground={'#FFF'}
      />
    );
  }
}
export default App
