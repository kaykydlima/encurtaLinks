import './index.css';
import { useState, useEffect } from 'react';
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi';
import {Link} from "react-router-dom";
import { getLinkSave, deleteLink } from '../../Services/storeLinks';
import LinkItem from '../LinkItem';

const Links = () => {

    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState([{}]);
    const [showModal, setShowModal] = useState(false);
    const [emptyList, setEmptyList] = useState(false);

    useEffect(() => {
        async function getLinks (){
            const result = await getLinkSave("@encurtaLink");
            if(result.length === 0){
                setEmptyList(true);
            }

            setMyLinks(result);
        }

        getLinks();
    }, []);

    function handleOpenLink(link){
        setData(link);
        setShowModal(true);
    }

    async function handleDeleteItem(id){
        const result = await deleteLink(myLinks, id);

        if(result.length === 0){
            setEmptyList(true);
        }
    
        setMyLinks(result);
    }


    return(
        <>
            <main className="links-container">
                <header className="links-header">
                    <Link to="/"><FiArrowLeft size={38} color="#FFF" /></Link>
                    <h1>Meus Links</h1>
                </header>
                {emptyList && (
                    <div className="links-item">
                        <h2 className="empty-text">Sua lista está vázia...</h2>
                    </div>
                )}
                {myLinks.map(link => (
                    <div key={link.id} className="links-item">
                    <button className="link" onClick={() => handleOpenLink(link)}><FiLink size={18} color="#FFF"/> {link.long_url} </button>
                    <button className="link-delete" onClick={() => handleDeleteItem(link.id)}><FiTrash size={18} color="#FF5454"/> </button>        
                </div>
                ))}

            </main>
            {showModal && (
                <LinkItem fechaModal={() => setShowModal(false)} content={data}/>
            )}
        </>
    );
}

export default Links;