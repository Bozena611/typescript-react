/* Add type for props and the page works */
/* type for string, number, boolean*/
type GreetProps = {
	name: string
	messageCount?: number /*add ? if you want it to be optional and not obligatory*/
	isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
	const { messageCount = 0 } = props;
	return (
		<div>
			<h2>
				{props.isLoggedIn
					? `Welcome ${props.name}! You have ${messageCount} unread messages`
					: 'Welcome guest'}
			</h2>
		</div>
	)
}