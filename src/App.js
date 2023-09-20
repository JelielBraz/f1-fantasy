import { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          { this.getRandomWelcomeMessage() }

          <div class="container text-center">
            <div class="row justify-content-md-center">
              <div class="col-6">
                <button type="button" class="btn btn-secondary">Login</button>
              </div>
              <div class="col-6">
                <button type="button" class="btn btn-secondary">Criar uma conta</button>
              </div>
            </div>
          </div>

          
          
  
        </header>
      </div>
    );
  }

  getRandomWelcomeMessage() {
    let welcomeMessages = [
      "MAX MAX SUPER MAX",
      "I'm supid",
      "It's Ericsson's fault"
    ];

    return welcomeMessages[Math.floor(Math.random()*welcomeMessages.length)];   
  }
}

export default App;
