import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./FurniturePiece.module.css";

class FurniturePiece extends Component {
    render() {
        let furniture = null;

        switch (this.props.type) {
            case "floor":
                furniture = <div className={classes.Floor}></div>;
                break;
            case "wall":
                furniture = <div className={classes.Wall}> </div>;
                break;
            case "floor":
                furniture = <div className={classes.Floor}> </div>;
                break;
            case "chair":
                furniture = <div className={classes.Chair}></div>;
                break;
            case "ottoman":
                furniture = <div className={classes.Ottoman}></div>;
                break;
            case "table":
                furniture = <div className={classes.Table}></div>;
                break;
            case "couch":
                furniture = <div className={classes.Couch}></div>;
                break;
            default:
                furniture = null;
        }

        return furniture;
    }
}

FurniturePiece.propTypes = {
    type: PropTypes.string.isRequired
};

export default FurniturePiece;
