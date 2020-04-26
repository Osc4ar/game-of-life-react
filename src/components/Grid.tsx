import React from 'react';
import Cell from './Cell';
import './Grid.css';

type GridProps = {
    width: number,
    height?: number 
};

function Grid(props: GridProps) {
    let cells = [];
    const x = props.width;
    const y = props.height !== undefined ? props.height : props.width;
    for (let i = 0; i < x*y; i++) {
        cells.push(<Cell></Cell>);
    }
    return (
        <div className="grid">
            {cells}
        </div>
    );
}

export default Grid;