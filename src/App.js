import './App.css';
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import 'antd/dist/antd.css'; //Importing ANT Design CSS Framework
import TodoList from './TodoList';
import Mails from './mails';
import News from './News';
function App() {
  return (
    <div className="App">  
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/mails" element={<Mails />} />
          <Route path="/News" element={<News />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
