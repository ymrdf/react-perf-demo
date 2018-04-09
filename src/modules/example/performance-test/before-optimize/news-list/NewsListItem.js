import React, { Component } from "react";
import propTypes from "prop-types";

import "./style.css";

class ListItem extends Component{
	render() {
		const { title, description } = this.props;
		return (
			<div className="list-item">
				<div className="list-item-content">
					<h4 className="list-item-title">
						<a href="https://ant.design">{title}</a>
					</h4>
					<div className="list-item-description">
						{description}
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

ListItem.propTypes = {
	title: propTypes.string.isRequired,
	description: propTypes.string.isRequired
};

export default ListItem;