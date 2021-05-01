import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';

function ReAppOrg() {
  return (
    <div className="App">
      <h1 className="Header-parent">
          <LandingPage/>
      </h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Local Mapping
        </a>
      </header>
    </div>
  );
}

export default ReAppOrg;