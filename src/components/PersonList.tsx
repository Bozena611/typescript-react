import { Name } from "./Person.types";

/* Array of objects */
type PersonListProps = {
	names: Name[]
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