import logo from '../assets/images/lorem-logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold bg-white">
          <img src={logo} alt="logo" className="w-20" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/">Inicio</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/admin-dashboard">Panel de Administración</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/asdf">Página de Error</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
