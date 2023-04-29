import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {objInd: 0}

  decrease = () => {
    const {objInd} = this.state
    if (objInd === 0) {
      this.setState({objInd: 0})
    } else {
      this.setState(prevState => ({
        objInd: prevState.objInd - 1,
      }))
    }
  }

  increase = () => {
    const {reviewsList} = this.props
    const {objInd} = this.state
    if (objInd === reviewsList.length - 1) {
      this.setState({objInd: reviewsList.length - 1})
    } else {
      this.setState(prevState => ({
        objInd: prevState.objInd + 1,
      }))
    }
  }

  render() {
    const {objInd} = this.state
    const {reviewsList} = this.props
    const obj = reviewsList[objInd]
    const {imgUrl, username, companyName, description} = obj
    return (
      <div className="page">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <div className="arrowNameContainer">
          <button onClick={this.decrease} type="button" data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p>{username}</p>
          <button
            onClick={this.increase}
            type="button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
