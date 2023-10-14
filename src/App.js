import React from 'react';
import './App.css';

function App() {
 return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section className="section">
          <h2>About Me</h2>
          <p>
            Hi, I'm Mourya. I'm a Web Developer based in Chennai.
          </p>
        </section>
        <section className="section">
          <h2>My Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </section>
        <section className="section">
          <h2>My Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Created a React APP</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Craeted a Website</p>
          </div>
        </section>
      </main>
    </div>
 );
}

export default App;
