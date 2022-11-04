import React, { useEffect, useState } from 'react'
import Hand from '../../components/Hand'

import Paper from '../../assets/paper.png'
import Scissors from '../../assets/scissors.png'
import Rock from '../../assets/rock.png'

function Game() {
    const [player, setPlayer] = useState(Rock);
    const [computer, setComputer] = useState(Rock);
    const [computerPoint, setComputerPoint] = useState(0)
    const [playerPoint, setPlayerPoint] = useState(0)
    const options = [Paper, Rock, Scissors];

    function selectOption(option) {
        var randomNumber = Math.floor(Math.random() * 3);
        console.log('randomNumber', randomNumber)
        setPlayer(option)
        setComputer(options[randomNumber])
    }

    useEffect(() => {
        if (player === Scissors && computer === Paper ||
            player === Rock && computer === Scissors ||
            player === Paper && computer === Rock
            ) {
            setPlayerPoint(playerPoint + 1)
        }
        if (computer === Scissors && player === Paper ||
            computer === Rock && player === Scissors ||
            computer === Paper && player === Rock
        ) {
            setComputerPoint(computerPoint + 1)
        }   
    }, [player, computer])


    return (
        <div className='container-game'>
            <h3>Paper Game</h3>
            <div className='game'>
                <div className='player-container slidein'>
                    <p>Player: {playerPoint}</p>
                    <Hand typeHand='player' hand={player} />
                </div>
                <div className='computer-container slidein'>
                <p>Computer: {computerPoint}</p>
                    <Hand typeHand='computer' hand={computer} />
                </div>
            </div>
            <div>
                <p>Choose your option:</p>
                <div>
                    {options.map((option, index) =>
                        <button key={index} onClick={() => selectOption(option)}>
                            <img src={option} width="50" height="50" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Game