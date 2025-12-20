/** @format */

import "./App.css";

function App() {
  return (
    <div>
      <MoodBoard/>
    </div>
  );
}

export default App;


export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <MoodBoardItem
        color="#FFE5B4"
        image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
        description="Relaxing Beach"
      />
      <MoodBoardItem
        color="#B4D7FF"
        image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
        description="Mountain Adventure"
      />
      <MoodBoardItem
        color="#D7FFB4"
        image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
        description="Forest Escape"
      />
    </div>
  );
}
