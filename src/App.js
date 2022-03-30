import Button from './component/Button'
import Top from './component/Button'
import './App.css';
import "./index.css";


function App() {
  return (
    <div className="App">
      <Button
        text={"My Button tyhjtyh"}
        disabled={false}
        color={"primary"}
        variant={"contained"}
      />
      <Top/>
    </div>
   
  );
}

export default App;
