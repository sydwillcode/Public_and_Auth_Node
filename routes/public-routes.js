const express = require ('express'), 
router = express.Router(), 
{home, dashboard, login, logout} = require('../controller/public-controller'); 


// Routes for the user
/*
* Description: Home/Index
* Mathod: GET
* * Route: /
* Access: public
**/
router.route('/').get(home)

/*
* Description: User Dashboard
* Route: /dashboard
* Mathod: GET
* Access: private
**/
// isAuth is not instantiated, because we don't want it to be called
router.route('/dashboard').get(dashboard)

/*
* Description: Post login
* Mathod: POST
* Route: /login
* Access: public
**/

// Receive incoming body request
// Check for user in db
// Set the user as loggedIn
router.route('/login').post(login)


/*
* Description: Logout
* Mathod: GET
* Route: /logout
* Access: private
**/
router.route('/logout').get(logout)

module.exports = router;
