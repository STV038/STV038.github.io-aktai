import { Link } from 'react-router-dom';
import './nav-items.scss';

const Logo = () => {
  return (
    <Link to="/home">
      <h1 className="logo">A</h1>
    </Link>
  );
};

export default Logo;
