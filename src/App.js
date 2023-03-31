import './App.css';
import { useEffect } from 'react';
import { CropInput } from './components/CropInput';
import { CropList } from './components/CropList';
import { EndgameMessage } from './components/EndgameMessage';
import { Attributions } from "./components/Attributions";
import { useCrops } from './hooks/useCrops';

function App() {

  useEffect(() => {
    document.title = "Staple Crops Quiz"
  }, []);

  const isGameOver = useCrops(state => state.isGameOver);

  return (
    <div className="App">
      {
        isGameOver
        ? <EndgameMessage />
        : <CropInput />
      }
      <CropList />
      <Attributions />
    </div>
  );

}

export default App;
