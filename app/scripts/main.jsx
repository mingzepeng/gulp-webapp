require('../styles/common.css')
require('../styles/main.css')

var React = require('react')
// var $ = require('jquery')

var HelloWorld = React.createClass({
	render : function () {
		return (
			<div class="header">
				<h1>gulp-webapp</h1>
			</div>
			<div class="container">
				<p>hello world</p>
   			</div>
			<div class="footer"></div>
		);
	}
})


React.render(<HelloWorld />,document.body)