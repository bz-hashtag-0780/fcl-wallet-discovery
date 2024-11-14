'use client';

import { useAuth } from '@/context/AuthContext';

export default function Home() {
	const { user, loggedIn, logIn, logOut } = useAuth();

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600">
			<div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
				<h1 className="text-3xl font-bold text-center mb-2">
					Wallet Discovery Example
				</h1>
				<p className="text-gray-600 text-center mb-6">
					Connect your wallet to get started
				</p>

				{loggedIn ? (
					<div className="space-y-4">
						<p className="text-center text-gray-700">
							Connected as:{' '}
							<span className="font-medium">{user?.addr}</span>
						</p>
						<button
							onClick={logOut}
							className="w-full py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition duration-200 ease-in-out"
						>
							Disconnect Wallet
						</button>
					</div>
				) : (
					<button
						onClick={logIn}
						className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-200 ease-in-out"
					>
						Connect Wallet
					</button>
				)}
			</div>
		</div>
	);
}
