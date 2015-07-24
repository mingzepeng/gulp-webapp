var React = require('react');
var CommentBox = require('./commentBox.jsx');
var normalizeCss = require('normalize.css/normalize.css');
var css = require('./main.css');
 // alert(1)
React.render(
    <CommentBox url="data.json" pollInterval={2000} />,	
    document.getElementById('container')
); 