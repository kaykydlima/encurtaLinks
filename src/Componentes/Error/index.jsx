import "./index.css"
import { Link } from "react-router-dom";

const Error = () => {
    return(
        <div className="container-error">
            <img src="notfound.png" alt="Página não encontrada" />
            <h1>Página não encontrada</h1>
            <Link to="/">Voltar para home</Link>
        </div>
    );
}

export default Error;