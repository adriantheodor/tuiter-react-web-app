import NavigationSidebar from '../home/NavigationSidebar/index.js';
import PostList from "./PostList";
import PostSummaryList from "../explore/PostSummaryList/index.js";
/*
import WhoToFollowListItem from "../WhoToFollowList/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
*/
/*import mainContent from "./main-content.js";*/

(function ($){
    $('#wd-explore').append(`
        <!--<h1 id="title">Explore Screen</h1>-->
        <ul id="some-list">
            <!--<li>Some Content</li>-->
        </ul>
        <div class="row mt-2">
            <div class="col-sm-2 col-md-2 col-xl-2 col-xxl-2" id="nav-side-bar">
                ${NavigationSidebar()}
            </div>
            <div class="col-sm-10 col-md-7 col-xl-7 col-xxl-6">
               ${PostList()}
            </div>
            <div class="col-md-3 col-xl-3 col-xxl-4">   
            ${PostSummaryList()}
            </div>
        </div>
`);
})($);