import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div class="section hero is-primary is-small">
        <section class="hero is-primary is-small">

          <div class="hero-head">
            <nav class="navbar">
              <div class="container">

                <div class="navbar-brand">
                  <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>

                <div id="navbarMenuHeroA" class="navbar-menu">
                  <div class="navbar-end">
                    <a class="navbar-item is-active">
                      Search
                    </a>
                    <a class="navbar-item">
                      Saved Books
                    </a>
                    <span class="navbar-item">
                      <a class="button is-primary is-inverted">
                        <span class="icon">
                          <i class="fab fa-github"></i>
                        </span>
                        <span>View on github</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        


          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Title
              </h1>
              <h2 class="subtitle">
                Subtitle
              </h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;