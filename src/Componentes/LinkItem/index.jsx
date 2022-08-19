import "./index.css";
import {FiX, FiClipboard} from 'react-icons/fi';

const LinkItem = (props) => {
    async function copyLink(){
        await navigator.clipboard.writeText(props.content.link);
        alert('URL copiada com sucesso!');
    }

    return(
        <article className="modal-container">
            <header className="modal-header">
                <h2>Link encurtado</h2>
                <button onClick={props.fechaModal}><FiX size={28} color="#000" /></button>
            </header>
            <p>{props.content.long_url}</p>
            <button className="modal-link" onClick={copyLink}>{props.content.link} <FiClipboard size={20} color="#FFF" /></button>
        </article>
    )
}

export default LinkItem;