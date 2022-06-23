import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <main className="App" >
          App
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
