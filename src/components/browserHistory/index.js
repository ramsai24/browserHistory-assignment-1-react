import {Component} from 'react'
import './index.css'
import HistoryItem from '../deleteItems'

class BrowserHistory extends Component {
  state = {searchInput: '', list: this.props}

  onSearch = event => {
    const searchValue = event.target.value

    this.setState({searchInput: searchValue})
  }

  onDeleteMain = id => {
    // const {onDeletethis} = this.props
    const {list} = this.state

    // console.log(browserHistoryList)
    console.log(`Delete of item will done having id ${id}`)
    // this.setState({ids: id})
    // onDeletethis(id)
    const browserHistoryList = list.browserHistoryList.filter(
      each => each.id !== id,
    )
    this.setState({list: {browserHistoryList}})
  }

  render() {
    // const {browserHistoryList} = this.props

    // console.log(browserHistoryList)

    const {searchInput, list} = this.state
    console.log(list.browserHistoryList)

    console.log(searchInput)

    // let searchResult

    // if (searchInput !== '') {
    //   searchResult = browserHistoryList.filter(each =>
    //     each.title.toLowerCase().includes(searchInput.toLowerCase()),
    //   )
    // } else {
    //   searchResult = browserHistoryList.filter(each => each.id !== ids)
    // }

    const searchResult = list.browserHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const titleList = list.browserHistoryList.find(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    // console.log(`titleList :- ${titleList}`)

    return (
      <div>
        <div>
          <div className="header-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
              <input type="search" onChange={this.onSearch} />
            </div>
          </div>
          <div className="bottom-section">
            {}
            {/* {searchResult.map(eachs => {
              if (
                eachs.title.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return (
                  <ul>
                    {searchResult.map(each => (
                      <HistoryItem item={each} key={each.id} />
                    ))}
                  </ul>
                )
              }
              return <p>There is no history to show</p>
            })} */}
            {titleList ? (
              <ul>
                {searchResult.map(each => (
                  <HistoryItem
                    item={each}
                    key={each.id}
                    onDeleteMain={this.onDeleteMain}
                  />
                ))}
              </ul>
            ) : (
              <p>There is no history to show</p>
            )}

            {/* <ul>
                {searchResult.map(each => (
                  <HistoryItem item={each} key={each.id} />
                ))}
              </ul> */}
          </div>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
