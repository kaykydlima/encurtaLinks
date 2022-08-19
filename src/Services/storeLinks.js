//buscando link no storage
export async function getLinkSave(key){
    const myLinks = await localStorage.getItem(key);
    let linksSaves = JSON.parse(myLinks) || [];
    return linksSaves;

}

//salvando link no storage
export async function saveLink(key, newLink){    
    let linksStored = await getLinkSave(key);

    //fazendo verificação se link é existente na lista
    const hasLink = linksStored.some(link => link.id === newLink.id);

    if(hasLink){
        console.log('Link já existente na lista');
        return;
    }

    //adicionando link que não existe na lista e no localStorage
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Link salvo');
}

//deletando itens
export function deleteLink(links, id){
    let myLinks = links.filter(link => {
        return(link.id !== id);
    });

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));

    console.log('link deletado');

    return myLinks;
}

 