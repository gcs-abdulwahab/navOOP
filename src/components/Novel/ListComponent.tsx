import type { User } from "../../UserType";

interface ListComponentProps {
	users: User[];
}

const ListComponent = ({ users }: ListComponentProps) => {
	return (
		<section className="max-w-5xl mx-auto mt-10 px-4">
			<header className="mb-6 flex items-center justify-between">
				<h1 className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-100">
					Users
				</h1>
				<span className="text-xs font-medium text-gray-500 dark:text-gray-400">
					{users.length} total
				</span>
			</header>

			{users.length === 0 ? (
				<div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center">
					<p className="text-sm text-gray-600 dark:text-gray-400">No users available yet.</p>
				</div>
			) : (
				<ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{	
							users.map((user) => (
						<li
							key={user.id}
							className="group relative rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
						>
						<div className="p-5 flex flex-col gap-3">
							<div>
								<p className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition-colors">
								<span className="mx-1 font-bold"> Username : </span>	{user.username}
								</p>
								<p className="text-xs text-gray-500 dark:text-gray-400">ID: {user.id}</p>
							</div>
							<div className="space-y-1">
									<p className="text-xs text-gray-700 dark:text-gray-300 break-all">
									<span className="mx-1 font-bold"> Email : </span>	{user.email}
									</p>
								{user.phone && (
									<p className="text-xs text-gray-600 dark:text-gray-400">
										<span className="mx-1 font-bold"> Phone : </span> {user.phone}
									</p>
								)}
								</div>
							</div>
							<div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-indigo-500/0 via-indigo-500/70 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default ListComponent;
