import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
        <ul class="list-group mb-2">
            ${posts.map(post => {
                return(PostSummaryItem(post));
            }).join('')}
        </ul>
    `)
}

export default PostSummaryList;