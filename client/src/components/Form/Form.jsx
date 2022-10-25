import React, { useState } from "react";
import useStyles from "./styles";
import { Textfield, Button, Typography, Paper } from "@material-ui/core";

const Form = () => {
	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});

	const classes = useStyles();

	const handleChange = event => {
		setPostData({ ...postData, [event.target.name]: event.targe.value });
	};

	const handleSubmit = () => {};

	return (
		<Paper className={classes.paper}>
			<Form
				autcomplete="off"
				noValidate
				className={classes.form}
				onSubmit={handleSubmit}
			>
				<Typography variant="h6">Creating a Memory</Typography>
				<textField
					name="creator"
					variant="outlined"
					label="Creator"
					fullWidth
					value={postData.creator}
					onChange={handleChange}
				/>
				<textField
					name="title"
					variant="outlined"
					label="Title"
					fullWidth
					value={postData.title}
					onChange={handleChange}
				/>
				<textField
					name="message"
					variant="outlined"
					label="Message"
					fullWidth
					value={postData.message}
					onChange={handleChange}
				/>
				<textField
					name="tags"
					variant="outlined"
					label="Tags"
					fullWidth
					value={postData.tags}
					onChange={handleChange}
				/>
			</Form>
		</Paper>
	);
};

export default Form;
