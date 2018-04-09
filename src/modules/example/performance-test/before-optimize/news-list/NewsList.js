import React, { Component } from "react";
import propTypes from "prop-types";

import NewsListItem from "./NewsListItem";

import "./style.css";

class NewsList extends Component{
	render() {
		const { newsList } = this.props;
		return (
			<div className="news-list">
				{
					newsList.map( item => <NewsListItem key={item.title} title={item.title} description={item.content} />)
				}
			</div>
		);
	}
}

NewsList.propTypes = {
	newsList: propTypes.array.isRequired
};

export default NewsList;
