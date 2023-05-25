import "./App.css";
import { Outlet } from "react-router-dom";
import { Container } from "./UI";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer>
        <h5>Ako Footer shoo</h5>
      </footer>
    </>
  );
}

export default App;
