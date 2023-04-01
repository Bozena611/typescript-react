import { Component } from 'react'

type CounterProps = {
	message: string
}

type CounterState = {
	count: number
}

export class Counterclass extends Component<CounterProps, CounterState> {
	state = {
		count: 0
	}

	/* if you don't have props or state in your component use empty object {} for props, or delete state for state
	export class Counterclass extends Component<{}, CounterState> {
	state = {
		count: 0
	}

	export class Counterclass extends Component<CounterProps > {
	state = {
		count: 0
	}

	*/

	handleClick = () => {
		this.setState(prevState => ({ count: prevState.count + 1 }))
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Increment</button>
				{this.props.message} {this.state.count}
			</div>
		)
	}
}