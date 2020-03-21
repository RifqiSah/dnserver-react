import React from 'react';
import './App.css';
import Servers from './components/aisha/servers'

function App() {
  return (
    <div>
      <header>
        <div class="collapse bg-dark" id="navbarHeader">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 col-md-7 py-4">
                <h4 class="text-white">Tentang</h4>
                <p class="text-muted">Merupakan sebuah website yang bertujuan untuk memberikan informasi mengenai informasi dari server Dragon Nest diseluruh dunia.</p>
              </div>
              <div class="col-sm-4 offset-md-1 py-4">
                <h4 class="text-white">Kontak</h4>
                <ul class="list-unstyled">
                  <li><a href="https://twitter.com/alriftech" class="text-white">Follow on Twitter</a></li>
                  <li><a href="https://facebook.com/alriftech" class="text-white">Like on Facebook</a></li>
                  <li><a href="mailto:halo@alriftech.com" class="text-white">Email me</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar navbar-dark bg-dark box-shadow">
          <div class="container d-flex justify-content-between">
            <a href="/" class="navbar-brand d-flex align-items-center">
              <strong>Dragon Nest</strong>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
      <main role="main">
        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Dragon Nest Server Information</h1>
            <p class="lead text-muted">Sebuah website yang bertujuan untuk memberikan informasi mengenai informasi dari server Dragon Nest diseluruh dunia.</p>
          </div>
        </section>
        <div class="album py-5 bg-light">
          <div class="container">
            <Servers></Servers>
          </div>
        </div>
      </main>
      <footer class="text-muted">
        <div class="container">
          <p class="float-right">
            <a href="//alriftech.com/">Rumah</a>
          </p>
          <p>&copy; 2020 Alrif Technology. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
