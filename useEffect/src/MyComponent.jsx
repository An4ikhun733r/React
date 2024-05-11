import { useState, useEffect } from "react"

function MyComponent(){
    const [width, setWidth] = useState(window.innerWidth) 
    const [height, setHeight] = useState(window.innerHeight) 

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("event listener added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("event listener removed");
        }

    }, [])

    useEffect(()=>{
        document.title = `Size ${width} x ${height}`
    }, [width, height])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
            <p>Window Height: {height}px</p>
            <p>Window Width: {width}px</p>
        </>
    );
}

export default MyComponent