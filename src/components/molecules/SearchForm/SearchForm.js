import { Component } from '../../../core/Component';
import { APP_EVENTS } from '../../../constants/appEvents';
import { eventEmmiter } from '../../../core/EventEmmiter';

class SearchForm extends Component {
  static get observedAttributes() {
    return ['items'];
  }
  setSearch = (evt) => {
    evt.preventDefault();
    if (evt.target.closest('.form-control')) {
      const name = evt.target.dataset.id;
      const items = JSON.parse(this.props.items);
      const searchCategory = items.find((item) => item.name === Number(name));
      eventEmmiter.emit(APP_EVENTS.setSearch, { searchCategory });
    }
  };

  componentDidMount() {
    this.addEventListener('submit', this.setSearch);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.setSearch);
  }

  render() {
    const items = JSON.parse(this.props.items);
    return `
    <form class="d-flex" role="search">
    ${items.map((item) => {
      return `<input class="form-control me-2" data-id="${item.name}" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>`;
    })}
          
     </form>
     `;
  }
}

customElements.define('search-form', SearchForm);
