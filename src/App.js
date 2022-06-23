import { useMemo } from 'react';
import BodyContainer from './components/BodyContainer';
import ContentContainer from './components/contentContainer/ContentContainer';
import Filter from './components/filter/Filter';
import Header from './components/header/Header';
import './styles/App.css';

function App() {
  
  
  return (
    <div className="App">
        <Header />
        <BodyContainer />
    </div>
  );
}

export default App;
