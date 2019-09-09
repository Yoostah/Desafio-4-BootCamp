import React, { Component } from 'react';
import Comment from '../Comment';
import './style.css';


class Post extends Component {
  static defaultProps = {
    comments: {
      id: new Date() / 1000,
      author: {
        name: 'Thulio Guirelle Horta',
        avatar: 'user1.png'
      },
      content: ""
    }
  }
  state = {
    new_comment: {
      id: new Date() / 1000,
      author: {
        name: 'Thulio Guirelle Horta',
        avatar: 'user1.png'
      },
      content: ""
    },
    comments: this.props.data.comments
  };

  handleInputChange = e => {
    this.setState({
      new_comment: Object.assign({}, this.state.new_comment, { content: e.target.value }, { id: new Date() / 1000 })
    });

  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      comments: [...this.state.comments, this.state.new_comment],
      new_comment: Object.assign({}, this.state.new_comment, { content: '' })
    });
  }

  handleDeleteComments = (comment) => {
    this.setState({ comments: this.state.comments.filter(c => c.id !== comment) });
  }

  render() {
    return (
      <div className="postagem" id={this.props.data.id} >
        <div className="Post">
          <div className="left">
            <img src={require(`../../assets/${this.props.data.author.avatar}`)} alt="user1" />
            <div className="profile">
              <span className="name">{this.props.data.author.name}</span>
              <p className="data_post">{this.props.data.date}</p>
            </div>
          </div>
          <div className="right">
            <span onClick={() => this.props.onDeletePost(this.props.data.id)}>X</span>
          </div>
        </div>
        <div className="post_content">
          {this.props.data.content}
        </div>
        <div className="comentarios">
          {
            this.state.comments.map(comment => <Comment key={comment.id} comments={comment} onDeleteComment={() => this.handleDeleteComments(comment.id)} />)
          }

        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="textarea-container">
            <textarea cols="3" rows="5" placeholder="Comentar..." onChange={this.handleInputChange} value={this.state.new_comment.content}></textarea>
          </div>
          <button className="comment_form" type="submit">Comentar</button>
        </form>

      </div >
    );
  }
}

export default Post;
