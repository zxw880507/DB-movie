# DB-MOVIE

DB-MOVIE is a single page app for Movie/TV browsing and help users to discover their next show by reliable stats. Registered users could favor some media and personal favorite movies and TV shows list can be modified upon favorite tab. Guests and users both are accessible to search media by keywords, but only users have favorites settings.

The front-end has been deployed to Netlify and the live site can be found [here](https://dbmovie-zxw.netlify.app/). The back-end is being hosted by Heroku.

Welcome to register for exploring the webapp features or there are 5 existing users for test:
| Email | Password |
| :------: | :------: |
| `test1@db.com` | `test` |
| `test2@db.com` | `test` |
| `test3@db.com` | `test` |
| `test4@db.com` | `test` |
| `test5@db.com` | `test` |

### Front end

- [x] react-app
- [x] react-router-dom
- [x] react-redux & thunk
- [x] bootstrip, material-UI

### Back end

- [x] Express
- [x] Sequelize ORM
- [x] node-cache
- [x] axios
- [x] JWT auth

The back-end repo was built using Node.js and Express with third party(TMDB) API integration. Also the API request performance is optimized by caching for storing and retrieving response data.
&nbsp;
&nbsp;

## Screen Shot

#### Home page Static

!["Home"](client/docs/screenshot_home_page_1.png)

#### Home page Browsing

!["Home Browsing"](client/docs/browsing.gif)

#### User Login

!["User Login"](client/docs/login.gif)

#### Add Media as Favorites

!["Add Fav"](client/docs/add_favorite.gif)

#### Manage Favorites

!["Manage Fav"](client/docs/manage_favorites.gif)

#### Media Search

!["Media Search"](client/docs/media_search.gif)

## Major Dependencies

- React.js
- Material-UI
- bootstrap
- react-redux && thunk
- react-router-dom
- Node.js
- Express
- sequelize
- node-cache
- jsonwebtoken
- bcryptjs

## Available Scripts

In the Front-end directory (DB-MOVIE/client), you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

In the Back-end directory (DB-MOVIE/server), you can run:

### `npm start`

Runs the server in the development mode.
Call (http://localhost:8000) followed by listed routes to fetch data in the browser.

|                    Routes                     | Method |                    params                     | Response body               |
| :-------------------------------------------: | :----: | :-------------------------------------------: | --------------------------- |
|                   /api/ping                   |  get   |                      N/A                      | success message             |
|             /api/movie/`<params>`             |  get   |          popular/top_rated/upcoming           | sorted data / error message |
|              /api/tv/`<params>`               |  get   |         popular/top_rated/on_the_air          | sorted data / error message |
| /api/search?keywords=`<params>`&page=`<page>` |  get   | `params` as in `any` && `page` as in `number` | sorted data / error message |
