import {Layout} from "./components";
import {Route, Routes} from "react-router-dom";
import {Authorization, Home} from "./pages";


function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path='/home' element={<Home />} />
              </Route>
              <Route path='/auth' element={<Authorization />} />
          </Routes>
      </>
  )
}

export default App;
