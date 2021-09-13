import express from "express";
import chalk from "chalk";
import ip from "ip";
import routes from "../src/routes";

const app = express();

app.use(express.json());

//route to middleware
app.use("/", routes);

//Port Declaration
const port = process.env.PORT || 3000;
const divider = chalk.gray(
  "\n-----------------------------------------------------------"
);

//Listener
app.listen(port, () => {
  console.log(`${chalk.bold("Access URLs:")}${divider}
	Localhost: ${chalk.magenta(`http://localhost:${port}`)}
	On Your Network: ${chalk.magenta(`http://${ip.address()}:${port}`)}${divider}
	`);
});
