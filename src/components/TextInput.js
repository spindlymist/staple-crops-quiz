import { useRef } from 'react';

export function TextInput({
    onCommit,
    ...rest
}) {

    const inputEl = useRef(null);
    const maybeCommit = (event) => {
        if(!inputEl.current || event.key !== 'Enter') return;
        onCommit(inputEl.current.value, inputEl.current);
    };

    return (
        <input
            ref={inputEl}
            type="text"
            onKeyUp={maybeCommit}
            {...rest}
        />
    );

}
