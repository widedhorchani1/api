import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "./App.css";
import UserList from "./UserList";
import axios from "axios";

function App() {
  
  return <div className="App">
    <h1>Users List</h1>
    <UserList/>
  </div>;
}

export default App;
