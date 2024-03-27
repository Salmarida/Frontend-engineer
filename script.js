console.log("Mulai React");

function Hello() {
    return(
        <div>
            <h2>Hello React</h2>
            <p>Saya Salma Aisy - Frontend Engineer</p>
        </div>
    );
}

ReactDom.render(<Hello />, document.getElementById("root"));