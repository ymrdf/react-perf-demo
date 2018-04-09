import React, { PureComponent } from "react";
import propTypes from "prop-types";
import { List, Card } from "antd";

const data = [
	{
		title: "Origin",
		value:"origin"
	},
	{
		title: "Number",
		value: "number"
	}
];

class NewsInfo extends PureComponent{
	render() {
		const { newsInfo } = this.props;
		return (
			<div className="news-info">
				<List
					grid={{ gutter: 16, column: 4 }}
					dataSource={data}
					size='small'
					renderItem={item => (
						<List.Item>
							<Card title={item.title}>{newsInfo[item.value]}</Card>
						</List.Item>
					)}
				/>
			</div>
		);
	}
}

NewsInfo.propTypes = {
	newsInfo: propTypes.object.isRequired
};

export default NewsInfo;