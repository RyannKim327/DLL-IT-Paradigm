import smtplib , ssl
from email.message import EmailMessage
import json

class SendEmail:
	def __init__(self):
		self.__port = 465

		with open("credentials.json", "r") as file:
			self.__data = json.load(file)
	
	def send(self, sender, message):
		context = ssl.create_default_context()
		msg = EmailMessage()
		msg['Subject'] = "Here is your One Time Password Authentication"
		msg["From"] = self.__data['email']
		msg["To"] = sender
		msg.set_content(message)

		with smtplib.SMTP_SSL("smtp.gmail.com", port=self.__port, context=context) as server:
			server.login(user=self.__data['email'], password=self.__data['password'])
			server.sendmail(self.__data['email'], sender, msg.as_string())