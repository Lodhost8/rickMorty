import './LocationInfo.css'

function LocationInfo({ location }) {  // Asegúrate de destructurar la prop
  const residentCount = location?.residents?.length || 0;

  return (
    <div className="location-info">
      <h2 className="location-title">{location?.name || "Unknown Location"}</h2>
      <ul className="location-details">
        <li className="detail-item">
          <span className="detail-label">Type:</span> {location?.type || "Unknown"}
        </li>
        <li className="detail-item">
          <span className="detail-label">Dimension:</span> {location?.dimension || "Unknown"}
        </li>
        <li className="detail-item">
          <span className="detail-label">Population:</span> {residentCount} {residentCount === 1 ? 'Resident' : 'Residents'}
        </li>
      </ul>
    </div>
  )
}

export default LocationInfo