import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import {ThemeProvider} from "./context/ThemeProvider";

function App() {
  return (
      <ThemeProvider>
          <div className="App">
              <BrowserRouter>
                  <Routes>
                      <Route path={'/'} element={<Main/>}/>
                  </Routes>
              </BrowserRouter>
          </div>
      </ThemeProvider>
  );
}

export default App;
