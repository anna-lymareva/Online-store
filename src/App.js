import { Component } from './core/Component';
import { routes } from './constants/routes';
import './components/templates/Header';
import './components/pages/BlogPage';
import './components/pages/cartPage';
import './components/pages/CatalogPages';
import './components/pages/contactsPage';
import './components/pages/ErrorPage';
import './components/pages/ProductPage';

class App extends Component {
  render() {
    const pathname = window.location.pathname;

    return `
      <div class="main-layout">
         <it-header></it-header>
         <main>
            <hr class="dropdown-divider" />
            ${
              routes.find((route) => route.href === pathname)?.component ??
              '<error-page></error-page>'
            }
         </main>
      </div>
   `;
  }
}

customElements.define('it-app', App);
