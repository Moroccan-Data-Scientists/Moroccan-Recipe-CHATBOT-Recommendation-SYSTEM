import random
import string
import os
from user.models import User
from user.database import fetch_user, update_user
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Gmail SMTP Server Configuration
GMAIL_SMTP_SERVER = "smtp.gmail.com"
GMAIL_SMTP_PORT = 587
SENDER_EMAIL = os.getenv("SENDER_EMAIL")
GMAIL_PASSWORD = os.getenv("GMAIL_PASSWORD")

def generate_verification_code(length=6):
    code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=length))
    return code

def send_verification_email(recepient_email: str, recipient_name: str, verification_code: str):
    # Create the email message
    email_body = f"""
    <p>Hello, {recipient_name}</p>
    <p>You have requested to reset your password. Please use the following verification code:</p>
    <p><strong>{verification_code}</strong></p>
    <p>If you did not request this password reset, please ignore this email.</p>
    <p>Thank you!</p>
    """
    message = MIMEText(email_body, 'html')
    message["Subject"] = "Email Verification"
    message["From"] = SENDER_EMAIL
    message["To"] = recepient_email

    # Connect to the Gmail SMTP server and send the email
    with smtplib.SMTP(GMAIL_SMTP_SERVER, GMAIL_SMTP_PORT) as server:
        # identify ourselves to smtp gmail client
        try:
            server.ehlo()
            # secure our email with tls encryption
            server.starttls()
            # re-identify ourselves as an encrypted connection
            server.ehlo()
            server.login(SENDER_EMAIL, GMAIL_PASSWORD)  # Login to the SMTP server with your App Password
            server.send_message(message)  # Send the email message
            server.close()
            return {"message": "Email sent successfully."}
        except Exception as e:
            return {"message": f"Error sending email: {e}"}


