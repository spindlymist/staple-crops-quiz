import rawData from "./crops.json";
import create from 'zustand';

export const useCrops = create((set, get) => {
    const crops = rawData.map(crop => ({
        ...crop,
        match: new RegExp(`^${crop.match}$`, 'i'),
        isCropRevealed: false,
        isProducerRevealed: false,
    }));
    
    return {
        crops,
        producersRevealedCount: 0,
        isGameOver: false,
        checkCrop: (value) => {
            const crops = get().crops;
            const match = crops.find(({ match }) => match.test(value));
            if(match) {
                match.isCropRevealed = true;
                set(state => state.crops = crops);
                return true;
            }

            return false;
        },
        checkProducer: (idx, value) => {
            const crop = get().crops[idx];
            if(!crops.isProducerRevealed && crop.producer.toLowerCase() === value.toLowerCase()) {
                set(state => {
                    state.crops[idx].isProducerRevealed = true;
                    state.producersRevealedCount++;
                    if(state.producersRevealedCount === crops.length) {
                        state.isGameOver = true;
                    }
                });
                return true;
            }

            return false;
        },
    };
});
