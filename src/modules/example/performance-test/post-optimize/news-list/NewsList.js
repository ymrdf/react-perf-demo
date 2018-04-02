import React, { PureComponent } from "react";

import NewsListItem from "./NewsListItem";

class NewsList extends PureComponent{
	render() {
		return (
			<div className="news-list">
				<NewsListItem />
			</div>
		);
	}
}

export default NewsList;
