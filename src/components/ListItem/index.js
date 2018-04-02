import React, { PureComponent } from "react";

class ListItem extends PureComponent{
	render() {
		return (
			<div class="list-item">
				<div class="list-item-content">
					<h4 class="list-item-title">
						<a href="https://ant.design">item one</a>
					</h4>
					<div class="list-item-description">
								Ant Design, a design language for background applications, is refined by Ant UED Team
					</div>
				</div>
				<ul class="list-item-action">
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

