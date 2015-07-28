webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var CommentBox = __webpack_require__(158);
	var normalizeCss = __webpack_require__(159);
	var css = __webpack_require__(163);
	// alert(1)
	React.render(React.createElement(CommentBox, { url: "data.json", pollInterval: 2000 }), document.getElementById('container'));

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var $ = __webpack_require__(1);
	var Comment = React.createClass({
		displayName: 'Comment',

		render: function render() {
			// var rawMarkup =  marked(this.props.children.toString(),{sanitize : true});
			return React.createElement(
				'div',
				{ className: "comment" },
				React.createElement(
					'h2',
					{ className: "commentAuthor" },
					this.props.author
				),
				React.createElement('div', { className: "commentText", dangerouslySetInnerHTML: { __html: this.props.children.toString() } })
			);
		}
	});

	var data = [{ author: "Pete Hunt", text: "This is one comment" }, { author: "Jordan Walke", text: "This is *another* comment" }];

	var CommentList = React.createClass({
		displayName: 'CommentList',

		render: function render() {
			var commentNodes = this.props.data.map(function (comment) {
				return React.createElement(
					Comment,
					{ author: comment.author },
					comment.text
				);
			});
			return React.createElement(
				'div',
				{ className: "commentList" },
				commentNodes
			);
		}
	});

	var CommentForm = React.createClass({
		displayName: 'CommentForm',

		handleSubmit: function handleSubmit(e) {
			e.preventDefault();
			var author = React.findDOMNode(this.refs.author).value.trim();
			var text = React.findDOMNode(this.refs.text).value.trim();
			if (!author || !text) {
				return;
			};
			this.props.onCommentSubmit({ author: author, text: text });
			React.findDOMNode(this.refs.author).value = '';
			React.findDOMNode(this.refs.text).value = '';
			// return false;
		},
		render: function render() {
			return React.createElement(
				'form',
				{ className: "commentForm", onSubmit: this.handleSubmit },
				React.createElement('input', { type: "text", placeholder: "Your name", ref: "author" }),
				React.createElement('br', null),
				React.createElement('textarea', { cols: "30", rows: "10", placeholder: "Say something...", ref: "text" }),
				React.createElement('br', null),
				React.createElement(
					'button',
					{ type: "submit" },
					'提交'
				)
			);
		}
	});

	var CommentBox = React.createClass({
		displayName: 'CommentBox',

		getInitialState: function getInitialState() {
			return { data: [] };
		},
		loadData: function loadData() {
			var self = this;
			$.getJSON(this.props.url, function (data) {
				self.setState({ data: data });
			});
		},
		componentDidMount: function componentDidMount() {
			this.loadData();
			// setInterval(this.loadData,this.props.pollInterval);
		},
		handleCommentSubmit: function handleCommentSubmit(obj) {
			this.setState(function (preState, nextState) {
				preState.data.push(obj);
				this.setState(preState);
			});
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: "commentBox" },
				React.createElement(
					'h1',
					null,
					'Comment Box'
				),
				React.createElement(CommentList, { data: this.state.data }),
				React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
			);
		}
	});

	module.exports = CommentBox;

/***/ },

/***/ 159:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 163:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});