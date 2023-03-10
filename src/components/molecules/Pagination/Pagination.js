import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';

class Pagination extends Component {
  static get observedAttributes() {
    return ['total', 'limit', 'current'];
  }

  onChangePage = (evt) => {
    evt.preventDefault();
    if (evt.target.closest('.number-link')) {
      eventEmmiter.emit(APP_EVENTS.changePaginationPage, { page: evt.target.dataset.page });
    }

    if (evt.target.closest('.previous-link')) {
      const { current } = this.props;
      eventEmmiter.emit(APP_EVENTS.changePaginationPage, {
        page: Number(current) !== 1 ? Number(current) - 1 : Number(current),
      });
    }

    if (evt.target.closest('.next-link')) {
      const { current } = this.props;
      eventEmmiter.emit(APP_EVENTS.changePaginationPage, {
        page: Number(current) !== 18 ? Number(current) + 1 : Number(current),
      });
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.onChangePage);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onChangePage);
  }

  render() {
    const { total, limit, current } = this.props;
    const count = new Array(Math.ceil(total / limit)).fill(null);
    const isFirst = Number(current) === 1;
    const isLast = Number(current) === count.length;

    return `
  <ul class="pagination">
    <li class="page-item ${isFirst ? 'disabled' : ''}">
    <a class="page-link previous-link " href="#">Previous</a></li>
    ${count
      .map((_, index, array) => {
        const page = index + 1;
        const isActive = page === Number(current);
        console.log(page, current);
        return `   
          <li class="page-item">
               <a 
               class="page-link number-link ${isActive ? 'active' : ''}" 
               href="#"
               data-page="${page}"
               >${page}</a>
          </li>
         `;
      })
      .join('  ')}
    <li class="page-item ${isLast ? 'disabled' : ''}">
    <a class="page-link next-link" href="#">Next</a></li>
  </ul>
`;
  }
}

customElements.define('it-pagination', Pagination);
