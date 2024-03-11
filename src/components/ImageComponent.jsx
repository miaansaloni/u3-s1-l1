import { Component } from "react";
class ImageComponent extends Component {
  // l'unico metodo obbligatorio di un componente a classe si chiama "render"

  // le props in un componente a classe sono sempre dentro un oggetto, raggiungibile da this.props
  render() {
    const { src, alt } = this.props;

    return <img src={src} alt={alt} />;
  }
}

export default ImageComponent;
