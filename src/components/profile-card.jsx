import { useState } from 'react'

import heroImage from "../assets/images/hero.jpg"

import SocialLinks from './SocialLinks'
import EditButton from './EditButton'
import TextEntry from './TextEntry'

const ProfileCard = () => {
  const [profilePicture, setProfilePicture] = useState(heroImage)
  const [username, setUsername] = useState("Monsieur Maou")
  const [desc, setDesc] = useState("Maou")

  const changeProfilePicture = (event) => {
    const file = event.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setProfilePicture(imageUrl)
    }
  }

  const changeValue = (newValue, hookHandler) => {
    if(newValue.length < 3) {
      alert("Le nom d'utilisateur ne peut pas être inférieur à 3 caractères")
      return
    }
    hookHandler(newValue)
  }
  
  return (
    <div className="profile-card">
      <div className="image-wrapper">
        <label htmlFor='profile-change'>
          <input type='file' id='profile-change' onChange={changeProfilePicture} />
          <img src={profilePicture} alt="Photo de profil de Monsieur Maou" />
          <div className='hover-change'>
            <EditButton />
          </div>
        </label>
      </div>
      <div className="hero-details">
        <TextEntry 
          value={username}
          confirmEdit = {changeValue}
          hookHandler = {setUsername}
          textSize = "large"
        />
        <TextEntry 
          value={desc}
          confirmEdit = {changeValue}
          hookHandler = {setDesc}
          textSize = "small"
        />
        <SocialLinks />
      </div>
    </div>
  )
}

export default ProfileCard