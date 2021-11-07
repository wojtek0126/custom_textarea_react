import './App.css';
import TextareaCustom from './TextareaCustom';
import {  RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
        <TextareaCustom />
        </header>
      </div>
    </RecoilRoot>
   
  );
}

export default App;
