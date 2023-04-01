import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
	isLoggedIn: boolean
	component: React.ComponentType<ProfileProps>/* to pass Component prop use React.ComponentType,
																								if that component itself accepts props, specify the prop type in <>,
																								import them from the component - in our case it's Profile*/
}

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
	if (isLoggedIn) {
		return <Component name='Borna' />
	}
	else {
		return <Login />
	}
}