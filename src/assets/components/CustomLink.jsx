import { NavLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'
import PropTypes from 'prop-types';

const CustomLink = ({onClose, to, children}) => {
  return (
    <Link
      as={NavLink}
      to={to}
      onClick={onClose}
      className="active-link"
    >
      {children}
    </Link>
  )
}

CustomLink.propTypes = {
  onClose: PropTypes.func,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default CustomLink
