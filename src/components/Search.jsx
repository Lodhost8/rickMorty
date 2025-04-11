import { useRef, useState } from "react"
import './Search.css'

function Search({ setLocationId }) {
  const inputRef = useRef()
  const [error, setError] = useState('')

  const handleClick = () => {
    const value = inputRef.current.value.trim()

    if (!value) {
        setError('Please enter a valid location ID')
        return
    }

    if(value < 1 || value > 126){
        setError('Please enter a valid location ID between 1 and 126')
        return
    }
    
    setLocationId(inputRef.current.value)
    inputRef.current.value = ''
    setError('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        handleClick()
    }
  }

  return (
    <div className="search-container">
      <div className="search-group">
        <input 
          type="text"  
          ref={inputRef} 
          onKeyDown={handleKeyPress}
          placeholder="Ej: 3"
          className="search-input"
        />
        <button 
          onClick={handleClick}
          className="search-button"
        >
          Search
        </button>
      </div>
      {error && <p className="search-error">{error}</p>}
    </div>
  )
}

export default Search