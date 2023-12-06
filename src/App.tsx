import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/config";
import { Login } from "./pages";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme.light}>
        <Login />
      </ThemeProvider>
    </div>
  );
}

export default App;
