import React from "react";
import FurniturePiece from "./FurniturePiece/FurniturePiece";

const furnitures = props => (
    <div>
        <center>
            <p>Pleace the furnitures in the room!</p>
        </center>
        <FurniturePiece type="floor" />
        <FurniturePiece type="wall" />
        <FurniturePiece />
    </div>
);

export default furnitures;
