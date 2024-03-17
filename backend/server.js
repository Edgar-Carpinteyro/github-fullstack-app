import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import path from "path";

import "./passport/github.auth.js";
import authRoutes from "./routes/auth.route.js"
// import authRoutes from "./db/connectMongoDB.js"
import userRoutes from "./routes/user.route.js"
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT ||  5050;
const __dirname =  path.resolve();

app.use(
    session(
    {
        secret: "s0m3s0rTOf5EcR3T", 
        resave: false, 
        saveUninitialized: false
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use(express.static(path.join(__dirname, "/frontend")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
    connectMongoDB();
});