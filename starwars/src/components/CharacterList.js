import React from "react";
import Character from "./Character";
import "./Character.css";

const CharacterList = props => {
    return (
        <div className="CharacterList">
            {props.characterList.map(character => (
              <Character key={character.name} character={character}/>
            ))}
        </div>
    );
};
export default CharacterList;
