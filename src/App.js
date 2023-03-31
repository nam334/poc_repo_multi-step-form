
import { Provider } from 'react-redux';
import './App.css';
import MultiStepForm from './components/MultiStepForm';
import { store } from './store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SuccessPage from './components/SuccessPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MultiStepForm />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
]);

function App() {
  return (
   <>
   <Provider store={store}>
   <RouterProvider router={router} />
   </Provider>
   
   </>
  );
}

export default App;
