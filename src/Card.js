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
            <p onClick={changeIsModal} className="pokemon-name">{pokemon.name}</p>
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
                <div className="modal-header">
                    <button onClick={changeIsModal}>Close</button>
                </div>
                <div className="modal-body">
                    <p className="card-pokemon-name">{pokemon.name}</p>
                    <div className="modal-body-stats">
                    {pokemon.stats.map(stat => 
                        <div className="modal-body-stats-stat">
                            <div className="modal-body-stats-stat-name">{stat.stat.name}
                            </div>
                            <div className="modal-body-stats-stat-value">{stat.base_stat}</div>
                        </div>
                    )}

                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
  
  export default Card;