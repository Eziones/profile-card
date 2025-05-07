import heroImage from "../assets/images/hero.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const ProfileCard = () => {
  const linksSize = "3x"

  return (
    <div className="profile-card">
      <div className="image-wrapper">
        <img src={heroImage} />
      </div>
      <div className="hero-details">
        <h1>Monsieur Maou</h1>
        <p>Maou</p>
        <div className="social-links">
          <a href="https://x.com/Ezionis" target="_blank">
            <FontAwesomeIcon className="link-icon" icon={faTwitter} size={linksSize} />
          </a>
          <a href="https://x.com/Ezionis" target="_blank">
            <FontAwesomeIcon className="link-icon" icon={faInstagram} size={linksSize} />
          </a>
          <a href="https://github.com/Eziones" target="_blank">
            <FontAwesomeIcon className="link-icon" icon={faGithub} size={linksSize} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard