import React from "react";
import PostOptimize from "./post-optimize";
import BeforeOptimize from "./before-optimize";

import "./style.css";

const PerformanceTest = () => (
	<div className="performance-test">
		<div className="program-ui" >
			<BeforeOptimize />
		</div>
		<div className="program-ui" >
			<PostOptimize />
		</div>
	</div>
);

export default PerformanceTest;