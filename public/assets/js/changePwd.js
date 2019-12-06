$("#changePwd").on("submit",function(){
	let formData = serializeObj($(this))
	console.log(formData)
	// console.log(formData)
	$.ajax({
		url:"/users/password",
		type:"put",
		data:formData,
		success:function(res){
			location.href = "/admin/login.html"
		},
		error:function(res){
			console.log(res.message)
		}
	})
	return false
})