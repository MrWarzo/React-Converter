import "./App.css";
import ASCIIconverter from "./elems/ASCIIconverter";
import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import BinaryConverter from "./elems/BinaryConverter";

const Menu = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>{" "}
      |{" "}
      <Link to="/ascii">
        <button>ASCIIconverter</button>
      </Link>{" "}
      |{" "}
      <Link type="button" to="/binaryconverter">
        <button>BinaryConverter</button>
      </Link>
    </div>
  );
};

const Home = () => {
  return <div className="App">{"HOME"}</div>;
};

const Layout = () => {
  return (
    <div>
      <h1>React-Converter</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Menu />
      </nav>
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ascii">
          <Route index element={<ASCIIconverter />} />
        </Route>
        <Route path="binaryconverter">
          <Route index element={<BinaryConverter />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;

/*
      <Route path="people" element={<People />}>
        <Route index element={<p>Sélectionnez une personne</p>} />
        <Route path=":id" element={<Person />} />
        <Route path="new" element={<PersonAddForm />} />
      </Route>
      */
