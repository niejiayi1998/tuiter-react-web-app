const PostItem = (post) => {
    const {username, handle, avatar, time, message, image, title, body, link, comment, retweet, like} = post;

    return (`
        <li class="list-group-item bg-black">
            <div class="row">
                <div class="col-1">
                    <img class="rounded-circle" src=${avatar} width="50px" height="50px"/>
                </div>
                
                <div class="col-11 ps-4">
                    <div class="fw-bolder">
                        ${username} <i class="fas fa-check-circle"></i>
                        <span class="text-secondary fw-normal">@${handle} · ${time}</span>
                    </div>
                    
                    <div class="mb-2">${message}</div>
                    
                    <div class="border border-secondary rounded">
                        <img class="rounded" src=${image} width="100%"/>
                        
                        ${title ? 
                        `<div class="border-top border-secondary ps-2 pt-2">${title}</div>` 
                        : ""}
                        
                        ${body ?
                            `<div class="text-secondary ps-2">${body}</div>`
                        : ""}
                        
                        ${link ?
                            `<div class="text-secondary ps-2 pb-2">
                                <i class=\"fa-solid fa-link\"></i> ${link}</div>`
                        : ""}
                        
                    </div>
                    
                    <div class="row text-secondary my-3">
                        <div class="col">
                            <i class="fa-regular fa-comment pe-3"></i>${comment}
                        </div>
                        <div class="col">
                            <i class="fa-solid fa-retweet pe-3"></i>${retweet}
                        </div>
                        <div class="col">
                            <i class="fa-regular fa-heart pe-3"></i>${like}
                        </div>
                        <div class="col">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        </div>
                    </div>
                </div>
            </div>
            
        </li>
    `)
}

export default PostItem;