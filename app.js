//add tasks on press of the enter key
//remove text in the input box when enter key is pressed
//remove tasks on click

function addTask() {
  console.log("function has started running")
  var item = document.getElementById('input').value
  var ul = document.getElementById('list')
  var li = document.createElement('li')
  li.appendChild(document.createTextNode(item))
  ul.appendChild(li)
  document.getElementById('input').value=""
  li.onclick = removeItem
  console.log("function has finished runnin")
}

document.body.onkeyup = function(e){
  if(e.keyCode == 13){
    addTask()
  }
}

function removeItem(e) {
  e.target.parentElement.removeChild(e.target)
}
