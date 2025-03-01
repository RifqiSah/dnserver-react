import React from 'react';
import './App.css';
import Servers from './components/shorekeeper/servers'

function App() {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  return (
    <div>
      <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">Tentang</h4>
                <p className="text-muted">Merupakan sebuah website yang bertujuan untuk memberikan informasi mengenai informasi dari server Dragon Nest diseluruh dunia.</p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Kontak</h4>
                <ul className="list-unstyled">
                  <li><a href="https://twitter.com/mrsah_" className="text-white">Follow on Twitter</a></li>
                  <li><a href="https://web.facebook.com/M.RifqiSaiful.AH" className="text-white">Like on Facebook</a></li>
                  <li><a href="mailto:me@rifqisah.com" className="text-white">Email me</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="/" className="navbar-brand d-flex align-items-center">
              <strong>Dragon Nest</strong>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Dragon Nest Server Information</h1>
            <p className="lead text-muted">Sebuah website yang bertujuan untuk memberikan informasi mengenai informasi dari server Dragon Nest diseluruh dunia.</p>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <Servers></Servers>
          </div>
        </div>
      </main>
      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="//rifqisah.com/">Rumah</a>
          </p>
          <p>&copy; {getYear()}. Made with ❤️ by RifqiSah.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
