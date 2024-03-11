# Email Sending Service with Serverless Function

This is a serverless function that sends emails using Nodemailer. The function takes a request with a secret key and email details (to address, subject, text/html content) and sends the email using the configured SMTP server.

## Setup

1. Clone this repository.
2. Install the required dependencies by running npm install.
3. Create a .env file and add the following environment variables:
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USERNAME=your_smtp_username
SMTP_PASSWORD=your_smtp_password
EMAIL_FROM=your_email_address
EMAIL_SECRET_KEY=your_secret_key

4. Deploy the serverless function to your preferred provider (e.g., AWS Lambda) and configure the necessary environment variables.
5. Test the function by sending a POST request with JSON data containing the secret key and email details.

## Usage

Send a POST request to the deployed serverless function with the following JSON payload:

```
{
  "key": "your_secret_key",
  "email": {
    "to": "recipient@example.com",
    "subject": "Testing Email",
    "text": "This is a test email.",
    "html": "<p>This is a test email.</p>"
  }
}
```

Ensure to replace your_secret_key, recipient@example.com, and email content with your own values.

## Built With

• Node.js - JavaScript runtime
• Nodemailer - Email sending library
• Serverless framework (AWS Lambda, Google Cloud Functions, etc.)

## Author

[[nasawz](https://github.com/nasawz)]

## License

This project is licensed under the MIT License - see the LICENSE file for details.