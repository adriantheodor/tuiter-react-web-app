const NavigationSidebar = (active) => {

    if (active === 'home'){
        return(`
   <div class="list-group
                wd-background-color-black">
       <a class="list-group-item" href="/public">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
            
       <a class="list-group-item wd-blue-background" href="../../home/index.html">
       <i class="fa fa-home m-1 wd-blue-background">
                    </i> Home</a>
       
       <a class="list-group-item" href="/public">
       <i class="fa-sharp fa-solid fa-hashtag m-1"></i> Explore</a>
       
       <a class="list-group-item" href="/public">
       <i class="fa-solid fa-bell m-1"></i> Notifications</a>
       
       <a class="list-group-item" href="/public">
       <i class="fa fa-envelope m-1"></i> Messages</a>
       
       <a class="list-group-item" href="/public">
        <i class="fa-solid
                  fa-bookmark
                  m-1
                  ">
                    </i> Bookmarks</a>
       
       <a class="list-group-item" href="/public">
       <i class="fa-sharp fa-solid fa-list m-1"></i> Lists</a>
       
       <a class="list-group-item" href="/public">
       <i class="fa-sharp fa-solid fa-user m-1"></i></i> Profile</a>
       
       <a class="list-group-item" href="/public">
       <i class="fa-solid fa-ellipsis m-1"></i> More</a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
</div> `);
    } else if (active = 'explore'){
        return(`
   <div class="list-group
                wd-background-color-black">
       <a class="list-group-item" href="/public">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
            
       <a class="list-group-item" href="../../home/index.html">
       <i class="fa fa-home m-1">
                    </i> Home</a>
       
       <a class="list-group-item wd-blue-background" href="../../explore/ExploreScreen/index.html">
       <i class="fa-sharp fa-solid fa-hashtag m-1 wd-blue-background"></i> Explore</a>
       
       <a class="list-group-item" href="/public">
       <i class="fa-solid fa-bell m-1"></i> Notifications</a>
       
       <a class="list-group-item" href="/public">
       <i class="fa fa-envelope m-1"></i> Messages</a>
       
       <a class="list-group-item" href="/public">
        <i class="fa-solid
                  fa-bookmark
                  m-1
                  ">
                    </i> Bookmarks</a>
       
       <a class="list-group-item" href="/public">
       <i class="fa-sharp fa-solid fa-list m-1"></i> Lists</a>
       
       <a class="list-group-item" href="/public">
       <i class="fa-sharp fa-solid fa-user m-1"></i></i> Profile</a>
       
       <a class="list-group-item" href="/public">
       <i class="fa-solid fa-ellipsis m-1"></i> More</a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
</div> `);
    }







}
export default NavigationSidebar;