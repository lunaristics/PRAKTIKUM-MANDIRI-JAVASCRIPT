const login = document.querySelector('button')

login.onclick = function(){
	let username = document.querySelector('input[type=username]').value
	let password = document.querySelector('input[type=password]').value

	if (username == "ahmad2017" && password == "integrity") {
		alert('Login berhasil')
		window.location.href='berhasil.html'
	} else {
		alert('Login gagal')
	}
}