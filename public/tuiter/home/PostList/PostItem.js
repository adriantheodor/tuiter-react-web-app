const PostItem = (post) => { return(`
 <li class="list-group-item
            wd-background-color-black">
     <a href="#"
        class="text-decoration-none">
        <div class="row">
            <div class="col-1">
            <img src="${post.avatar}" width="50px" height="50px" class="rounded-circle">
            </div>
            
            <div class="col-9
                        m-1
                        fw-bolder
                        ">
                <span class="wd-color-text">
                ${post.userName}
                
                <i class="fa-sharp
                          fa-solid
                          m-1
                          fa-circle-check"></i>
                          
                <span class="text-secondary
                fw-normal">
                ${post.handle}
                
                ${post.time}
                </span>
                </span>
                <div class="wd-white-text
                            fw-normal
                            font"> ${post.tweet}
                </div>
               
            </div>
            <div class="col-1
            float-end">
            <i class="fa-solid fa-ellipsis float-end text-secondary"></i>
            </div>
        </div>
        
 <div class="row float-end border-light">
        <div class="col-1 ">
        </div>
        <div>
        <img src=${post.image} class="col-10
                                      rounded-5
                                      border-light
                                      float-end">
                                      <div></div>
        
        </div>
</div>
<div class="row"> 
<div class="col-1"></div>
<span class="col-11 text-secondary">
<span class="col-3 m-5">
<i class="fa-regular fa-comment"></i>
${post.comments}
</span>

<span class="col-3 m-5">
<i class="fa-solid fa-retweet"></i>
${post.tweets}
</span>

<span class="col-3 m-5">
<i class="fa-regular fa-heart"></i>
${post.likes}
</span>

<span class="col-3 m-5">
<i class="fa-solid fa-arrow-up-from-bracket"></i>

</span>
</span>

</div>
     </a>
 </li>
`); }
export default PostItem;