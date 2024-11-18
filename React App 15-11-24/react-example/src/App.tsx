import { Link } from "react-router-dom";
import "./App.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Employee from "./employee_data/Employee";
function App() {
  return (
    <div className="App">
      <header className="App-header">React App Demo</header>
      <Sidebar>
        <Menu className="sidebar">
          <MenuItem>Employee</MenuItem>
          <MenuItem> User </MenuItem>
          <MenuItem> Todo </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default App;
