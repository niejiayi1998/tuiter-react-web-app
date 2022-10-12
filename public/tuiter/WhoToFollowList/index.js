import whos from "./who.js"
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
        <li class="list-group-item">Who to follow</li>
            ${whos.map(who => {
                return(WhoToFollowListItem(who));
            }).join('')}
        </ul>
    `)
}

export default WhoToFollowList;