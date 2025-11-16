import { useState } from "react";
import type { User } from "../../UserType";

interface AddUserComponentProps {
	onAddEvent: (user: Pick<User, "username" | "email">) => void;
}



const AddUserComponent = ({ onAddEvent }: AddUserComponentProps) => {
	const [formData, setFormData] = useState<Pick<User, "username" | "email">>({
		username: "testUser",
		email: "testEmail@email.com",
	});

	

	const reset = () => {
		setFormData({ username: "", email: "" });
	}

	const handleAddUser = (event: React.FormEvent) => {
		event.preventDefault();
		console.log("Submitting user", formData);
		onAddEvent(formData);
		reset();
	};


	return (
		<div className="max-w-md mx-auto mt-8">
			<form 
				onSubmit={handleAddUser}
				className="flex flex-col gap-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 p-6"
			>
				<h1 className="text-xl font-semibold tracking-tight text-gray-800 dark:text-gray-100">
					Add User
				</h1>

				<div className="flex flex-col gap-1">
					<label
						htmlFor="username"
						className="text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Username
					</label>
					<input
						id="username"
						type="text"
						name="username"
						autoComplete="username"
						value={formData.username}
						onChange={(e) =>
							setFormData({ ...formData, username: e.target.value })
						}
						placeholder="e.g. johndoe"
						className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
					/>
				</div>

				<div className="flex flex-col gap-1">
					<label
						htmlFor="email"
						className="text-sm font-medium text-gray-700 dark:text-gray-300"
					>
						Email
					</label>
					<input
						id="email"
						type="email"
						name="email"
						autoComplete="email"
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						placeholder="email@example.com"
						className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
					/>
				</div>

				<div className="flex items-center justify-end pt-2">
					<button
						type="submit"
						className="inline-flex items-center justify-center rounded-md bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition-colors"
					>
						Add User
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddUserComponent;
