import React, { useState } from "react";
import { useSpring, animated, interpolate } from "react-spring";

const SpringDown = ({ children }) => {
	const [clicked, set] = useState(false);
	const { scale } = useSpring({ scale: clicked ? 0.9 : 1 });
	return (
		<>
			<animated.button
				onMouseDown={() => set(true)}
				onMouseUp={() => set(false)}
				onMouseLeave={() => set(false)}
				style={{
					backgroundColor: "white",
					transform: scale.interpolate((s) => `scale(${s})`),
				}}
			>
				{children}
			</animated.button>
		</>
	);
};

const SpringUpHover = ({ children }) => {
	const [hover, set] = useState(false);
	const { scale } = useSpring({ scale: hover ? 1.1 : 1 });
	return (
		<>
			<animated.button
				onMouseEnter={() => set(true)}
				onMouseLeave={() => set(false)}
				style={{
					backgroundColor: "white",
					transform: scale.interpolate((s) => `scale(${s})`),
				}}
			>
				{children}
			</animated.button>
		</>
	);
};

export { SpringDown, SpringUpHover };
