const ctx = document.getElementById('myChart');
    
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Cloths', 'Shoes', 'Belts', 'Purses', 'T-shirts', 'Pants'],
    datasets: [{
      label: 'Sales ',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
const ctx1 = document.getElementById('doughnut');

new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ['Cloths', 'Shoes', 'Belts', 'Purses', 'T-shirts', 'Pants'],
    datasets: [{
      label: 'Sales ',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});