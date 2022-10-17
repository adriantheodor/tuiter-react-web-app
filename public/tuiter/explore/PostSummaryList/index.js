import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(` 
 
 

 
 
 
 <ul class="list-group">
 
 
 
  ${
        posts.map(postsa => {
            return(PostSummaryItem(postsa));
        }).join('')
    }
</ul> `);
}
export default PostSummaryList;