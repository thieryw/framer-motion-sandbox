import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import {createMakeStyles} from "tss-react";
import {motion} from "framer-motion";
import {AnimatedOnScroll} from "./AnimatedOnScroll/AnimatedOnScroll"

const {makeStyles} = createMakeStyles({"useTheme": ()=>{}})

document.body.style.margin = "0";

const useStyle = makeStyles()({
  "root": {
    "width": "100vw",
    "height": 3000,
    "backgroundColor": "black",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "column",
    "gap": 200,
  },
  "inner": {
    "width": 150,
    "height": 100,
    "backgroundColor": "white",
  },
  "paragraph": {
    "color": "white",

  }
});

function App() {
  const { classes } = useStyle();
  const [animationProps, setAnimationProps] = useState({
    "rotate": 0,
  });




  return (
    <div className={classes.root}>

      <button
        onClick={()=> setAnimationProps({
          "rotate": animationProps.rotate === 0 ? 180 : 0,
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

      <AnimatedOnScroll
        initial={{
          "opacity": 0
        }}
        animate={{
          "opacity": 1
        }}
        transition={{
          "delay": 2
        }}
      >
        <h1 className={classes.paragraph}>
          pd du cul!!
        </h1>

      </AnimatedOnScroll>


    </div>
  )
};



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

