import React, { PureComponent } from "react";

import "./style.css";

class ListItem extends PureComponent{
	render() {
		return (
			<div className="list-item">
				<div className="list-item-content">
					<h4 className="list-item-title">
						<a href="https://ant.design">item one</a>
					</h4>
					<div className="list-item-description">
								Ant Design, a design language for background applications, is refined by Ant UED Team
					</div>
				</div>
				<ul className="list-item-action">
					<li>
						<a>edit</a>
					</li>
					<li>
						<a>more</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default ListItem;