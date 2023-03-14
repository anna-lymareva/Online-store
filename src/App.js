import { Component } from './core/Component';
import { routes } from './constants/routes';

import './components/templates/CatalogControls';
import './components/pages/BlogPage';
import './components/pages/cartPage';
import './components/pages/CatalogPages';
import './components/pages/contactsPage';
import './components/pages/ErrorPage';
import './components/pages/ProductPage';
import './components/molecules/Footer';
import './components/organisms/Navigation';

class App extends Component {
  render() {
    const pathname = window.location.pathname;

    return `
      <div class="main-layout">      
          <it-navigation></it-navigation>
         
         <main>         
            ${
              routes.find((route) => route.href === pathname)?.component ??
              '<error-page></error-page>'
            }            
         </main>
         <it-footer></it-footer>
      </div>
   `;
  }
}

customElements.define('it-app', App);
