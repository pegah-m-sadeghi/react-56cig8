import React, { Component } from 'React';
import { MenuItems } from './MenuItems';

class Navvbar extends Component {
  render() {
    return (
      <nav className="NavvbarItems">
        <ul>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}>
                <a className{item.cName} href={item,url}>
                  {item.title}
                  </a>
                  </li>
            )
          })}
          <li>
            <a href=""></a>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    );
  }
}
