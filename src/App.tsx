import "./App.css";
import { ReactNode } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme/config";
import { Chat, Contact, Home, Login, Signin } from "./pages";
import Layout from "./layout/layout";

type PrivateRouteProps = {
  children: ReactNode;
};

const Protected = ({ children }: PrivateRouteProps) => {
  const user = sessionStorage.getItem("user");

  if (!user) {
    return <Navigate to={"/login"} replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme.light}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route
              path="/"
              element={
                <Protected>
                  <Layout />
                </Protected>
              }
            >
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
