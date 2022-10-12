const WhoToFollowListItem = (who) => {
    const {avatarIcon, userName, handle} = who;
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" src=${avatarIcon} width="50px" height="50px"/>
                </div>
                <div class="col-7">
                     <div class="fw-bolder">${userName} <i class="fas fa-check-circle"></i></div>
                     <div class="wd-following-id">@${handle}</div>
                </div>
                <div class="col-3 my-auto">
                     <button class="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div> 
        </li>
    `);
};

export default WhoToFollowListItem;