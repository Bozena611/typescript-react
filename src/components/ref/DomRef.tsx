import { useRef, useEffect } from 'react';

/*for DomRef specify DOM type (line 6)*/

export const DomRef = () => {
	const inputRef = useRef<HTMLInputElement>(null!) /*if you are sure your ref is never null add !*/

	useEffect(()=> {
		inputRef.current.focus() /* when using null! you don't need ? here*/
	}, [])

	return (
		<div>
			<input type='text' ref={inputRef} />
		</div>
	)
}

/* we can fix the error by adding optional chaining on current (line 26)
	and then we get another error on focus and we need to specify the DOM element
	so we add HTML element to useRef (line 21)
export const DomRef = () => {
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(()=> {
		inputRef.current?.focus()
	}, [])

	return (
		<div>
			<input type='text' ref={inputRef} />
		</div>
	)
}
*/

/* shows typescript error on line 42
export const DomRef = () => {
	const inputRef = useRef(null)

	useEffect(()=> {
		inputRef.current.focus()
	}, [])

	return (
		<div>
			<input type='text' ref={inputRef} />
		</div>
	)
}
*/