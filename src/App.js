import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";
import Contact from "./Pages/Contact/Contact";
import Header from "./Components/Header/Header";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
