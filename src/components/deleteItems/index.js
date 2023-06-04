import './index.css'

const HistoryItem = props => {
  const {item, onDeleteMain} = props
  // console.log(item)

  const onDeleteItem = () => {
    // console.log(`delete triggered for ${item.id}`)
    onDeleteMain(item.id)
  }

  return (
    <li className="historyItem">
      <p>{item.timeAccessed}</p>
      <div className="url-title-delete-container">
        <div className="history-item">
          <div className="url-container">
            <img className="img-logo" src={item.logoUrl} alt="domain logo" />
            <div className="title-url-container">
              <p className="title">{item.title}</p>
              <p className="url">{item.domainUrl}</p>
            </div>
          </div>
        </div>
        <button
          className="deletebtn"
          data-testid="delete"
          type="button"
          onClick={onDeleteItem}
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
