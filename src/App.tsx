import { Suspense } from "react"
import { Outlet } from "react-router"

export const App = () => {
	return (
		<div>
			<Suspense fallback={<p>Loading...</p>}>
				<Outlet />
			</Suspense>
		</div>
	)
}
