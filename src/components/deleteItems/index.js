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
          <img src={item.logoUrl} alt="domain logo" />
          <p>{item.title}</p>
          <p>{item.domainUrl}</p>
        </div>
        <button data-testid="delete" type="button" onClick={onDeleteItem}>
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
