import Newtextinput from "@/components/NewTextInput";
import { useEffect, useRef } from "react";

function JustFocusInput() {

    const newInputRef = useRef(null);


    useEffect(() => {
        console.log(newInputRef.current);
    }, []);


    return (
        <div>
            <Newtextinput ref={newInputRef} />
            <button onClick={() => { newInputRef.current.focus() }}>Focus !</button>
        </div>
    );
}

export default JustFocusInput;