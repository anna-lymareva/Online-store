import { Component } from '../../../core/Component';
import '../../molecules/Cards';
import '../../../constants/products';
import { PRODUCTS } from '../../../constants/products';

class CardsList extends Component {
  render() {
    return `
    <div class="row">
    ${PRODUCTS.map((item) => {
      return `
            <div class="col-sm-3 mb-3">
                  <it-cards image="${item.image} "></it-cards>
            </div>
    `;
    })}
         
    </div>
      `;
  }
}
customElements.define('it-cards-list', CardsList);
