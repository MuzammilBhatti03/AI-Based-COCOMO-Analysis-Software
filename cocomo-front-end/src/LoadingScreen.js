import React, { useEffect } from 'react';
import logo from './asset/applogo.png';

// LoadingScreen component
const LoadingScreen = ({ loadingText = "Loading..." }) => {
  // Add CSS keyframes for spinning animation within the useEffect
  useEffect(() => {
    const spinKeyframes = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    
    // Insert the keyframes into the document's stylesheet
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(spinKeyframes, styleSheet.cssRules.length);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div style={styles.wrapper}>
      <img
        src={logo} // Replace with your loading image URL
        alt="Loading"
        style={styles.image}
      />
      <p style={styles.text}>{loadingText}</p>
    </div>
  );
};

// Styles for the component
const styles = {
  wrapper: {
    textAlign: "center", // Center the text and image horizontally
    padding: "20px",
  },
  image: {
    width: "100px", // Set the size of the loading image
    height: "100px",
    marginBottom: "20px",
    animation: "spin 1s linear infinite", // Apply the spin animation
  },
  text: {
    fontSize: "18px",
    color: "#555",
  },
};

export default LoadingScreen;
