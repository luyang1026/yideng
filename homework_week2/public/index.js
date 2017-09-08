var btn = document.querySelector('#thumbup')
var text = document.querySelector('h1')
var lock = false
btn.onclick = function(){
  if (lock) return
  lock = true
  axios.get('/thumbup')
    .then(function(res){
      if (res.status == 200){
        lock = false
        text.innerHTML = res.data.total
      }
    })
}
