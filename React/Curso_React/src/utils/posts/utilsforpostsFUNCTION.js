const loadPosts = async (setAllPosts, setDisablePagination, setInPagePosts) => {
    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = await fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, photos] = await Promise.all([postsResponse.json(), photosResponse.json()]);

    const postsAndPhotos = posts.map((post, index) => {
        return {
            ...post,
            cover: photos[index].url,
        };
    });

    setAllPosts(postsAndPhotos);
    slicePosts(setDisablePagination, setInPagePosts, postsAndPhotos, 10);
};

const slicePosts = (setDisablePagination, setInPagePosts, allPosts, pageCounter) => {
    if (pageCounter < allPosts.length) {
        setDisablePagination(false);
        setInPagePosts(allPosts.slice(0, pageCounter));
    } else {
        setDisablePagination(true);
    }
};

const handleLoadMore = (setPageCounter, setDisablePagination, setInPagePosts, allPosts, pageCounter) => {
    setPageCounter((prev) => {
        return prev + 10;
    })
    
    slicePosts(setDisablePagination, setInPagePosts, allPosts, pageCounter + 10);
    // Usei segundo argumento de callback para esse setState
};

// Search

const handleChangeSearchPost = (setSearch, setDisablePagination, search, e) => {
    setSearch(e.target.value)

    if (search) {
        setDisablePagination(true);
    } else {
        setDisablePagination(false);
    }
    // Usei segundo argumento de callback para esse setState
}

const searchPosts = (allPosts, search) => {
    return allPosts.filter(post => {
        return (post.title).includes(search) || (post.body).includes(search);
    })
}

export { loadPosts, slicePosts, handleLoadMore, handleChangeSearchPost, searchPosts };
