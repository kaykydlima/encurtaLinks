import {FiLink} from 'react-icons/fi';
import './index.css';
import Menu from '../Menu';
import { useState } from 'react';
import LinkItem from '../LinkItem';
import api from '../../Services/api';
import { saveLink, getLinkSave } from '../../Services/storeLinks';

const Home = () => {
    const[link, setLink] = useState('');
    const[showModal, setShowModal] = useState(false);
    const[data, setData] = useState({});
    async function pegaLink(){
        try{
            const response = await api.post('/shorten', {
                long_url: link
            });
            setData(response.data);
            setShowModal(true);
            saveLink('@encurtaLink', response.data);
            setLink('');
        }catch{
            alert('Parece que algo deu errado!')
            setLink('');
        }
    }
    return(
        <>
            <Menu/>
            <main className="container-home">
                <article className="logo">
                    <img src="/logo.png" alt="Sujeito Link Logo" />
                    <h1>EncurtaLink</h1>
                    <p>Cole seu link para encurtar 👇</p>
                </article>
                <article className="area-input">
                    <div>
                        <FiLink size={24} color="#FFF"/>
                        <input placeholder="Cole seu link aqui" type="text" value={link} onChange={(e) => setLink(e.target.value)} />
                    </div>
                    <button onClick={pegaLink}>Encurte seu link</button>
                </article>
            </main>
            {showModal && (
                <LinkItem fechaModal={() => setShowModal(false)} content={data}/>
            )}
        </>
    );
}

export default Home;