const PostSummaryItem = (post) => { return(`
 <li class="list-group-item
                            ">

                    <a href="#"
                    class="text-decoration-none">

                    <div class="row">

                        <div class="col-8">


                            <div class="text-secondary">

                                ${post.topic}
                            </div>

                            <div class="fw-bolder
                                        wd-white-text">
                                ${post.userName}
                                

                                <i class="fa-solid
                                          fa-circle-check
                                          m-1">
                                </i>

                                <span class="text-secondary
                                             fw-normal">
                                     - ${post.time}
                                    
                                </span>

                            </div>

                            <div class="fw-bolder
                                        
                                        wd-white-text">
                                ${post.title}
                                

                            </div>
                            
                            <div class="fw-bolder
                                        text-light">
                                
                                

                            </div>

                        </div>

                        <div class="col-4">

                            <img class="float-end
                                        rounded-3
                                        wd-pic-hw
                                        wd-background-color-white"
                                 src=${post.image}
                                 >
                                 
                        </div>

                    </div>

                    </a>

                </li>
`); }
export default PostSummaryItem;