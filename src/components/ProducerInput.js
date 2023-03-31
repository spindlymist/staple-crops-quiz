import './ProducerInput.css';
import { useCrops } from '../hooks/useCrops';
import { TextInput } from './TextInput';

export function ProducerInput({
    index,
}) {

    const checkProducer = useCrops(state => state.checkProducer);
    const {
        crop,
        producer,
        isProducerRevealed,
    } = useCrops(state => state.crops[index]);

    const onCommit = (text, inputEl) => {
        if(checkProducer(index, text)) {
            inputEl.value = producer;
        }
        else {
            inputEl.value = "";
        }
    };

    return (
        <TextInput
            className="ProducerInput"
            disabled={isProducerRevealed}
            placeholder={`Who produces the most ${crop.toLowerCase()}?`}
            onCommit={onCommit}
        />
    );

}
