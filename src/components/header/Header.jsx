import { Link } from 'react-router-dom';
import './styles/header.css';
import { PopupNavMenu } from '../popup-nav-menu/PopupNavMenu';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Header = () => {
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);
  const [isHoverOnPopup, setIsHoverOnPopup] = useState(false);

  return (
    <header className="header">
      <img className="logo header__logo" src="/img/logo.svg" alt="logo" />
      <nav className="header__nav nav">
        <Link to="/" className="nav__link">
          Главная
        </Link>
        <Link
          to="/"
          className="nav__link"
          onMouseOver={() => setIsPopupMenuOpen(true)}
          onMouseLeave={() => setIsPopupMenuOpen(false)}
        >
          Услуги
          <ExpandMoreIcon sx={{ width: '15px', margin: '0.05em' }} />
        </Link>
        {(isPopupMenuOpen || isHoverOnPopup) && (
          <PopupNavMenu setIsHoverOnPopup={setIsHoverOnPopup} />
        )}
        <Link to="/" className="nav__link">
          Галерея
        </Link>
        <Link to="/" className="nav__link">
          Контакты
        </Link>
        <Link to="/" className="nav__link">
          Информация для технолога
        </Link>
      </nav>
      <svg
        className="header__search"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 19C8.58172 19 5 15.4183 5 11C5 6.58172 8.58172 3 13 3C17.4183 3 21 6.58172 21 11C21 15.4183 17.4183 19 13 19Z"
          stroke="#AFEEEE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.99998 21L7.34998 16.65"
          stroke="#AFEEEE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </header>
  );
};
