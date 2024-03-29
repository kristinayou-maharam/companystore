// Require:
var postmark = require("postmark");

const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);
$form.addEventListener('submit', client.sendEmail);


function handleSubmit(e) {
  e.preventDefault();

  const $target = e.target,
  fromName = $target.querySelector('#from-name').value,
  toName = $target.querySelector('#to-name').value, 
  toEmail = $target.querySelector('#to-email').value,
  message = $target.querySelector('#message').value;

  console.log(`to: ${toName}`)
  console.log(`to: ${toEmail}`)
  console.log(`from: ${fromName}`)
  console.log(`message: ${message}`)
}


// Send an email:
var client = new postmark.ServerClient("3ee0654b-4edd-49b7-9b13-ae6002a6ba77");

client.sendEmail({
  "From": "ky8536@hermanmiller.com",
  "To": "ky8536@hermanmiller.com",
  "Subject": "Maharam Company Store Order Information",
  "HtmlBody": "<p>The following message contains information to order items you selected on the Maharam Company Store</p>",
  "TextBody": "${message}---------------------- The following message contains information to order items you selected on the Maharam Company Store",
  "MessageStream": "order-information"
});