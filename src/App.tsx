import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme/config";
import { Contact, Home, Login } from "./pages";
import Layout from "./layout/layout";

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme.light}>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
