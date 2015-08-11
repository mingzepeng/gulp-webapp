require('../styles/common.css')
require('../styles/main.css')

var React = require('react')
// var $ = require('jquery')

var HelloWorld = React.createClass({
	render : function () {
		return (
			<div>
				<div className="header">
					<h1>gulp-webapp</h1>
				</div>
				<div className="container">
					<p>hello world</p>
	   			</div>
				<div className="footer"></div>
			</div>
		);
	}
})


React.render(<HelloWorld />,document.body)