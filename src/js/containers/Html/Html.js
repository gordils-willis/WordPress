import React from 'react';

const Html = ({html, title}) => {
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<title>{title}</title>

				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

			</head>
			<body>
				<div className="app" id="root" dangerouslySetInnerHTML={{__html: html}}></div>
				<script src="main.js"></script>
			</body>
		</html>
	);
}

export default Html;
