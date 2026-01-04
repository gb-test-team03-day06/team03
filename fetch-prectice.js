async function getPosts() {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts`
        );
        const posts = await response.json();
        return posts;
    } catch (err) {
        console.error("Error:", err);
        throw err;
    }
}

(async () => {
    const posts = await getPosts();
    posts.forEach((post) => console.log(post));
})();
