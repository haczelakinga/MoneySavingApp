import React from 'react';
import '../Charts.scss';
import { Pie } from 'react-chartjs-2';

const TransactionsByCategoryChart = ({ transactions, type, title }) => {
	const backgroundColor = {
		Car: '#88878f',
		Food: '#C8D08B',
		School: '#105b94',
		Clothes: '#E3A0C3',
		Hobby: '#F2CB92',
		Bills: '#FC534A',
		Salary: '#E4C9DF',
		Tips: '#CEE1F3'
	};
	const chartData = {
		labels: [],
		datasets: [
			{
				label: 'Transactions',
				data: [],
				backgroundColor: [],
				borderWidth: 0
			}
		]
	};
	const spends = transactions.filter(
		transaction => transaction.transactionType === type
	);

	for (let transaction of spends) {
		const transactionCategory = transaction.category;
		if (!chartData.labels.includes(transaction.category)) {
			chartData.labels.push(transaction.category);
			chartData.datasets[0].backgroundColor.push(
				backgroundColor[transactionCategory]
			);

			const sameCategoryTransaction = spends.filter(
				transaction => transaction.category === transactionCategory
			);
			let price = null;
			for (let singleTransaction of sameCategoryTransaction) {
				price += parseFloat(singleTransaction.amount);
			}
			chartData.datasets[0].data.push(price);
		}
	}

	return (
		<div className="container">
			<Pie
				data={chartData}
				options={{
					title: {
						display: true,
						text: title,
						fontStyle: 'italic',
						fontSize: 25
					},
					legend: {
						display: true,
						position: 'right'
					},
					responsive: true
				}}
			/>{' '}
		</div>
	);
};

export default TransactionsByCategoryChart;
