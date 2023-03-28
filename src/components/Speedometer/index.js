// Write your code here
import {Component} from 'react'
import './index.css'

class SpeedoMeter extends Component {
  state = {count: 0}

  accelerateSpeed = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevValue => ({count: prevValue.count + 10}))
    }
  }

  applyBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="speed-container">
        <h1 className="speed-heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speed-image"
        />
        <h1 className="speed-limit">Speed is {count}mph</h1>
        <p className="speed-caution">Min limit is 0mph, Max limit is 200mph</p>
        <div className="button-container">
          <button
            className="accelerate-button"
            type="button"
            onClick={this.accelerateSpeed}
          >
            Accelerate
          </button>
          <button
            className="brake-button"
            type="button"
            onClick={this.applyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default SpeedoMeter
