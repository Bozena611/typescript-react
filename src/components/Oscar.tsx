/* Passing react component as child props use React.ReactNode,
if React lower than 17, you need to import React on top*/
type OscarProps = {
	children: React.ReactNode
}
export const Oscar = (props: OscarProps) => {
	return <div>{props.children}</div>
}