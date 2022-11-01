import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickArrow = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredSuggestionList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="image-container">
          <img
            className="google-image"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>
        <div className="google-container">
          <ul className="list-container">
            <li className="search-input-container">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                onChange={this.onChangeSearchInput}
                value={searchInput}
                placeholder="Search Google"
                className="search-input"
                type="search"
              />
            </li>
            {filteredSuggestionList.map(eachSuggestion => (
              <SuggestionItem
                onClickArrow={this.onClickArrow}
                eachSuggestion={eachSuggestion}
                key={eachSuggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
