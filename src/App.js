import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Protected } from "./components/Protected";
import { DomainProvider } from "./contexts/DomainProvider";
import { AppRouter } from "./Routers/AppRouter";

function App() {
  return (
    <DomainProvider>
      <Router>
        <AppRouter/>
      </Router>
    </DomainProvider>
  );
}

export default App;
