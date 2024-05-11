import { useEffect } from "react";
import { useRef } from "react";

function MyComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component rendered")
        console.log(inputRef1)
    })

    const handleClick1 = () => {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    const handleClick2 = () => {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    const handleClick3 = () => {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }

    return (
        <>
            <button onClick={handleClick1}>
            Click Me 1!
            </button>
            <input ref={inputRef1}></input>

            <button onClick={handleClick2}>
            Click Me 2!
            </button>
            <input ref={inputRef2}></input>

            <button onClick={handleClick3}>
            Click Me 3!
            </button>
            <input ref={inputRef3}></input>
        </>
    );
}

export default MyComponent;