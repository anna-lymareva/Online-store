import { Component } from '../../../core/Component';

class Cards extends Component {
  static get observedAttribute() {
    return ['title', 'image', 'description', 'price'];
  }
  render() {
    const className = this.props.class;
    const img = this.props.images;
    const description = this.props.description;
    const price = this.props.price;
    return `
    <div class="card">
          <img class="${className}" src="${img}" class="card-img-top" alt="image">
     <div class="card-body">
          <h5 class="${className}">Card title</h5>
          <p class="${className}">${description}</p>
          <small class="${className} pricing-card-title">${price}</small>
          <a href="#" class="${className}btn btn-primary">Go somewhere</a>
    </div>
  </div>
   `;
  }
}
customElements.define('it-cards', Cards);
