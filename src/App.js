import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>*/}

        <ImageComponent
          src="https://media.cnn.com/api/v1/images/stellar/prod/191006152638-01-pets-and-our-health.jpg?q=w_2000,h_1125,x_0,y_0,c_fill/h_618"
          alt="Big nose dog sniffing you"
        />

        <ButtonComponent btnText="Discover more" />
        <ButtonComponent btnText="Pet" />
      </header>
    </div>
  );
}

export default App;
