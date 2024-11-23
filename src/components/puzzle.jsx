

// import React, { useState, useEffect } from 'react';
// import './puzzle.css';

// const rows = 3;
// const columns = 3;
// const initialOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
// const finalOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Correct final order

// const Puzzle = () => {
//     const [tiles, setTiles] = useState([]);
//     const [turns, setTurns] = useState(0);
//     const [currTile, setCurrTile] = useState(null);
//     const [otherTile, setOtherTile] = useState(null);
//     const [winner, setWinner] = useState(false); // State to track if the user has won

//     // Initialize the tiles on component mount
//     useEffect(() => {
//         const initialTiles = initialOrder.map((img, index) => ({
//             id: `${Math.floor(index / columns)}-${index % columns}`,
//             img,
//         }));
//         setTiles(initialTiles);
//         checkWinner(initialTiles); // Check if the initial arrangement is correct
//     }, []);

//     // Function to check if the current tiles match the final order
//     const checkWinner = (currentTiles) => {
//         const tileOrder = currentTiles.map((tile) => tile.img);
//         if (JSON.stringify(tileOrder) === JSON.stringify(finalOrder)) {
//             setWinner(true); // Set winner state to true when order is correct
//         }
//     };

//     const handleDragStart = (tile) => {
//         setCurrTile(tile);
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault();
//     };

//     const handleDragEnter = (e) => {
//         e.preventDefault();
//     };

//     const handleDragLeave = () => {
//         // Optional: Do something when dragging leaves another tile
//     };

//     const handleDrop = (tile) => {
//         setOtherTile(tile);
//     };

//     const handleDragEnd = () => {
//         if (!otherTile || otherTile.img === "3.jpg") {
//             return;
//         }

//         const [r1, c1] = currTile.id.split("-").map(Number);
//         const [r2, c2] = otherTile.id.split("-").map(Number);

//         const isAdjacent =
//             (r1 === r2 && Math.abs(c1 - c2) === 1) || // Horizontal movement
//             (c1 === c2 && Math.abs(r1 - r2) === 1); // Vertical movement

//         if (isAdjacent) {
//             const updatedTiles = tiles.map((tile) =>
//                 tile.id === currTile.id
//                     ? { ...tile, img: otherTile.img }
//                     : tile.id === otherTile.id
//                     ? { ...tile, img: currTile.img }
//                     : tile
//             );
//             setTiles(updatedTiles);
//             setTurns(turns + 1);
//             checkWinner(updatedTiles); // Check if the user won after every move
//         }
//     };

//     return (
//         <div className="puzzlegame">
//             <img id="title" src="./logo.png" alt="Logo" />
//             <div id="board">
//                 {tiles.map((tile) => (
//                     <img
//                         key={tile.id}
//                         id={tile.id}
//                         src={`${tile.img}.jpg`}
//                         alt={`Tile ${tile.id}`}
//                         draggable
//                         onDragStart={() => handleDragStart(tile)}
//                         onDragOver={handleDragOver}
//                         onDragEnter={handleDragEnter}
//                         onDragLeave={handleDragLeave}
//                         onDrop={() => handleDrop(tile)}
//                         onDragEnd={handleDragEnd}
//                     />
//                 ))}
//             </div>
//             <h1>
//                 Turns: <span id="turns">{turns}</span>
//             </h1>
//             {winner && (
//                 <div id="winner-message">
//                     <p>You Win! Congratulations!</p>
//                     <button onClick={() => window.location.reload()}>Play Again</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Puzzle;


import React, { useState, useEffect } from 'react';
import './puzzle.css';

const rows = 3;
const columns = 3;
const finalOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // Correct final order

// Fisher-Yates shuffle algorithm to randomize the initial order
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
    const [winner, setWinner] = useState(false); // State to track if the user has won

    // Function to initialize the puzzle with a shuffled order
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

    // Function to check if the current tiles match the final order
    const checkWinner = (currentTiles) => {
        const tileOrder = currentTiles.map((tile) => tile.img);
        if (JSON.stringify(tileOrder) === JSON.stringify(finalOrder)) {
            setWinner(true); // Set winner state to true when order is correct
        }
    };

    useEffect(() => {
        initializePuzzle(); // Initialize the puzzle with a shuffled order when the component mounts
    }, []);

    const handleDragStart = (tile) => {
        setCurrTile(tile);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
    };

    const handleDragLeave = () => {
        // Optional: Do something when dragging leaves another tile
    };

    const handleDrop = (tile) => {
        setOtherTile(tile);
    };

    const handleDragEnd = () => {
        if (!otherTile || otherTile.img === "3.jpg") {
            return;
        }

        const [r1, c1] = currTile.id.split("-").map(Number);
        const [r2, c2] = otherTile.id.split("-").map(Number);

        const isAdjacent =
            (r1 === r2 && Math.abs(c1 - c2) === 1) || // Horizontal movement
            (c1 === c2 && Math.abs(r1 - r2) === 1); // Vertical movement

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
            checkWinner(updatedTiles); // Check if the user won after every move
        }
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
                </div>
            )}
        </div>
    );
};

export default Puzzle;
