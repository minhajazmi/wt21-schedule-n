# Schedule N
> Manage you time based on your personality and preferences
> Live demo [_here_](https://). <!-- Do we have the online version on digital ocean yet?   -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Team](#team)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
* [License](#license)


## General Information

You can find various advice online on how to optimize your time managment, but often people are unable to use that advice effectivly because it is too general for individual circumstances and behaviour. This project aims to give out more personalised advice to users, keep them accountable and update them with new information about their time managment style.

For our first attemp to solve this problem, users can take the quiz and find out about their time mangagement style. Being aware of the type is the first step to takle the issue of having better time management.

Schedule N is an educative project implemented by students of TechLabs Berlin in winter term 21/22. 


## Technologies Used

- React & Hooks (Minimal Pie Chart, React Hook Form)
- React Router
- Axios
- Mongo DB and Mongoose
- Express
- NodeJS
- Flask
- Docker
- Python3
- Python libs: pandas, numpy, matplotlib


## Screenshots
![Example screenshot](./img/screenshot1.png)


## Setup

How to get a copy and locally run it:

1. Clone the repo
   ```bash
   git clone https://github.com/TechLabs-Berlin/wt21-schedule-n.git
   ```

Now you have two options, run every dependency on its own or use everything combined in docker.

### Via docker (easiest):

2. Download the [Docker](https://www.docker.com/get-started) application.

3.  Run the application
```bash
docker-compose up
```

### Seperated dependencies (Windows)

 #### Node app  
2. Install dependencies inside the `backend` directory
    ```bash
   npm install
   ```
3. Run the app
    ```bash
   npm start
   ```
#### Mongo DB and Mongoose

3. Install [MongoDB](https://docs.mongodb.com/guides/server/install/)

4. Install dependencies inside the `backend` directory
 ```bash
 install mongoose
   
   ```
5. Run the database
 ```sh
   
   ```
#### Flask server
6. Activate the environment and install dependencies inside the `DS-server` directory
    ```bash
    > venv\Scripts\activate
   ```
   ```bash
   pip install flask
   ```
7. Run the server
    ```bash
   flask run
   ```
 #### React app
8. Install dependencies inside the `frontend` directory
   ```bash
   npm install
   ```
9. Run the app
    ```bash
   npm start
   ```


## Usage

![techstack](./img/techstack.png)

For the Figma prototype see [here](https://www.figma.com/file/y52E1Exvi9uwlEfUhTzJsd/Project?node-id=105%3A1770)

## Project Status
Project is: _in progress_. This repo is part of the TechLabs Berlin winter 21/22 Project Phase. Further updates are not timed yet.


## Room for Improvement

Room for improvement:
- combine quiz with a general personality quiz for more advice tailored to their needs based on their personality
- get users to rate advice and optimise algorhythm

To do:
- finish user account implemetation (mostly finished on backend site)
- add seperate advice page with more specific tools (apps, methods...)
- adjust media queries and browser compatibilty 


## Team

- DS  | [Xinhao Wang](https://github.com/Xinhao221b)
- DS  | E. Delali Aggor
- WD  | [Suliyat Opeyemi](https://github.com/sullyheart)
- WD  | [Minhaj Azmi](https://github.com/minhajazmi)
- WD  | [Angelina Blumenthal](https://github.com/racketcat)
- UX  | Clare Dunn
- UX  | [Saba Rezzadeh Harati](https://github.com/sabarzh)

- Mentors: WD  | [Matheus Cardoso](https://github.com/cardoso), DS  | Tiago Ignacio

## Acknowledgements
- This quiz was based on [](https://).
- Many thanks to TechLabs Berlin Team

## Contact

[@](https://) - feel free to contact us!

## License

Schedule N is intended solely for education purposes. The project is not intended for any commercial, monetary, or data sharing use.


