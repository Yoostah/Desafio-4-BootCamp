import React, { Component } from 'react';
import './style.css';

class Comment extends Component {

  render() {
    return (
      <div className="comentario">
        <img src={require(`../../assets/${this.props.comments.author.avatar}`)} alt="user2" />
        <span><strong>{this.props.comments.author.name}</strong>{this.props.comments.content}</span>
        <p onClick={() => this.props.onDeleteComment(this.props.comments.id)}>X</p>
      </div>
    );
  }
}

export default Comment;