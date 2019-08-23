import { FETCH_POSTS, NEW_POST } from "./types";

export function fetchPosts() {
  return function(dispatch) {
    console.log("Fetching 1");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      );
  };
}
