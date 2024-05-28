import React from "react";
import state from "../store"; // Make sure to import the correct state
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
        backgroundColor: "transparent", // Assuming you want a transparent background for outline
      };
    }
    // Add a default return value (e.g., an empty object) for other cases
    return {};
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick} // Ensuring the function name is consistent
    >
      {title}
    </button>
  );
};

export default CustomButton;
