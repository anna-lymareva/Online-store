export class Component extends HTMLElement {
  constructor() {
    super();
    this.props = {};
    this.state = {};
  }

  setState(callback) {
    this.state = callback(this.state);
    this.innerHTML = this.render();
  }

  connectedCallback() {
    this.componentDidMount();
    this.innerHTML = this.render();
    this.setProps();
  }

  disconnectedCallback() {
    this.componentWillUnmount();
    this.innerHTML = this.render();
  }

  setProps() {
    this.getAttributeNames().forEach((attributeName) => {
      this.props[name] = this.getAttribute(attributeName);
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.componentWillUpdate(name, oldValue, newValue);
    this.setProps();
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentWillUpdate() {}

  render() {}
}
