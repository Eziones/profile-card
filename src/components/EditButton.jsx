import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

const EditButton = (props) => {
  return (
    <>
      <FontAwesomeIcon className={`edit-icon ${props.className}`} icon={faEdit} onClick={props.onClick}/>
    </>
  )
}

export default EditButton