import { Component } from './core/Component';
import { routes } from './constants/routes';
import { appCategories } from './constants/appCategories';
import './components/templates/Header';
import './components/pages/BlogPage';
import './components/pages/cartPage';
import './components/pages/CatalogPages';
import './components/pages/contactsPage';
import './components/pages/ErrorPage';
import './components/pages/ProductPage';
import './components/molecules/Footer';

class App extends Component {
  render() {
    const pathname = window.location.pathname;

    return `
      <div class="main-layout">
         <it-header categories='${JSON.stringify(appCategories)}'></it-header>
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
