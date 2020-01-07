import * as React from 'react';



const Menu = () => {
    return (
      <nav>
        <ul className="menu_container">
          <li>
            <a href="/">
            Главная
            </a>
          </li>
          <li>
            <a href="/contact">
            Контакты
            </a>
          </li>
        </ul>
      </nav>
    )
}
      
export default Menu;