import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './puzzle.css';

const rows = 3;
const columns = 3;
const finalOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; 


const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const Puzzle = () => { 
    const [tiles, setTiles] = useState([]);
    const [turns, setTurns] = useState(0);
    const [currTile, setCurrTile] = useState(null);
    const [otherTile, setOtherTile] = useState(null);
    const [winner, setWinner] = useState(false);

    const navigate = useNavigate();

    
    const initializePuzzle = () => {
        const shuffledOrder = shuffleArray(["4", "2", "8", "5", "1", "6", "7", "9", "3"]);
        const initialTiles = shuffledOrder.map((img, index) => ({
            id: `${Math.floor(index / columns)}-${index % columns}`,
            img,
        }));
        setTiles(initialTiles);
        setTurns(0);
        setWinner(false);
    };

   

    const checkWinner = (currentTiles) => {
        const tileOrder = currentTiles.map((tile) => tile.img);
        if (JSON.stringify(tileOrder) === JSON.stringify(finalOrder)) {
            setWinner(true); 
        }
    };

    useEffect(() => {
        initializePuzzle(); 
    }, []);

    // const handleDragStart = (tile) => {
    //     setCurrTile(tile);
    // };

    const handleDragStart = (tile, e) => {
        if (e.type === "touchstart") {
            setCurrTile(tile);
        } else {
            e.preventDefault(); 
            setCurrTile(tile);
        }
    };
    

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
    };

    const handleDragLeave = () => {
        
    };

    // const handleDrop = (tile) => {
    //     setOtherTile(tile);
    // };

    const handleDrop = (tile, e) => {
        if (e.type === "touchend") {
            setOtherTile(tile);
        } else {
            e.preventDefault();
            setOtherTile(tile);
        }
    };

    const handleDragEnd = () => {
        if (!otherTile || otherTile.img === "3.jpg") {
            return;
        }

        const [r1, c1] = currTile.id.split("-").map(Number);
        const [r2, c2] = otherTile.id.split("-").map(Number);

        const isAdjacent =
            (r1 === r2 && Math.abs(c1 - c2) === 1) || 
            (c1 === c2 && Math.abs(r1 - r2) === 1); 

        if (isAdjacent) {
            const updatedTiles = tiles.map((tile) =>
                tile.id === currTile.id
                    ? { ...tile, img: otherTile.img }
                    : tile.id === otherTile.id
                    ? { ...tile, img: currTile.img }
                    : tile
            );
            setTiles(updatedTiles);
            setTurns(turns + 1);
            checkWinner(updatedTiles); 
        }
    };

    const handleEndPuzzle = () => {
        navigate('/game'); 
    };
    return (
        <div className="puzzlegame">
            <img id="title" src="./logo.png" alt="Logo" />
            <div id="board">
                {tiles.map((tile) => (
                    <img
                        key={tile.id}
                        id={tile.id}
                        src={`${tile.img}.jpg`}
                        alt={`Tile ${tile.id}`}
                        draggable
                        onDragStart={() => handleDragStart(tile)}
                        onDragOver={handleDragOver}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDrop={() => handleDrop(tile)}
                        onDragEnd={handleDragEnd}
                    />
                ))}
            </div>
            <h2>
                Turns: <span id="turns">{turns}</span>
            </h2>
            {winner && (
                <div id="winner-message">
                    <p>You did it! Congratulations!</p>
                    <button onClick={initializePuzzle}>Play Again</button>
                    <button className="endpuzzling" onClick={handleEndPuzzle}>
                     Quit Puzzle
                   </button>
                </div>
            )}
        </div>
    );
};

export default Puzzle;
