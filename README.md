# URL-Shortener
A web application which creates short URLs from long ones


## Quick Start
  The quickest way to get started 

  Clone the Repository:
```bash
$ git clone https://github.com/MarcoF1/URL-Shortener.git
```
  Or if you have SSH keys setup:
```bash
$ git clone git@github.com:MarcoF1/URL-Shortener.git
```

  Install dependencies:

```bash
$ npm install
```

  Start the server:

```bash
$ npm run localhost
```

View the website at: http://localhost:3000

## Deployed URL
You can also visit our deployed URL via Heroku: https://tamidshorturl.herokuapp.com
Please note that because our project is hosted for free on Heroku that the server stopps running after some idle time of the resources not being requested, so the first access to the project may be a little slow to load because it's starting up. 

## Tools Used
We built the wevserver using Express and axios for the requests. The database was built using sqlite3 and the frontend was built using html and css. 

## Development process
This project was built during the week with some inpout from the rest of the MIT TAMID board. The biggest challenge was leaning how to redirect a request to an external URL. It took some time, but we realized that an external URL was just a response redirect using an HTTP 301 request. If we had more time, we would spend some of it making the URL shortener safer by explicitly disallowing cycles (ex not allowing a shortened URL to anything with https://tamidshorturl.herokuapp.com in the link) and making the frontend design a little more intuitive because right now it just has buttons to support the necessary Create, Read, Update, and Delete (CRUD) operations. This could have been done with some React.js on the design side. After extending the safety and frontend, we could then focus our efforts on some cool features like OAuth. 
