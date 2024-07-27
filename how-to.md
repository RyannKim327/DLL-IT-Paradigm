### DLL IT Paradigm
#### MPOP Reverse II [Ryann Kim Sesgundo]

---
### Table of Contents
| | |
|---|---|
| [Introduction](#introduction) | [Installation](#installation) |
| [Open the Project](#open-the-project-again) | [How to start](#how-to-start) |

---
### Introduction
> To start, you've must known first the fundamentals of `HTML`, `CSS` and `Javascript`, also you've must know the basics of `Django` and how to use `RESTApi`.

---
### Installation
1. First is you've must insstall the `Virtual Environment`. to install just execute `pip install virtualenv` or `python -m pip install virtualenv`
2. Next is you need to create a `Virtual Environment` to your project, to have it, kindly execute `virtualenv venv` or `python -m virtualenv venv`.
3. Once you have the virtual environment you need now to activate it by executing `.\venv\Source\activate` if these command didn't work execute this
command to your powershell, `run it as administrator` and paste `Set-ExecutionPolicy Unrestricted -Force` and enter. And do again the step 3. **NOTE** that you
need to enable the `Set-ExecutionPolicy Unrestricted -Force` once, if you open your project again, it won't be needed.
4. Next is install the dependencies by executing `pip install -r requirements.txt`.
5. Next is to create the project, it will run by executing `django-admin startproject backend` where the backend is the project name for the django, in my case,
I use `backend`.
6. Now is to create an app, just execute first `cd backend` and execute `django startapp myserver` where `myserver` is the parameter for your app.
7. Now is to create a ReactJs project for frontend. Just execute `npx create-react-app frontend` the `frontend` is the parameter where you name your
frontend, in my case I use `frontend`.
8. Now you may start to code.

---
### Open the project again
> To open the project again, just activate first the virtualenv by executing `.\venv\Source\activate` and you may now start to code.

---
### How to start
> To begin with, you need to activate the `ReactJs` and the `Django` in two terminals. In `ReactJs` navigate to the folder where you need to found
the `package.json` just execute `npm start`. In `Django` just navigate to the folder where you found the `manage.py` and execute `python manage.py runserver`

