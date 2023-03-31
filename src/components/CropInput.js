import './CropInput.css';
import { useCrops } from '../hooks/useCrops';
import { TextInput } from './TextInput';

export function CropInput() {

    const checkCrop = useCrops(state => state.checkCrop);

    const onCommit = (text, inputEl) => {
        checkCrop(text);
        inputEl.value = "";
    };

    return (
        <TextInput
            className="CropInput"
            placeholder="What are the top ten global staple crops?"
            onCommit={onCommit}
        />
    );

}
