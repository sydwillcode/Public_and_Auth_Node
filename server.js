// Bring in required node packages
const express = require("express"),
	app = express(),
	PORT = process.env.PORT || 3000;

// imported routes
const publicRoutes = require("./routes/public-routes");

// Middleware
app.use(express.json());

app.use("/", publicRoutes);

// Create server and listen to the port
app.listen(PORT, err => {
	err
		? console.log(`Something went wrong ${err}`)
		: console.log(`Server started on port ${PORT}`);
});


