import who from "./who.js"
import whoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(` <ul class="list-group">
 
 <a href="#"
                   class="list-group-item
                          list-group-item-action
                          fw-bolder
                        wd-white-text">

                    Who to Follow

                </a>
 
  ${
        who.map(whom => {
            return(whoToFollowListItem(whom));
        }).join('')
    }
</ul> `);
}
export default WhoToFollowList;