import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {activeId} = this.state

    const country = this.getCountry(activeId)

    return (
      <div className="capitalsBg">
        <div className="capitalContainer">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="questionContainer">
            <select
              className="selectedItem"
              onChange={this.onChangeCapital}
              value={activeId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <p className="countryName">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
