import './App.css';
import FormGet from './form-get';
import FormPost from './form-post';
import RestBasic from './rest-basic';

function App() {
  return <>
          <RestBasic />
          <hr/>
          <FormGet/>
          <hr/>
          <FormPost/>
        </>

}

export default App;
