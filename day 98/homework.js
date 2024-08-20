  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));

fetch('https://jsonplaceholder.typicode.com/posts/2')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));

fetch('https://invalid-url-that-does-not-exist.com')
  .then(response => response.json())
  .catch(error => console.error('Error fetching data:', error));
  fetch('https://jsonplaceholder.typicode.com/posts/3')
  .then(response => response.json())
  .finally(() => console.log('Fetch request completed.'));

fetch('https://jsonplaceholder.typicode.com/posts/4')
  .then(response => response.json())
  .then(data => {
    // Display data on the webpage
    document.getElementById('output').textContent = data.title;
  })
  .catch(error => console.error('Error fetching data:', error));
