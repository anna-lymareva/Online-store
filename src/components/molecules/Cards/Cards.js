import { Component } from '../../../core/Component';

class Cards extends Component {
  static get observedAttribute() {
    return ['title', 'image', 'description', 'price'];
  }
  render() {
    const { image, title, price, description } = this.props;
    return `
    <div class="card">
      <img class="image-fit" src="${image}"
        class="card-img-top" alt="image">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
          <small class="card-title pricing-card-title">${price}$</small>
          <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
  </div>
   `;
  }
}
customElements.define('it-cards', Cards);
