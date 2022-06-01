import React from 'react'


class Comments extends React.Component {
  constructor() {
    super();
    
    this.state = {
      showComments: false,
      comments: [
        {id: 1, author: "Kingsly", body: "very friendly carable Treatement"},
        {id: 2, author: "Praveen", body: "best ortho specialist"},
        {id: 3, author: "Philip", body: "sir i have some Sprain problems im outstair so i want to consult and some prescription"}
      ]
    };
  }
  
  render () {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show Comments';
    
    if (this.state.showComments) {
      buttonText = 'Hide Comments';
      commentNodes = <div className="comment-list">{comments}</div>;
    }
    
    return(
      <div className="comment-box">
        <h2 >Add a Comment!</h2>
        <CommentForm addComment={this._addComment.bind(this)}/>
        <button className="color fw-bold border-color font-secondary ms-2" id="comment-reveal" onClick={this._handleClick.bind(this)}>
          {buttonText}
        </button>
        <h3  className="font-secondary ms-2">Comments</h3>
        <h4  className="font-secondary ms-2">
          {this._getCommentsTitle(comments.length)}
        </h4>
        {commentNodes}
      </div>  
    );
  } // end render
  
  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
  }
  
  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }
  
  _getComments() {    
    return this.state.comments.map((comment) => { 
      return (
        <Comment 
          author={comment.author} 
          body={comment.body} 
          key={comment.id} />
      ); 
    });
  }
  
  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }
} // end CommentBox component

class CommentForm extends React.Component {
  render() {
    return (
      <form  onSubmit={this._handleSubmit.bind(this)}>
        <div  className="form-group">
          <input  className="required form-control input-block-level short-textarea" placeholder="Enter_name.." required ref={(input) => this._author = input}></input><br />
          <textarea  className="required form-control input-block-level short-textarea" placeholder="Comment_here.." rows="4" required ref={(textarea) => this._body = textarea}></textarea>
        </div>
        <div >
          <button className="button button-rounded" type="submit">Post Comment</button>
        </div>
      </form>
    );
  } // end render
  
  _handleSubmit(event) { 
    event.preventDefault();   // prevents page from reloading on submit
    let author = this._author;
    let body = this._body;
    this.props.addComment(author.value, body.value);
  }
} // end CommentForm component

class Comment extends React.Component {
  render () {
    return(
      <div className="card">
        <h4  className="card-header" >{this.props.author}</h4>
        <p  className="card-body">- {this.props.body}</p>
        {/* <div className="comment-footer">
          <a href="#" className="comment-footer-delete" onClick={this._deleteComment}>Delete Comment</a>
        </div> */}
      </div>
    );
  }
  _deleteComment() {
    // alert("-- DELETE Comment Functionality COMMING SOON...");
    return this.props.del(Comment.id);
  }
}



export default Comments;