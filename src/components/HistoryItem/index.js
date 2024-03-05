import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteAppDetals} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem

  const deleteButton = () => {
    deleteAppDetals(id)
  }

  return (
    <li className="list-item">
      <div className="list">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="app-image" alt="domain logo" />
        <p className="app-title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>

      <div>
        <button
          type="button"
          data-testid="delete"
          className="button-btn"
          onClick={deleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
            className="delete-button"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
