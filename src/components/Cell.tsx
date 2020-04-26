import React, { useState } from 'react';
import './Cell.css';

function Cell() {
    const [alive, setAlive] = useState(false);

    return (
        <div
            className={alive ? 'alive': 'dead'}
            onClick={() => setAlive(!alive)}>
        </div>
    );
}

export default Cell;