import {Layout} from "./components";
import {Route, Routes} from "react-router-dom";
import {Authorization, Home} from "./pages";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path='/home' element={<Home />} />
              </Route>
              <Route path='/auth' element={<Authorization />} />
          </Routes>
          <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
      </>
  )
}

export default App;
