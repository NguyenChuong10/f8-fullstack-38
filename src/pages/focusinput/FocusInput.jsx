import { useRef, useState } from "react";

import Textinput from "../../components/TextInput"
function FocusInput() {
    const inputRef = useRef(null);
    const [showInput, setShowInput] = useState(true);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            console.log(inputRef.current);
        }
    }

    const handlRemove = () => {
        setShowInput(false);
    }

    return (
        <div>
            {showInput && <Textinput ref={inputRef} />}
            <button onClick={() => { handleClick() }} className="w-25 h-8 bg-amber-100 size-2"><p className="text-xs">Focus</p></button>
            <button onClick={() => { handlRemove() }} className="w-25 h-8 bg-amber-100 size-2"> remove </button>
        </div>
    )
}

export default FocusInput;