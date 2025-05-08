import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const SocialLinks = () => {
  const linksSize = "3x"

  return (
    <div className="social-links">
      <a href="https://x.com/Ezionis" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="link-icon" icon={faTwitter} size={linksSize} aria-label="Twitter" />
      </a>
      <a href="https://x.com/Ezionis" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="link-icon" icon={faInstagram} size={linksSize} aria-label="Instagram" />
      </a>
      <a href="https://github.com/Eziones" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="link-icon" icon={faGithub} size={linksSize} aria-label="GitHub" />
      </a>
    </div>
  )
}

export default SocialLinks