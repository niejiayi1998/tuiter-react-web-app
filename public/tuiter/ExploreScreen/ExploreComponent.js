import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11">
                    <div class="position-relative">
                        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter" />
                        <span class="position-absolute text-secondary" style="bottom: 7px; left: 10px"><i class="fas fa-search"></i></span>
                    </div>
                </div>
                <div class="col-1 m-auto">
                    <i class="fa-solid fa-gear fa-2x text-primary"></i>
                </div>
           </div>
           
           <ul class="nav my-2 nav-tabs">
               <li class="nav-item">
                  <a class="nav-link bg-primary" aria-current="page" href="#">For you</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Sports</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link d-none d-md-block">Entertainment</a>
                </li>
           </ul>
           
           <div class="position-relative">
               <img class="mb-2" src="../../images/spacex-starship.jpg" width="100%" />
               <h2 class="position-absolute bottom-0 left-0 ps-1">SpaceX's Starship</h2>
           </div>
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
