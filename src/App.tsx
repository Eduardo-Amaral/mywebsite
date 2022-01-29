
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Projects from 'pages/Projects';
import Home from "pages/Home";
import Navbar from "components/Navbar";
import Contacts from "pages/Contacts";
import KnowHow from "pages/KnowHow";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projetos">
          <Route path="" element={<Projects />} />
        </Route>
        <Route path="/Conhecimentos">
          <Route path="" element={<KnowHow />} />
        </Route>
        <Route path="/Contatos">
          <Route path="" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
