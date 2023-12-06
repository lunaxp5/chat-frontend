import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme/config";
import { Chat, Contact, Home, Login } from "./pages";
import Layout from "./layout/layout";

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme.light}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/chat/:chatId" element={<Chat />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
