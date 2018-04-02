import React, { PureComponent } from "react";
import NewsList from "./news-list";

class PostOptimize extends PureComponent{
	render() {
		return (
			<div className="optimize">
				<NewsList />
			</div>
		);
	}
}

export default PostOptimize;

