import React, { Component } from "react";
import { Button, Row, Col } from "antd";
import NewsList from "./news-list";
import NewsInfo from "./news-info";

import "./style.css";

let insertIndex = 0;

const newsList = new Array(1000).fill(null).map((item, index) => ({
	title: "New one " + index,
	content: "Mainly intended for internal purposes, this technology allows for building native apps for Android, iOS, and Window Phone using JavaScript and React.JS components. RN very quickly went out into the big IT world and set its place among other Frontend technologies. "
}));

class BeforeOptimize extends Component{

	constructor(props) {
		super(props);

		this.state = {
			newsInfo:{
				origin: "CNN",
				number:1000
			},
			newsList: newsList,
			nothing: 1
		};

		this.insertItem = this.insertItem.bind(this);
		this.changeInfo = this.changeInfo.bind(this);
		this.changeNothing = this.changeNothing.bind(this);
	}

	insertItem() {
		const { newsList } = this.state;
		const newItem = {
			title: "Inserted " + insertIndex,
			content: "Mainly intended for internal purposes, this technology allows for building native apps for Android, iOS, and Window Phone using JavaScript and React.JS components. RN very quickly went out into the big IT world and set its place among other Frontend technologies. "
		};
		insertIndex += 1;
		const newList = [newItem, ...newsList];
		this.setState({ newsList: newList });
	}

	changeInfo() {
		const { newsInfo } = this.state;
		this.setState({newsInfo:{origin: "CNN", number: newsInfo.number + 1 }});
	}

	changeNothing() {
		const { nothing } = this.state;
		this.setState({nothing: nothing + 1});
	}

	render() {
		const { newsList, newsInfo } = this.state;
		return (
			<div className="optimize">
				<header className="title">The component before optimize</header>
				<div className="actions">
					<Row gutter={16}>
						<Col className="gutter-row" span={6}>
							<Button onClick={this.insertItem} type="primary">insert list item</Button>
						</Col>
						<Col className="gutter-row" span={6}>
							<Button onClick={this.changeInfo} type="primary">change new info</Button>
						</Col>
						<Col className="gutter-row" span={6}>
							<Button onClick={this.changeNothing} type="primary">change nothing</Button>
						</Col>
					</Row>
				</div>
				<div className="info">
					<NewsInfo newsInfo={newsInfo}/>
				</div>
				<div className="list">
					<NewsList newsList={newsList} />
				</div>
			</div>
		);
	}
}

export default BeforeOptimize;

