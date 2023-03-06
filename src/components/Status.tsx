type StatusProps = {
	status: string
}

export const Status = (props: StatusProps) => {
	return (
		<div>
			<h2>Loading...</h2>
			<h2>Data fetched successfully!</h2>
			<h2>Error fetching data</h2>
		</div>
	)
}