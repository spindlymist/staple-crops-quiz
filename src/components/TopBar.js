import { Message } from "./Message";
import { CropInput } from "./CropInput";
import { useCrops } from '../hooks/useCrops';

export function TopBar() {

    const isGameOver = useCrops(state => state.isGameOver);
    const isCropGuessingFinished = useCrops(state => state.isCropGuessingFinished);

    if(isGameOver) {
        return <Message text="You won!" />;
    }
    else if(isCropGuessingFinished) {
        return <Message text="Now guess the top producer for each crop!" />;
    }
    else {
        return <CropInput />;
    }

}
