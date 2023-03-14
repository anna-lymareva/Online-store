import { PRODUCTS } from '../../../constants/products';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { CATEGORIES } from '../../../constants/categories';

import '../../molecules/Sidebar';
import '../../molecules/Pagination';
import '../../organisms/CardsList';
import '../../templates/CatalogControls';

class CatalogPage extends Component {
  constructor() {
    super();
    this.state = {
      products: PRODUCTS,
      limit: 12,
      currentPage: 1,
    };
  }

  sliceData(currentPage = 1) {
    const { limit } = this.state;
    const start = (currentPage - 1) * limit;
    const end = currentPage * limit;

    return this.state.products.slice(start, end);
  }

  onChangePaginationPage = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        currentPage: Number(evt.detail.page),
      };
    });
    window.scrollTo(0, { behavior: 'smooth' });
  };

  onFilterProductsByCategory = (evt) => {
    const { selectedCategory } = evt.detail;
    this.setState((state) => {
      return {
        ...state,
        products: PRODUCTS.filter((item) => item.category.id === selectedCategory.id),
        currentPage: 1,
      };
    });
  };

  componentDidMount() {
    this.sliceData();
    eventEmmiter.on(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.on(APP_EVENTS.setCategory, this.onFilterProductsByCategory);
  }

  componentWillUnmount() {}

  render() {
    return `
    <catalog-controls categories='${JSON.stringify(CATEGORIES)}'></catalog-controls>
    <div class="container mt-5 pt-5 border-top">      
        <div class="row">
            <div class="col-sm-3 border-end">
                  <it-sidebar></it-sidebar>
            </div>
            <div class="col-sm-9">
                  <it-cards-list products='${JSON.stringify(this.sliceData(this.state.currentPage))}'></it-cards-list>
            <div class="mt-5">
                  <it-pagination 
                    total="${PRODUCTS.length}"
                    limit="${this.state.limit}"
                    current="${this.state.currentPage}"
                  ></it-pagination>
            </div>
            </div>
        </div>
    </div>
      `;
  }
}

customElements.define('catalog-page', CatalogPage);
