/* type for object - moved to Person.types.ts */
/*type PersonProps = {
	name: {
		first: string
		last: string
	}
}*/

import { PersonProps } from "./Person.types"

export const Person = (props: PersonProps) => {
	return (
		<div>
			{props.name.first} {props.name.last}
		</div>
		)
}