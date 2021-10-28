# Project1 Milestone3
Your app can be found at https://project-milestone3-yzhou43.herokuapp.com/

## Install Requirements
1. `pip install python-dotenv`  
2. `pip install requests`  
3. `pip install flask`  
4. install flask_login using `pip install flask-login`
5. install flask_sqlalchemy using `pip install -U Flask-SQLAlchemy`
6. install psycopg2 using `psycopg2` 
7. install npm using `sudo apt install npm`

## Set up
1. Create `.env` file inside the project directory  
2. Write the client ID and client secret of Spotify developer API, and the access token of Genius API in the `.env` file as following:  
SPOTIFY_CLIENT_SECRET = 'YOUR_SECRET'  
SPOTIFY_CLIENT_ID = 'YOUR_ID'    
GENIUS_AUTH_TOKEN = 'YOUR_TOKEN'  
DATABASE_URL = 'YOUR_DATABASE_URL'   

## Run Application
1. Run command in terminal (in your project directory): `npm run build`. This will update anything related to your `App.js` file (so `public/index.html`, any CSS you're pulling in, etc).
2. Run command in terminal (in your project directory): `python3 app.py`
3. Preview web page in browser 'localhost:8080/' (or whichever port you're using)

## Deploy to Heroku
1. Create a Heroku app: `heroku create --buildpack heroku/python`
2. Add nodejs buildpack: `heroku buildpacks:add --index 1 heroku/nodejs`
3. Push to Heroku: `git push heroku main`

## Technical Issues
1. One technical issus I met is how to save the user input to the artists ID list store in the client side. I used useState hook to set a variable newArtist to save the user's input, and then use the function onChange={(e) => setNewArtist(e.target.value)} to change the variable's value according to user's input.
2. I first used HTML form to conduct the user input and save events, but HTML form cannot handle complicated exvents. Then I used two button with onClick to handle the events.
3. I had problem with the bulk data addition and deletion from the database. I solved this problem by first delete all the artist ID for current user, and then add the user saved artist ID to the database, which can make sure that the data stored in the database is exactly what the user saved data.

## Comfortable/Uncomfortable Parts
I'm confortable with the React part because the starter code and the tutorial palylist are very helpful, so I didn't encounter with many problems in this part. However, I'm not very comfortable with the heroku deplyment part and the test part, and there isn't many tutorials about how to do these. I didn't do the unit test this time, and I will work on the test part if I have more time.
