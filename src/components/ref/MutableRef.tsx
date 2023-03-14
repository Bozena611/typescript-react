import { useState, useRef, useEffect } from 'react';

/* For Mutable Ref specify element type */

export const MutableRef = () => {
	const [timer, setTimer] = useState(0);
	const interValRef = useRef<number | null>(null);
	/*const interValRef = useRef<number | undefined>(undefined); fix error on 11 with undefined or use condition*/

	const stopTimer = () => {
		if(interValRef.current) window.clearInterval(interValRef.current)
	}
	useEffect(() => {
		interValRef.current = window.setInterval(() => { /* interValRef.current shows error fixed with <numer | null> line 7*/
			setTimer((timer) => timer +1)
		}, 1000);
		return() => {
			stopTimer();
		}
	}, [])

	return (
		<div>
			HookTimer - {timer} -
			<button onClick={() => stopTimer()}>Stop Timer</button>
		</div>
	)
}