import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./assets/images/memories.png";

const App = () => {
	return (
		<Container maxWidth="lg">
			<AppBar position="static" color="inherit">
				<Typography variant="h2" align="center">
					Memories
				</Typography>
				<img src={memories} alt="memories" height="60"></img>
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						container
						justify="space-between"
						alignItems="stretch"
						spacing={3}
					>
						<Grid item zs={12} sm={7}></Grid>
						<Grid item zs={12} sm={4}></Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
