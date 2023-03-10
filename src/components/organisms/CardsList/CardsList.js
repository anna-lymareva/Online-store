import { Component } from '../../../core/Component';
import '../../molecules/Cards';
// import '../../../constants/products';

class CardsList extends Component {
  static get observedAttributes() {
    return ['products'];
  }
  render() {
    const products = JSON.parse(this.props.products);
    return `
    <div class="row">
    ${products.map((item) => {
      return `
            <div class="col-sm-3 mb-3">
                  <it-cards image="${item.images[0]}" 
                  title="${item.title}" 
                  price="${item.price}" 
                  description="${item.description}"
                  ></it-cards>
            </div>
    `;
    })}
         
    </div>
      `;
  }
}
customElements.define('it-cards-list', CardsList);
