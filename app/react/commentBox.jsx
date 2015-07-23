var React = require('react');
var $ = require('jquery');
var Comment = React.createClass({
	render : function(){
		// var rawMarkup =  marked(this.props.children.toString(),{sanitize : true});
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<div className="commentText" dangerouslySetInnerHTML={{__html : this.props.children.toString()}} />
			</div>
		)
	}
});

var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentList = React.createClass({
	render : function  () {
		var commentNodes = this.props.data.map(function(comment){
			return (
				<Comment author={comment.author}>
					{comment.text}
				</Comment>
			)
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});

var CommentForm = React.createClass({
	handleSubmit : function  (e) {
		e.preventDefault();
		var author = React.findDOMNode(this.refs.author).value.trim();
		var text = React.findDOMNode(this.refs.text).value.trim();
		if (!author || !text) {
			return;
		};
		this.props.onCommentSubmit({author : author , text : text});
		React.findDOMNode(this.refs.author).value = '';
	    React.findDOMNode(this.refs.text).value = '';
	    // return false;
	},
	render : function  () {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Your name" ref="author" />
				<br/>
				<textarea cols="30" rows="10" placeholder="Say something..." ref="text"></textarea>
		        <br/>
		        <button type="submit">提交</button>
			</form>
		);
	}
});


var CommentBox = React.createClass({

	getInitialState : function(){
		return {data : []};
	},
	loadData : function(){
		var self = this;
		$.getJSON(this.props.url,function(data){
			self.setState({data : data})
		});

	},
	componentDidMount : function(){
		this.loadData();
		// setInterval(this.loadData,this.props.pollInterval);
	},
	handleCommentSubmit : function  (obj) {
		this.setState(function (preState,nextState) {
			preState.data.push(obj)
			this.setState(preState);
		})
	},
	render : function  () {
		return (
			<div className="commentBox">
				<h1>Comment Box</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
});

module.exports = CommentBox