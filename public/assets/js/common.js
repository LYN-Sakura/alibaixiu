$("#logout").on("click", function() {
	let isConfirm = confirm("您真的要退出吗")
	if (isConfirm) {
		$.ajax({
			type: "post",
			url: "/logout",
			success: function() {
				location.href = "/admin/login.html"
			},
			error: function() {
				alert("退出失败")
			}
		})
	}
})
$.ajax({
	url:"/users/"+userId,
	type:"get",
	success:function(res){
		$("#user").html(template("userTpl",res))
	}
})