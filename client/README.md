# DB-MOVIE

DB-MOVIE is an single page app for Movie/TV browsing and help users to discover their next show by reliable stats.

### Front end

- [x] react-app
- [x] bootstrip, material-UI

### Back end

- [x] Express
- [x] node-cache
- [x] axios

The back-end repo was built using Node.js and Express with third party(TMDB) API integration.
&nbsp;
&nbsp;



## Final Product

### Home page



### Gigs page



### Individual Gig details



### Live messaging between clients and contractors (Socket IO Implementation)


### Placing a booking

!["Placing a booking"](https://github.com/shadeemerhi/simplifix/blob/master/docs/booking.gif)

### Booking confirmation (left is Client, right is Contractor, Socket IO Implementation)

!["Booking confirmation"](https://github.com/shadeemerhi/simplifix/blob/master/docs/bookingconfirm.gif)

### After the Gig completion, the Contractor can specify hours (left is Client, right is Contractor)

!["Specifying hours worked"](https://github.com/shadeemerhi/simplifix/blob/master/docs/hours.gif)

### Payments with Stripe

!["Payments with Stripe"](https://github.com/shadeemerhi/simplifix/blob/master/docs/payment.gif)

### Order history after payment has been received

!["Order history after payment has been received"](https://github.com/shadeemerhi/simplifix/blob/master/docs/paymentdone.png)

### New Gig form

!["Creating a new Gig"](https://github.com/shadeemerhi/simplifix/blob/master/docs/newgig.png)

## Dependencies

- React.js
- Node.js
- Express
- Material-UI
- bootstrap
- node-cache

## Stripe cards

Payment succeeds: 4242 4242 4242 4242

Payment requires authentication: 4000 0025 0000 3155

Payment is declined: 4000 0000 0000 9995

## Cypress testing

command: ./node_modules/.bin/cypress open

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
