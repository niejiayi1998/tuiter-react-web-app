const PostSummaryItem = (post) => {
    const {topic, userName, time, title, image, tweets} = post
    return (`
        <li class="list-group-item">
              <div class="row">
                <div class="col-10">
                  <div class="text-secondary">${topic}</div>
                  <div class="fw-bolder">
                    ${userName} <i class="fas fa-check-circle"></i>
                    <span class="text-secondary fw-normal"> - ${time}</span>
                  </div>
                  <div class="fw-bolder pe-2">
                    ${title}
                  </div>
                  ${tweets ? `<div class="text-secondary">${tweets} Tweets</div>` : ""}
                </div>
                <div class="col-2">
                  <img class="float-end rounded" src=${image} width="100px" height="100px"/>
                </div>
              </div>
        </li>
    `)
}

export default PostSummaryItem;