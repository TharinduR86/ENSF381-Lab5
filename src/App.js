import logo from './logo.svg';
import './App.css';
import Controls from './Controls.js'
import UserList from './UserList.js'
import Footer from './Footer.js'

let isLoggedIn = true

function App(isLoggedIn) {

  let CurrentYear = Date()

  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>The date today is {CurrentYear}.</p>
    <p>
    {isLoggedIn ? <div><section><Controls/></section><section><h1>User List</h1><UserList/></section><Footer/></div> : <p>Please log in.</p>}
    </p>
    </div>
  );

}

export default App;
