import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/users/users';
import {Alert, Button} from 'reactstrap'

function App() {
  return (
    <div className="App">
      <div>
                        <Alert>Feedback</Alert>
                    </div>
      <Users></Users>
    </div>
  );
}

export default App;
