import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Main from './components/Main/Main';
import SingleToken from './components/SingleToken/SingleToken';
import MultiToken from './components/MultiToken/MultiToken';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<SingleToken />} />
          <Route path="/multiToken" element={<MultiToken />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
