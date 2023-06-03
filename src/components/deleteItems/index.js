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
      <img src={item.logoUrl} alt="domain logo" />
      <p>{item.title}</p>
      <p>{item.domainUrl}</p>
      <button data-testid="delete" type="button" onClick={onDeleteItem}>
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryItem
