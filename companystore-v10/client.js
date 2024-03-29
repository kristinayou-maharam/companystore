// client.js
fetch('http://localhost:3000/send-email', {
    method: 'POST',
})
.then(response => response.text())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});