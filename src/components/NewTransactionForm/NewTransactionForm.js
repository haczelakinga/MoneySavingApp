import React from 'react';
import './NewTransactionForm.scss';
import { v4 as uuidv4 } from 'uuid';
import 'react-datepicker/dist/react-datepicker.css';

class NewTransactionForm extends React.Component {
	state = {
		uuid: uuidv4(),
		name: '',
		amount: '',
		date: new Date(),
		category: '',
		categoryIcon: '',
		transactionType: '',
		transactionTypeIcon: '',
		userID: this.props.userID
	};

	handleNameChange = e => {
		this.setState({
			name: e.target.value.toUpperCase()
		});
	};

	handleAmountChange = e => {
		this.setState({
			amount: e.target.value
		});
	};

	handleCategoryChange = e => {
		let { value } = e.target;
		let categoryIcon = '';

		switch (value) {
			case 'Bills':
				categoryIcon = 'fas fa-lightbulb';

				break;
			case 'School':
				categoryIcon = 'fas fa-graduation-cap';
				break;
			case 'Food':
				categoryIcon = 'fas fa-utensils';
				break;
			case 'Clothes':
				categoryIcon = 'fas fa-tshirt';
				break;
			case 'Car':
				categoryIcon = 'fas fa-car';
				break;
			case 'Hobby':
				categoryIcon = 'fas fa-mountain';
				break;
			case 'Salary':
				categoryIcon = 'fas fa-money-bill-wave';
				break;
			case 'Tips':
				categoryIcon = 'fas fa-coins';
				break;
			default:
				categoryIcon = '';
		}
		this.setState({
			category: value,
			categoryIcon: categoryIcon
		});
	};

	handleTransactionType = e => {
		let { value } = e.target;
		let transactionType = value;
		let transactionTypeIcon = '';
		switch (value) {
			case 'Outcome':
				transactionTypeIcon = 'fas fa-chevron-down arrow-down';
				break;
			case 'Income':
				transactionTypeIcon = 'fas fa-chevron-up arrow-up';
				break;
			default:
				transactionTypeIcon = '';
		}
		this.setState({
			transactionType: transactionType,
			transactionTypeIcon: transactionTypeIcon
		});
	};

	handleOnSubmit = e => {
		const nameInput = document.getElementById('name');
		const costInput = document.getElementById('cost');
		const categoryInput = document.getElementById('category');
		const transactionType = document.getElementById('type');
		const allInputs = [nameInput, costInput, categoryInput, transactionType];

		e.preventDefault();
		if (
			this.state.name &&
			this.state.amount &&
			this.state.category &&
			this.state.transactionType
		) {
			this.setState({
				uuid: uuidv4()
			});
			return (
				this.props.setNewTransaction(this.state) && this.clearInputs(allInputs)
			);
		} else {
			for (let input of allInputs) {
				if (!input.value) {
					input.classList.add('empty-input');
				}
			}
		}
	};

	clearInputs = allInputs => {
		this.setState({
			name: '',
			amount: '',
			category: ''
		});
		const form = document.getElementById('transaction-form');
		form.reset();
		for (let i of allInputs) {
			i.classList.remove('empty-input');
		}
	};

	render() {
		return (
			<div>
				<form
					id="transaction-form"
					className="form-flexbox"
					onSubmit={this.handleOnSubmit}>
					<label htmlFor="name" className="hidden-label">
						Transaction Name
					</label>
					<input
						id="name"
						className="form-input"
						type="text"
						placeholder="Name of your transaction"
						onChange={this.handleNameChange}
					/>
					<label htmlFor="cost" className="hidden-label">
						Transaction Cost
					</label>
					<input
						id="cost"
						className="form-input"
						type="number"
						step="0.01"
						min="0.1"
						onChange={this.handleAmountChange}
						placeholder="$"
					/>
					<label htmlFor="date" className="hidden-label">
						Transaction Date
					</label>
					<label htmlFor="category" className="hidden-label">
						Transaction Category
					</label>
					<select
						id="category"
						className="select form-input"
						name="Category"
						onChange={this.handleCategoryChange}
						defaultValue="Category">
						<option value="">Category</option>
						<option value="Bills">Bills</option>
						<option value="Food">Food</option>
						<option value="Car">Car</option>
						<option value="School">School</option>
						<option value="Clothes">Clothes</option>
						<option value="Hobby">Hobby</option>
						<option value="Salary">Salary</option>
						<option value="Tips">Tips</option>
					</select>
					<label htmlFor="category" className="hidden-label">
						Transaction Category
					</label>
					<select
						id="type"
						className="select form-input"
						name="Way"
						onChange={this.handleTransactionType}
						defaultValue="Type">
						<option value="">Type</option>
						<option value="Outcome">Outcome</option>
						<option value="Income">Income</option>
					</select>
					<button className="form-button" type="submit">
						Add
					</button>
				</form>
			</div>
		);
	}
}

export default NewTransactionForm;
