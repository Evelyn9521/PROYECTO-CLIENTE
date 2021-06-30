import './App.css';
import Router from "./components/router/Router";
import AuthContext from "./context/AuthContext";


function App() {
  return (
    <div className="App">
      <AuthContext>
       <Router/>
      </AuthContext>
    </div>
  );
}

export default App;
