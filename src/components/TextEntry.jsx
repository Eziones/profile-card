import { useState, useEffect } from 'react'

import EditButton from "./EditButton"

const TextEntry = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newValue, setNewValue] = useState("")

  let display

  switch (props.textSize) {
    case "small":
      display = <p className={props.className}>{props.value}</p>
      break;

    case "medium":
      display = <h2 className={props.className}>{props.value}</h2>
      break;

    case "large":
      display = <h1 className={props.className}>{props.value}</h1>
      break;

    default:
      display = <p className={props.className}>{props.value}</p>
      break;
  }

  useEffect(() => {
    setNewValue("")
  }, [isEditing])

  if (props.confirmEdit) {
    const toggleEditMode = () => {
      setIsEditing(true)
    }

    const checkExit = (e) => {
      if (e.key === "Escape") {
        setIsEditing(false)
      }

      if (e.key === "Enter") {
        props.confirmEdit(newValue, props.hookHandler)
        setIsEditing(false)
      }
    }

    const saveValue = (e) => {
      if (e.target.value.length < 12) {
        setNewValue(e.target.value)
      }
    }

    return (
      <div className='entry-container'>
        {isEditing ? (
          <>
            <input
              type="text"
              value={newValue}
              onChange={saveValue}
              onKeyDown={checkExit}
              className='entry-input'
              autoFocus
            />
            <div className='buttons-container'>
              <button onClick={() => setIsEditing(false)}
                aria-label="annuler le changement"
                className="cancel-button">X</button>

              <button onClick={() => {
                props.confirmEdit(newValue, props.hookHandler)
                setIsEditing(false)
              }}
                aria-label="Valider le changement"
                disabled={newValue.length < 3}
                className="confirm-button">✓</button>
            </div>
          </>
        ) : (
          <>
            {display}
            <EditButton className="edit-entry" onClick={toggleEditMode} />
          </>
        )}
      </div>
    )
  }

  return (
    <div className='entry-container'>
      {display}
    </div>
  )
}

export default TextEntry