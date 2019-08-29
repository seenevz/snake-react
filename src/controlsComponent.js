import React from 'react'

class ControlersComponent extends React.Component {

  handleKeyPress = e => {
    const keyBinds = ['w', 's', 'a', 'd', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

    if (keyBinds.includes(e.key)) {
      this.props.updateDirection(e.key)
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  render() {
    return (
      <div onKeyDown={this.handleKeyPress.bind(this)}>
        Use W S A D or  ← ↑ ↓ →
      </div>
    )
  }
}

export default ControlersComponent