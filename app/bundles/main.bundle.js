webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(158);
	__webpack_require__(159);

	var React = __webpack_require__(2);
	// var $ = require('jquery')

	var HelloWorld = React.createClass({
		displayName: 'HelloWorld',

		render: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'header' },
					React.createElement(
						'h1',
						null,
						'gulp-webapp'
					)
				),
				React.createElement(
					'div',
					{ className: 'container' },
					React.createElement(
						'p',
						null,
						'hello world'
					)
				),
				React.createElement('div', { className: 'footer' })
			);
		}
	});

	React.render(React.createElement(HelloWorld, null), document.body);

/***/ },

/***/ 158:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 159:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});