import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, onClickArrow} = props
  const {suggestion} = eachSuggestion

  const onArrowClick = () => {
    onClickArrow(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <img
        onClick={onArrowClick}
        className="arrow-icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
