
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import{Outlet} from "react-router-dom";

function App() {
  return (
    <>
      <Topbar/>
      <div className="container">
        <Sidebar/>
      <Outlet/>
        
      </div>
      
    </>
  );
}

export default App;
