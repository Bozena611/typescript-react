/*if we just put status: string any string can be passed from App.tsx
with condition App.tsx will warn us that it can accept only the 3 options listed
 so if in App.tsx I write 'status='test' it will complain*/

type StatusProps = {
	/*status: string*/
	status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
	let message;
	if (props.status === 'loading') {
		message = 'Loading...'
	} else if (props.status === 'success') {
		message = 'Data fetched successfully!'
	} else if ( props.status === 'error') {
		message = 'Error fetching data'
	}
	return (
		<div>
			<h2>Status - {message}</h2>
		</div>
	)
}