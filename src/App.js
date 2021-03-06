import React, { Component } from 'react';
import Projects from './project-src';
import Project from './Project';
import Header from './Header';
import Bio from './Bio';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: Projects,
    }
  }

  scrollToProjects = () => {
    let element = document.getElementById("projects_content");
    element.scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main className="landing_page">
          <Bio scroll={this.scrollToProjects} />
          <section className="content">
            <section className="projects_content" id="projects_content">
              {this.state.projects.list.map((item, index) => {
                return <Project key={index} {...item} />
              })}
            </section>
          </section>
          <footer className="footer">
            This <a href="https://github.com/sihaocao/sihaocao-portfolio" className="portfolio-link" target="_blank" rel="noopener noreferrer">website</a> is built with <a href="https://reactjs.org/" className="react-link" target="_blank" rel="noopener noreferrer">React</a>
            {' '}
            <i className="devicon-react-original colored"></i>
          </footer>
        </main>
      </div>
    );
  }
}

export default App;