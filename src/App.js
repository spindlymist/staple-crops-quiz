import './App.css';
import { useEffect } from 'react';
import { CropList } from './components/CropList';
import { Attributions } from "./components/Attributions";
import { TopBar } from "./components/TopBar";

function App() {

    useEffect(() => {
        document.title = "Staple Crops Quiz"
    }, []);

    return (
        <div className="App">
            <TopBar />
            <CropList />
            <Attributions />
        </div>
    );

}

export default App;
