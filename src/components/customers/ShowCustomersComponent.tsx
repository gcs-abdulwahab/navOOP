import { useState } from "react";

class Customer {
	id: number;
	name: string;
	amount: number;

	constructor(id: number, name: string, amount: number) {
		this.id = id;
		this.name = name;
		this.amount = amount;
	}
}

const ShowCustomersComponent = () => {
	const [customers, setCustomers] = useState<Customer[]>([]);

	const fetchData = async () => {
		const response = await fetch("customers.json");
		const data = await response.json();
		setCustomers(data);
	};

	fetchData();
	return (
		<div>
			<h2>Customer List</h2>
			<ul>
				{customers.map((customer) => (
					<li key={customer.id}>
						{customer.name} - ${customer.amount}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ShowCustomersComponent;
