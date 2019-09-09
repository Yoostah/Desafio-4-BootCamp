import React, { Component } from 'react';
import Post from '../Post';
import './style.css';

class PostList extends Component {
  state = {
    new_post: {
      id: new Date() / 1000,
      author: {
        name: 'Thulio Guirelle Horta',
        avatar: 'user1.png'
      },
      date: new Date().toLocaleDateString("pt-BR", { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      content: '',
      comments: [],
    },
    posts: [
      {
        id: new Date() / 1000,
        author: {
          name: 'Julio Alcantara',
          avatar: 'user4.png'
        },
        date: new Date().toLocaleDateString("pt-BR", { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        content: 'Será que esse App Funciona??',
        comments: [
          {
            id: new Date() / 1000,
            author: {
              name: 'Diego Fernandes',
              avatar: 'user2.png'
            },
            content: "Sei não heim!"
          },
          {
            id: new Date() / 1000 + 1,
            author: {
              name: 'Bonieky Lacerda',
              avatar: 'user3.png'
            },
            content: "Dá um echo que vai..."
          }
        ],
      },
    ]
  };

  handleInputChange = e => {
    this.setState({
      new_post: Object.assign({}, this.state.new_post, { id: new Date() / 1000 }, { content: e.target.value }, { date: new Date().toLocaleDateString("pt-BR", { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }) })
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      posts: [...this.state.posts, this.state.new_post],
      new_post: Object.assign({}, this.state.new_post, { content: '' })
    });
  }

  handleDeletePost = (post) => {
    this.setState({ posts: this.state.posts.filter(p => p.id !== post) });
  }
  render() {
    return (
      <div className="PostList">
        <form onSubmit={this.handleSubmit}>
          <div className="textarea-container post">
            <textarea cols="3" rows="3" placeholder="Digite algo e clique em postar!" onChange={this.handleInputChange} value={this.state.new_post.content} ></textarea>
          </div>
          <button className="post" type="submit">Postar</button>
        </form>
        {
          this.state.posts.reverse().map(post => (post) ? <Post key={post.id} data={post} onDeletePost={() => this.handleDeletePost(post.id)} /> : '')
        }
      </div>
    );
  }
}

export default PostList;
