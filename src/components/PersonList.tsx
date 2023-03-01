/* Array of objects */
type PersonListProps = {
	names: {
		first: string
		last: string
	}[]
}
export const PersonList = (props: PersonListProps) => {
	return (
		<div>
			{props.names.map((name, i) => {
				return (
					<h2 key={i}>
						{name.first} {name.last}
					</h2>
				)
			})}
		</div>
	)
}