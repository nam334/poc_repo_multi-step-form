
import { Provider } from 'react-redux';
import './App.css';
import MultiStepForm from './components/MultiStepForm';
import { store } from './store';

function App() {
  return (
   <>
   <Provider store={store}>
   <MultiStepForm />
   </Provider>
   
   </>
  );
}

export default App;
