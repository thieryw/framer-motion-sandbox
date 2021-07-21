import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import {createMakeStyles} from "tss-react";
import {motion} from "framer-motion";

const {makeStyles} = createMakeStyles({"useTheme": ()=>{}})

document.body.style.margin = "0";

const useStyle = makeStyles()({
  "root": {
    "width": "100vw",
    "height": "100vh",
    "backgroundColor": "black",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "column",
    "gap": 200
  },
  "inner": {
    "width": 150,
    "height": 100,
    "backgroundColor": "white",
  }
});


function App() {
  const { classes } = useStyle();
  const [animationProps, setAnimationProps] = useState({
    "rotate": 0,
    "scale": 1
  });


  return (
    <div className={classes.root}>

      <button
        onClick={()=> setAnimationProps({
          "rotate": animationProps.rotate === 0 ? 1 : 0,
          "scale": animationProps.scale === 1 ? 1.5 : 1
        })} 
      >
        Click Me !
      </button>


      <motion.div
        className={classes.inner}
        animate={
          animationProps
        }
        transition={{
          "duration": 2,
          "delay": 1
        }}

      >

      </motion.div>

    </div>
  )
};



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

