import React from 'react';
import './drag.css'
import _1 from '../assets/sounds/_1.mp3';
import _2 from '../assets/sounds/_2.mp3';
import _3 from '../assets/sounds/_3.mp3';
import _4 from '../assets/sounds/_4.mp3';
import _5 from '../assets/sounds/_5.mp3';
import _6 from '../assets/sounds/_6.mp3';
import _7 from '../assets/sounds/_7.mp3';
import _8 from '../assets/sounds/_8.mp3';
import _9 from '../assets/sounds/_9.mp3';
import _10 from '../assets/sounds/_10.mp3';
import numberLine from "../assets/numberLine.png"
import movingFish_R from "../assets/movingFishR.gif"
import movingFish_L from "../assets/movingFishL.gif"
import more from "../assets/more.png"
import less from "../assets/less.png"
import { useEffect } from 'react';
import './NumberLineMove.css'
import sessionData from '../utils/sessionData';


const NumberLineMove = (props) => {


    const [fishLeft, setFishLeft] = React.useState(0)
    const [fishTop, setFishTop] = React.useState(0)
    const [usedClicks, setUsedClicks] = React.useState(0)
    const [fishFacePosition, setFishFacePosition] = React.useState()
    const numberLineRef = React.useRef();
    const buttonBackward = React.useRef();
    const buttonForward = React.useRef();
    const isBasic = sessionData.dif == "b" ? true : false
    var fishStyle = {
        move: {
            position: "relative",
            float: "left",
            left: fishLeft + "px",
            top: fishTop + "px",
            width: "100%",
            maxWidth: "70px"
        }
    }
    useEffect(() => {
        setFishFacePosition(movingFish_R)
        setFishLeft(numberLineRef.current.offsetLeft)
        setFishTop(numberLineRef.current.offsetTop - 40)
    }, [])

    const moveForward = () => {
        if (usedClicks < 10) {
            const nextForwardStep = numberLineRef.current.offsetWidth / 11
            setFishLeft(fishLeft + nextForwardStep)
            setFishFacePosition(movingFish_R)
            setUsedClicks(usedClicks + 1)
            props.incCount(1)
        }
    }
    const moveBackward = () => {
        if (10 - usedClicks < 10) {
            const nextBackwardStep = numberLineRef.current.offsetWidth / 11
            setFishLeft(fishLeft - nextBackwardStep)
            setUsedClicks(usedClicks - 1)
            setFishFacePosition(movingFish_L)
            props.decCount(1)
        }
    }

    return (
        <div style={{ marginTop: "10vh", marginBottom: "25vh" }}>
            <div style={{ display: "flex" }} >
                <div >

                    <img src={less} alt="less" onClick={moveBackward} style={{ maxWidth: "50px", width: "100%" }} ref={buttonBackward} />

                </div>
                <div >
                    <img src={more} alt="more" onClick={moveForward} style={{ maxWidth: "50px", width: "100%" }} ref={buttonForward} />

                </div>
                <div className="parentImage" >
                    <img src={fishFacePosition} name="fish" alt="movingFish" style={fishStyle.move} />
                    <img src={numberLine} className="NumberLine" alt="numberLine" name="numberLine" style={{ maxWidth: "1000px", width: "100%" }} ref={numberLineRef} />
                </div>

            </div>

            {!isBasic &&
                <div style={{ display: "flex" }} >
                    <div >

                        <img src={less} alt="less" onClick={moveBackward} style={{ maxWidth: "50px", width: "100%" }} ref={buttonBackward} />

                    </div>
                    <div >
                        <img src={more} alt="more" onClick={moveForward} style={{ maxWidth: "50px", width: "100%" }} ref={buttonForward} />

                    </div>
                    <div className="parentImage" >
                        <img src={fishFacePosition} name="fish" alt="movingFish" style={fishStyle.move} />
                        <img src={numberLine} className="NumberLine" alt="numberLine" name="numberLine" style={{ maxWidth: "1000px", width: "100%" }} ref={numberLineRef} />
                    </div>

                </div>
            }

        </div>
    );
};

export default NumberLineMove;



