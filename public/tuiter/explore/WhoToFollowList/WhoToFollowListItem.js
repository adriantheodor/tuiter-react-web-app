const WhoToFollowListItem = (who) => { return(`
<li class="list-group-item"> 
    <div class="row">
        <div class="col-2
                    float-start
                    ">
        <img class="rounded-circle
                    float-end"

                                 src=${who.avatarIcon}

                                 width="50"

                                 height="50">
 
 </div>
 
 <div class="float-start col-6">
    <div class="fw-bolder wd-white-text float-start">
    <span>
        ${who.userName}
        <i class="fa-sharp
                                          fa-solid
                                          fa-circle-check
                                          ">
                                </i>
                                </span>
    </div>
    
    
   <div class="wd-white-text
               float-start
               col-12">
       ${who.handle}
  </div>
  
  
 </div>
 <div class="fw-bolder
             col-4
             float-end">

     <!--<button style="background-color: white"
             class=" btn 
                     btn-primary 
                     w-10 
                     mt-1 
                     rounded-pill 
                     float-end">

                           <span
                                class="wd-black-text
                                       fw-bolder">
                                Follow
                                </span>

                            </button>-->
                            
                            <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill float-end">
        Follow</a>
                            
                            

                        </div>
 
 </div>
</li>
`); }
export default WhoToFollowListItem;