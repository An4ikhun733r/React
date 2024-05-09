function Button(){

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    const handeClick = (e) => {
        e.target.textContent = "Ouch!";
    }

    return(
        <button onDoubleClick={(e) => handeClick(e)} style={styles}>Click Me</button>
    );
}

export default Button;