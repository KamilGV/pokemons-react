import { useEffect, useState } from 'react';
import './Card.css';
import './color.css';
function Card({pokemon}) {

    const [imgUrl, setImgUrl] = useState(pokemon.sprites.front_default)
    const changeBackImage = () => {
        if (imgUrl == pokemon.sprites.back_default){
            setImgUrl(pokemon.sprites.front_default)
        }
        else{
        setImgUrl(pokemon.sprites.back_default)}
    }

    const [isModalOpen, setIsModalOpen] = useState(false)
    const changeIsModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <>
        <div className="CardBox" onClick={changeBackImage} style={{backgroundColor: `var(--bg-poke-color-light-${pokemon.types[0].type.name})`}}>
            <p onClick={changeIsModal}>{pokemon.name}</p>
            <img src={imgUrl}></img>
        </div>
        {isModalOpen&&<Modal pokemon={pokemon} changeIsModal={changeIsModal}/>}
        </>
    );
  }

function Modal({pokemon, changeIsModal}){
    return (
        <div className="ModalContainer">
            <div className="Modal">
                <p>{pokemon.name}</p>
            </div>
            <button onClick={changeIsModal}>Close</button>
        </div>
    )
}
  
  export default Card;