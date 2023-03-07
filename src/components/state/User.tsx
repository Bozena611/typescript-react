import { useState } from "react";

type AuthUser = {
	name: string
	email: string
}

export const User = () => {
	const [user, setUser] = useState<AuthUser>({} as AuthUser)

	const handleLogin = () => {
		setUser({
			name: 'Wendy',
			email: 'wendy@example.com'
		})
	}

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<div>User name {user.name} </div>
			<div>User email {user.email} </div>
		</div>
	)
}