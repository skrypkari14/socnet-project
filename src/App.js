import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import {ThemeProvider} from "./context/ThemeProvider";
import {DataProvider} from "./context/DataProvider";

function App() {
  return (
      <ThemeProvider>
          <DataProvider>
              <div className="App">
                  <BrowserRouter>
                      <Routes>
                          <Route path={'/'} element={<Main/>}/>
                      </Routes>
                  </BrowserRouter>
              </div>
          </DataProvider>
      </ThemeProvider>
  );
}

export default App;
