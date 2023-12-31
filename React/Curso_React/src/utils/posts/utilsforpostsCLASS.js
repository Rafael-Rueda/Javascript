const loadPosts = async (setStateFunction) => {
  const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos");

  const [posts, photos] = await Promise.all([postsResponse.json(), photosResponse.json()]);

  const postsAndPhotos = posts.map((post, index) => {
    return {
      ...post,
      cover: photos[index].url,
    };
  });

  setStateFunction({ allPosts: postsAndPhotos });
  slicePosts(setStateFunction, { pageCounter: 10, allPosts: postsAndPhotos });
};

const slicePosts = (setStateFunction, state) => {
  if (state.pageCounter < state.allPosts.length) {
    setStateFunction({
      disablePagination: false,
      inPagePosts: state.allPosts.slice(0, state.pageCounter),
    });
  } else {
    setStateFunction({ disablePagination: true });
  }
};

const handleLoadMore = (setStateFunction, prevState) => {
  setStateFunction(
    (prev) => ({
      pageCounter: prev.pageCounter + 10,
    }),
    () => {
      slicePosts(setStateFunction, { ...prevState, pageCounter: prevState.pageCounter + 10 });
    }
  );
};

// Search

const handleChangeSearchPost = (setStateFunction, state, e) => {
  setStateFunction({ search: e.target.value }, () => {
    if (state.search) {
      setStateFunction({ disablePagination: true });
    } else {
      setStateFunction({ disablePagination: false });
    }
  });
}

const searchPosts = (state, search) => {
  return state.allPosts.filter(post => {
    return (post.title).includes(search) || (post.body).includes(search);
  })
}

export { loadPosts, slicePosts, handleLoadMore, handleChangeSearchPost, searchPosts };
