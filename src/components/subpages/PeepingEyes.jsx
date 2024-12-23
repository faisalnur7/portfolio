import React, { useState, useEffect } from 'react';
import '../../assets/css/PeepingEyes.css';

const PeepingEyes = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [eyePositions, setEyePositions] = useState({
        leftEye: { x: 0, y: 0 },
        rightEye: { x: 0, y: 0 },
    });
    const [squeeze, setSqueeze] = useState(false);
    const [faceHeight, setFaceHeight] = useState(10);

    // Track mouse position
    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
            setFaceHeight(100);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Reset face height to initial value after a delay
    useEffect(() => {
        const timeout = setTimeout(() => {
            setFaceHeight(50);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [mousePosition]);

    // Calculate eye movement towards the cursor
    useEffect(() => {
        const moveEyes = () => {
            const eyeDistance = 8;
            const leftEye = document.getElementById('left-eye');
            const rightEye = document.getElementById('right-eye');

            if (!leftEye || !rightEye) return;

            const leftEyeRect = leftEye.getBoundingClientRect();
            const rightEyeRect = rightEye.getBoundingClientRect();

            const dxLeft = mousePosition.x - (leftEyeRect.left + leftEyeRect.width / 2);
            const dyLeft = mousePosition.y - (leftEyeRect.top + leftEyeRect.height / 2);
            const angleLeft = Math.atan2(dyLeft, dxLeft);

            const dxRight = mousePosition.x - (rightEyeRect.left + rightEyeRect.width / 2);
            const dyRight = mousePosition.y - (rightEyeRect.top + rightEyeRect.height / 2);
            const angleRight = Math.atan2(dyRight, dxRight);

            setEyePositions({
                leftEye: {
                    x: Math.cos(angleLeft) * eyeDistance,
                    y: Math.sin(angleLeft) * eyeDistance,
                },
                rightEye: {
                    x: Math.cos(angleRight) * eyeDistance,
                    y: Math.sin(angleRight) * eyeDistance,
                },
            });
        };

        moveEyes();
    }, [mousePosition]);

    return (
        <div
            className="face-container hidden xl:flex"
            style={{
                height: `${faceHeight}px`, 
                transition: 'height 0.3s ease-in-out',
                // backgroundColor: `${color}` 
            }}
        >
            {/* Left Eye */}
            <div
                id="left-eye"
                className="eye backdrop-blur-lg"
                style={{
                    position: 'absolute',
                    left: '25%',
                    top: '35%',
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: `translate(${eyePositions.leftEye.x}px, ${eyePositions.leftEye.y}px)`,
                }}
            >
                <div className='w-full h-16 border-t-4 border-black rounded-full'></div>
                <div
                    className={`pupil ${squeeze ? 'squeeze' : ''}`}
                    style={{
                        position: 'absolute',
                        transform: `translate(${eyePositions.leftEye.x}px, ${eyePositions.leftEye.y}px)`,
                    }}
                />
            </div>

            {/* Right Eye */}
            <div
                id="right-eye"
                className="eye"
                style={{
                    position: 'absolute',
                    left: '55%',
                    top: '35%',
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: `translate(${eyePositions.rightEye.x}px, ${eyePositions.rightEye.y}px)`,
                }}
            >
                <div className='w-full h-16 border-t-4 border-black rounded-full'></div>
                <div
                    className={`pupil ${squeeze ? 'squeeze' : ''}`}
                    style={{
                        position: 'absolute',
                        transform: `translate(${eyePositions.rightEye.x}px, ${eyePositions.rightEye.y}px)`,
                    }}
                />
            </div>
        </div>
    );
};

export default PeepingEyes;
