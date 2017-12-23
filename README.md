# AngularJS Migration Workshop

This the sample project used in the workshop by [Asim Hussain](http://twitter.com/jawache) from [codecraft.tv](codecraft.tv) on _Migrating from AngularJS_

## Setup

The project is bootstrapped using npm but at the same time since this is a use case of migrating an old AngularJS project created some time ago we use bower to install the dependencies since that was the norm until a few years ago.

`npm run setup`

## Running

We have a simple server side which we run using 

`npm run server` - this runs a json-server and refreshes the data bases on each run so the deleted contacts will appear again.

To run the application we type

`npm start` - this loads the application using a local webserver, check the console for the port number to use.

The application is a simple contacts application where you can search, create or edit a contact.