import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ author }) => (
  <footer>
      {author}
  </footer>
)

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

export default Footer;