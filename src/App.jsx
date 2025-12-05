import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';
import { UserInfo } from './components/UserInfo/UserInfo';
import { CommentList } from './components/CommentList/CommentList';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList postsFromServer={postsFromServer} />
    <CommentList commentsFromServer={commentsFromServer} />
    <UserInfo usersFromServer={usersFromServer} />
  </section>
);
