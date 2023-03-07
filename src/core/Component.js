export class Component extends HTMLElement {
  constructor() {
    super();
    this.state = {};
    this.props = {};
  }

  setState(callback) {
    this.state = callback(this.state);
    this.innerHTML = this.render();
  }

  connectedCallback() {
    this.componentDidMount();
    this.innerHTML = this.render();
  }

  disconnectedCallback() {
    this.componentWilUnmount();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.componentWillUpdate(name, oldValue, newValue);
    this.getAttributeNames().forEach((attributeName) => {
      this.props[attributeName] = this.getAttribute(attributeName);
    });
  }

  componentDidMount() {}
  componentWillUnmount() {}
  componentWillUpdate() {}
  render() {}
}

customElements.define('it-component', Component);
