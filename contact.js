
$(document).ready(function() {
  $('.submit').click(function(e) {

    var name = $('.name').val()
    var email = $('.email').val()
    var message = $('.message').val()
    var status = $('.error')
    status.empty()

    if(!name.length > 0){ // !name.match(/^[a-z]+ [a-z]+$/i) tam isim için hiç bir regex çalışmıyor
      e.preventDefault()
      status.append('<div>İsim boş bırakılamaz.</div>')
    }

    if(!email.includes('@') && !email.includes('.')){
      e.preventDefault()
      status.append("<div>Email '@' ve '.' karakteri içermeli. </div>")
    }

    if(!message.length > 0){
      e.preventDefault()
      status.append('<div>Mesaj boş bırakılamaz.</div>')
    }
  })
})