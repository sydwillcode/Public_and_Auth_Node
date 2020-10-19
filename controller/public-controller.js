// Fake user in database
let user = {
	name: "Syd Will",
	username: "sydwilltest",
	email: "test@test.com",
	age: 30,
	about: "Syd is pretty, smart, and fun",
	password: 123,
	loggedIn: false,
};

exports.home = (req, res) => {
	res.status(200).send("Hello World");
};

exports.dashboard = (req, res) => {
	res.status(200).send("Dashboard");
};

exports.login = (req, res) => {
	// destructure incoming body
	let { username, password } = req.body;

	// check for user in db
	if (username !== user.username) {
		// if no user with username was found, send error message to front end letting user know the issue
		return res.status(400).json({
			success: false,
			message: "No user with that username and password combination (username)",
		});
	}
	if (password !== user.password) {
		// if no user with password was found, send error message to front end letting user know the issue
		return res.status(400).json({
			success: false,
			message: "No user with that username and password combination (password)",
		});
	}
	// Set the user as loggedIn
	user.loggedIn = true;
	res.status(200).json({
		success: true,
		data: user,
	});
};

exports.logout = (req, res) => {
	user.loggedIn = false;
	res.status(200).json({
		success: true,
		message: "You are now logged out",
	});
};
