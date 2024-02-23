# to use after cloning do "npm install" and create cofig.env file for mongoDB using this example:
NODE_ENV=development\
PORT=???\
USER=???\
DATABASE=mongodb+srv://???<password>@cluster0.???.mongodb.net/basketball_db?retryWrites=true&w=majority\
DATABASE_PASSWORD=???\
JWT_SECRET=???\
JWT_EXPIRES_IN=???m

# USER endpoints:

## POST/api/register
registers a user and return a token for the new user

{\
    "name":"username",\
    "email":"email@email.com",\
    "password":"userpassword",\
    "passwordConfirm":"userpassword"\
}

## POST/api/login
logs a user in and return a token for the session

{\
    "email":"gedasma@gmail.com",\
    "password":"asdasdasd"\
}

## POST/api/participants
create a new participant

{\
    "firstName": "Logan",\
    "lastName": "Smith",\
    "teamName": "Sales Sharks",\
    "age": "37"\
}

# GET endpoints that can return more than 1 item paginates results for 10 items
example:\
GET/api/participants endpoint return 10 items\
use GET/api/participants?page=2 to get seconds page ect...\
use GET/api/participants?page=1 is a valid alternative to GET/api/participants\

## GET/api/participants(?page=1)
gets all participants

## GET/api/participants/{id}/card
return a participant's data with specific id

## GET/api/team/{team's name}/members(?page=1)
returns member from a specific team

you can sort the results by field using "&sort={field name}" example:\
GET/api/team/My Team Name/members?page=3&sort=lastName

## GET/api/team/youngest(?page=1)
returns participants that are 20 or younger


