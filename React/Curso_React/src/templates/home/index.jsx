import './styles.css';
import { Component, useEffect, useState } from 'react';
import Post from '../../Components/Post';
// import { loadPosts, handleLoadMore, handleChangeSearchPost, searchPosts } from '../../utils/posts/utilsforpostsCLASS';
import { loadPosts, handleLoadMore, handleChangeSearchPost, searchPosts } from '../../utils/posts/utilsforpostsFUNCTION';

class Home extends (Component) {

  state = {
    allPosts: [],
    inPagePosts: [],
    pageCounter: 10,
    disablePagination: false,
    search: '',
  };

  componentDidMount() {
    loadPosts(this.setState.bind(this));
  }

  render() {

    const { inPagePosts, disablePagination, search } = this.state;

    return (
      <>
        <input placeholder="Type your search" className="search" type="search" name="" id="" onChange={(e) => handleChangeSearchPost(this.setState.bind(this), this.state, e)} value={search} />

        <div className="posts">
          <Post posts={search ? searchPosts(this.state, search) : inPagePosts} />
        </div>

        <button disabled={disablePagination} onClick={() => handleLoadMore(this.setState.bind(this), this.state)}>
          Load more
        </button>
      </>
    )
  };
}


function Home2() {

  const [allPosts, setAllPosts] = useState([]);
  const [inPagePosts, setInPagePosts] = useState([]);
  const [pageCounter, setPageCounter] = useState(10);
  const [disablePagination, setDisablePagination] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadPosts(setAllPosts, setDisablePagination, setInPagePosts);
  }, []);

  return (
    <>
      <input placeholder="Type your search" className="search" type="search" name="" id="" onChange={(e) => handleChangeSearchPost(setSearch, setDisablePagination, search, e)} value={search} />

      <div className="posts">
        <Post posts={search ? searchPosts(allPosts, search) : inPagePosts} />
      </div>

      <button disabled={disablePagination} onClick={() => handleLoadMore(setPageCounter, setDisablePagination, setInPagePosts, allPosts, pageCounter)}>
        Load more
      </button>
    </>
  );
}

export { Home, Home2 };
