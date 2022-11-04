import React from 'react'

function Hand({typeHand, hand}) {
    return (
        <div className={typeHand}>
            <img src={hand}  width="200" height="130"/>
        </div>
    )
}

export default Hand