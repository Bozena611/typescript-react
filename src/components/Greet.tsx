/* Without declaring type for props with typescript the page gives error*/

export const Greet = (props) => {
	return (
		<div>
			<h2>Welcome {props.name}! You have 10 unread messages</h2>
		</div>
	)
}