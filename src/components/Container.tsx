type ContainerProps = {
	styles: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
	return (
		/*<div style={{ border: '1px solid black', padding: '1rem' }}> without typescript for style*/
		<div style={props.styles}>
			Text content goes here
		</div>
	)
}