import { pageLinks, socialLinks } from "../data"

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
            const {id, text, url} = link
          return (
            <li key={id}>
              <a href={url} className="footer-link">
                {text}
              </a>
            </li>
          )
        })}
      </ul>  
      <ul className="footer-icons">
        {socialLinks.map((link) => {
            const { id, icon, url } = link
          return(
            <li key={id}>
                <a
                  href={url}
                  target='_blank'
                  className='footer-icon'
                  rel='noreferrer'
                >
                    <i className={icon}></i>
                </a>
            </li>
          );  
        })}

      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer