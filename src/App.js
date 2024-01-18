// import React from 'react';
// import { Canvas } from 'react-three-fiber';
// import Pipe from './Pipe';
// import Bird from './Bird.js';

// const App = () => {
//   return (
//     <>
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
      
//       {/* Place your game components here */}
//       <Bird />
//       <Pipe position={[0, 0, 0]} />
//     </Canvas>
//     </>
//   );
// };

// export default App;

// import "./App.css"
// import styled from "styled-components";
// import { useEffect, useState } from "react";
// const BIRD_HEIGHT = 28;
// const BIRD_WIDTH = 33;
// const WALL_HEIGHT = 600;
// const WALL_WIDTH = 400;
// const GRAVITY = 8;
// const OBJ_WIDTH = 52;
// const OBJ_SPEED = 6;
// const OBJ_GAP = 200;
// function App() {
//   const [isStart, setIsStart] = useState(false);
//   const [birdpos, setBirdpos] = useState(300);
//   const [objHeight, setObjHeight] = useState(0);
//   const [objPos, setObjPos] = useState(WALL_WIDTH);
//   const [score, setScore] = useState(0);
//   useEffect(() => {
//     let intVal;
//     if (isStart && birdpos < WALL_HEIGHT - BIRD_HEIGHT) {
//       intVal = setInterval(() => {
//         setBirdpos((birdpos) => birdpos + GRAVITY);
//       }, 24);
//     }
//     return () => clearInterval(intVal);
//   });

//   useEffect(() => {
//     let objval;
//     if (isStart && objPos >= -OBJ_WIDTH) {
//       objval = setInterval(() => {
//         setObjPos((objPos) => objPos - OBJ_SPEED);
//       }, 24);

//       return () => {
//         clearInterval(objval);
//       };
//     } else {
//       setObjPos(WALL_WIDTH);
//       setObjHeight(Math.floor(Math.random() * (WALL_HEIGHT - OBJ_GAP)));
//       if (isStart) setScore((score) => score + 1);
//     }
//   }, [isStart, objPos]);

//   useEffect(() => {
//     let topObj = birdpos >= 0 && birdpos < objHeight;
//     let bottomObj =
//       birdpos <= WALL_HEIGHT &&
//       birdpos >=
//         WALL_HEIGHT - (WALL_HEIGHT - OBJ_GAP - objHeight) - BIRD_HEIGHT;

//     if (
//       objPos >= OBJ_WIDTH &&
//       objPos <= OBJ_WIDTH + 80 &&
//       (topObj || bottomObj)
//     ) {
//       setIsStart(false);
//       setBirdpos(300);
//       setScore(0);
//     }
//   }, [isStart, birdpos, objHeight, objPos]);
//   const handler = () => {
//     if (!isStart) setIsStart(true);
//     else if (birdpos < BIRD_HEIGHT) setBirdpos(0);
//     else setBirdpos((birdpos) => birdpos - 50);
//   };
//   return (
//     <Home onClick={handler}>
//       <span>Score: {score}</span>
//       <Background height={WALL_HEIGHT} width={WALL_WIDTH}>
//         {!isStart ? <Startboard>Click To Start</Startboard> : null}
//         <Obj
//           height={objHeight}
//           width={OBJ_WIDTH}
//           left={objPos}
//           top={0}
//           deg={180}
//         />
//         <Bird
//           height={BIRD_HEIGHT}
//           width={BIRD_WIDTH}
//           top={birdpos}
//           left={100}
//         />
//         <Obj
//           height={WALL_HEIGHT - OBJ_GAP - objHeight}
//           width={OBJ_WIDTH}
//           left={objPos}
//           top={WALL_HEIGHT - (objHeight + (WALL_HEIGHT - OBJ_GAP - objHeight))}
//           deg={0}
//         />
//       </Background>
//     </Home>
//   );
// }

// export default App;

// const Home = styled.div`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Background = styled.div`
//   background-image: url("./background-day.png");
//   background-repeat: no-repeat;
//   background-size: ${(props) => props.width}px ${(props) => props.height}px;
//   width: ${(props) => props.width}px;
//   height: ${(props) => props.height}px;
//   position: relative;
//   overflow: hidden;
//   border: 2px solid black;
// `;

// const Bird = styled.div`
//   position: absolute;
//   background-image: url("./yellowbird-upflap.png");
//   background-repeat: no-repeat;
//   background-size: ${(props) => props.width}px ${(props) => props.height}px;
//   width: ${(props) => props.width}px;
//   height: ${(props) => props.height}px;
//   top: ${(props) => props.top}px;
//   left: ${(props) => props.left}px;
// `;

// const Obj = styled.div`
//   position: relative;
//   background-image: url("./pipe-green.png");
//   width: ${(props) => props.width}px;
//   height: ${(props) => props.height}px;
//   left: ${(props) => props.left}px;
//   top: ${(props) => props.top}px;
//   transform: rotate(${(props) => props.deg}deg);
// `;

// const Startboard = styled.div`
//   position: relative;
//   top: 49%;
//   background-color: black;
//   padding: 10px;
//   width: 100px;
//   left: 50%;
//   margin-left: -50px;
//   text-align: center;
//   font-size: 20px;
//   border-radius: 10px;
//   color: #fff;
//   font-weight: 600;
// `;

// const ScoreShow = styled.div`
//   text-align: center;
//   background: transparent;
// `;

import { useEffect, useState } from 'react';
import Bird from './Bird';
import Pipe from './Pipe';
import Home from './Home';
import Background from './Background';
import Startboard from './Startboard';
import './App.css';

const BIRD_HEIGHT = 28;
const BIRD_WIDTH = 33;
const WALL_HEIGHT = 600;
const WALL_WIDTH = 400;
const GRAVITY = 8;
const OBJ_WIDTH = 52;
const OBJ_SPEED = 6;
const OBJ_GAP = 200;

function App() {
  const [isStart, setIsStart] = useState(false);
  const [birdpos, setBirdpos] = useState(300);
  const [objHeight, setObjHeight] = useState(0);
  const [objPos, setObjPos] = useState(WALL_WIDTH);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let intVal;
    if (isStart && birdpos < WALL_HEIGHT - BIRD_HEIGHT) {
      intVal = setInterval(() => {
        setBirdpos((birdpos) => birdpos + GRAVITY);
      }, 24);
    }
    return () => clearInterval(intVal);
  });

  useEffect(() => {
    let objval;
    if (isStart && objPos >= -OBJ_WIDTH) {
      objval = setInterval(() => {
        setObjPos((objPos) => objPos - OBJ_SPEED);
      }, 24);

      return () => {
        clearInterval(objval);
      };
    } else {
      setObjPos(WALL_WIDTH);
      setObjHeight(Math.floor(Math.random() * (WALL_HEIGHT - OBJ_GAP)));
      if (isStart) setScore((score) => score + 1);
    }
  }, [isStart, objPos]);

  useEffect(() => {
    let topObj = birdpos >= 0 && birdpos < objHeight;
    let bottomObj =
      birdpos <= WALL_HEIGHT &&
      birdpos >=
        WALL_HEIGHT - (WALL_HEIGHT - OBJ_GAP - objHeight) - BIRD_HEIGHT;

    if (
      objPos >= OBJ_WIDTH &&
      objPos <= OBJ_WIDTH + 80 &&
      (topObj || bottomObj)
    ) {
      setIsStart(false);
      setBirdpos(300);
      setScore(0);
    }
  }, [isStart, birdpos, objHeight, objPos]);

  const handler = () => {
    if (!isStart) setIsStart(true);
    else if (birdpos < BIRD_HEIGHT) setBirdpos(0);
    else setBirdpos((birdpos) => birdpos - 50);
  };

  return (
    <Home onClick={handler}>
      <span>Score: {score}</span>
      <Background width={WALL_WIDTH} height={WALL_HEIGHT} className="Background">
        {!isStart ? <Startboard>Click To Start</Startboard> : null}
        <Pipe height={objHeight} width={OBJ_WIDTH} left={objPos} top={0} deg={180} />
        <Bird height={BIRD_HEIGHT} width={BIRD_WIDTH} top={birdpos} left={100} />
        <Pipe
          height={WALL_HEIGHT - OBJ_GAP - objHeight}
          width={OBJ_WIDTH}
          left={objPos}
          top={WALL_HEIGHT - (objHeight + (WALL_HEIGHT - OBJ_GAP - objHeight))}
          deg={0}
        />
      </Background>
    </Home>
  );
}

export default App;