//This gets the chart id and assigns it to a variable
var ctx = document.getElementById('chart');
//This creates the chart
var myChart = new Chart(ctx, {
	//This makes it a line chart
	type: 'line',
	//This is where all the dates are
	data: {
		labels: ["Mar 21, 2020", "Mar 22, 2020", "Mar 23, 2020", "Mar 24, 2020", "Mar 25, 2020", "Mar 26, 2020", "Mar 27, 2020", "Mar 28, 2020", "Mar 29, 2020", "Mar 30, 2020", "Apr 4, 2020", "Apr 5, 2020", "Apr 6, 2020", "Apr 7, 2020", "Apr 8, 2020", "Apr 9, 2020", "Apr 10, 2020", "Apr 11, 2020", "Apr 12, 2020", "Apr 13, 2020", "Apr 14, 2020", "Apr 15, 2020", "Apr 16, 2020", "Apr 17, 2020", "Apr 18, 2020", "Apr 19, 2020", "Apr 20, 2020", "Apr 21, 2020", "Apr 22, 2020", "Apr 23, 2020", "Apr 24, 2020", "Apr 25, 2020", "Apr 26, 2020", "Apr 27, 2020", "Apr 28, 2020", "Apr 29, 2020", "Apr 30, 2020", "May 1, 2020", "May 6, 2020", "May 7, 2020", "May 8, 2020", "May 9, 2020", "May 10, 2020", "May 11, 2020", "May 12, 2020", "May 13, 2020", "May 14, 2020", "May 15, 2020", "May 16, 2020"],
		datasets: [{
			//This is where the label for the data is
			label: '# of Daily Tests Performed in Canada Per One Thousand People',
			//This is where all the data is
			data: [0.308, 0.387, 0.268, 0.32, 0.383, 0.481, 0.403, 0.371, 0.431, 0.622, 0.486, 0.589, 0.369, 0.305, 0.216, 0.325, 0.325, 0.373, 0.274, 0.403, 0.434, 0.51, 0.514, 0.462, 0.476, 0.433, 0.464, 0.439, 0.356, 0.57, 0.684, 0.823, 0.632, 0.654, 0.63, 0.589, 0.625, 0.807, 0.433, 0.729, 0.808, 1.105, 0.807, 0.768, 0.69, 0.673, 0.476, 0.771, 0.849],
			//Below is the colour of the area below the line and the colour of the line 
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)'
			],

			borderColor: [
				'rgba(255, 99, 132, 1)'
			],
			//This is the thickness of the line
			borderWidth: 2
		}]
	},
	//This bakes sure the y-axis begins at 0
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}


	}
});
