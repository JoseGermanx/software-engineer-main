function buildComment(p1, p2) {
  const header = document.createElement("h2")
  header.innerText = p1.value
    
  const paragraph = document.createElement("p")
  paragraph.innerText = p2.value
  
  const comment = document.createElement("article")
  comment.append(header, paragraph)
  
  const commentContainer = document.querySelector("#comments")
  commentContainer.append(comment)
}

function writeComment() {
  const name = document.querySelector('#nameInput')
  const message = document.querySelector('#messageInput')
  buildComment(name, message)
}

