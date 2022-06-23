import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function App() {
  const containRef = useRef{ null};
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <main className="App" >
          App
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
