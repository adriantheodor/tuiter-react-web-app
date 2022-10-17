import PostSummaryList from "../PostSummaryList";
const ExploreComponent = () => { return(`

 
 <!--Search Row with Settings Cog-->
            <div class="row
                        align-middle
                        mb-2">
                <!--Search Bar Area-->
                <div class="col-10">
                    <!--Search Input Field-->
                    <div class="position-relative">
                        <input class="form-control
                                      rounded-pill
                                      align-middle
                                      ps-5"

                               placeholder="Search Twitter"/>

                        <i class="position-absolute
                                  wd-search-tuiter
                                  align-middle
                                  wd-color-text
                                  fas
                                  fa-search">
                        </i>
                    </div>
                </div>

                <div class="col-2
                            align-middle
                            float-end">

                    <a href="explore-settings.html"
                        class="float-end">

                        <i class="fa-solid
                                  fa-gear
                                  wd-blue-text
                                  fa-2x
                                  align-middle">
                        </i>
                    </a>

                </div>
            </div>

            <!--Nav Tabs-->
            <ul class="nav
                       nav-tabs
                       
                       col-12
                       mt-1">

                <li class="nav-item
                           wd-selected-tab
                           wd-rounded-top">

                    <a class="nav-link
                              wd-selected-tab"
                       href="for-you.html">
                        <span class="wd-selected-tab">
                        For You
                        </span>
                    </a>

                </li>

                <li class="nav-item">

                    <a class="nav-link
                              col-2"
                       href="trending.html">
                        <span class="wd-unselected-tab">
                        Trending
                            </span>
                    </a>

                </li>

                <li class="nav-item">

                    <a class="nav-link
                              col-2"
                       href="news.html">
                        <span class="wd-unselected-tab">
                        News
                        </span>
                    </a>

                </li>

                <li class="nav-item">

                    <a class="nav-link
                              col-2"
                       href="sports.html"
                       tabindex="-1">
                        <span class="wd-unselected-tab">
                        Sports
                            </span>
                    </a>

                </li>

                <li class="nav-item
                            ">

                    <a class="nav-link
                              col-2
                              "
                       href="entertainment.html"
                       tabindex="-1">
                        <span class="wd-unselected-tab
                        wd-white-text">
                        Entertainment
                            </span>
                    </a>
                </li>
            </ul>

            <!--Big Starship Post-->
            <div class="position-relative">

                <a href="#">

                <img src="../Starship-Mk1-Day.jpeg"
                     width="100%"/>


                <h1 class="position-absolute
                           bottom-0
                           mb-2
                           ms-2
                           left-0
                           text-white">
                    SpaceX's Starship
                </h1>

                </a>

            </div>
${PostSummaryList()} `);
}
export default ExploreComponent;