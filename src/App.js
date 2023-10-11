import {Layout} from "./components";
import {Route, Routes} from "react-router-dom";
import {Authorization, Home, Edit, Settings, Profile, NotFound} from "./pages";
import { ToastContainer } from 'react-toastify';
import PrivateRoute from "./hoc/PrivateRoute";



function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path=':profileId' element={<Profile />} />
                  <Route path='edit' element={
                      <PrivateRoute>
                          <Edit />
                      </PrivateRoute>
                  } />
                  <Route path='settings' element={
                      <PrivateRoute>
                          <Settings />
                      </PrivateRoute>
                  } />
              </Route>
              <Route path='/auth' element={<Authorization />} />
              <Route path='*' element={<NotFound />} />
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
