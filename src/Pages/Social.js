import React, { useState, useEffect, useCallback } from "react";
import "./Social.css";

let BasicCard = function (obj) {
	return (
		<div
			className="socialBox"
			onClick={() => {
				window.open(obj.linkUrl, "_blank").focus();
			}}
		>
			<img className="socialImage" src={obj.imageUrl} />
		</div>
	);
};

function Social() {
	const [data, setData] = useState(null);
	useEffect(() => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", "/data/getSocial.json");
		xhr.onload = function () {
			if (xhr.status === 200) {
				setData(JSON.parse(xhr.responseText));
			}
		};
		xhr.send();
	}, []);
	return (
		<div>
			<div
				className="cardContainer"
				style={{ display: "flex", flexFlow: "row wrap" }}
			>
				{data?.length > 0
					? data.map(function (obj, index) {
							return BasicCard(obj);
					  })
					: null}
			</div>
		</div>
	);
}

export default Social;
