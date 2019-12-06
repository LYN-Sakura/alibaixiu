$("#addCategory").on("submit", function() {

	let formData = $(this).serialize()

	$.ajax({
		type: "post",
		url: "/categories",
		data: formData,
		success: function(res) {
			location.reload()
		}
	})
	return false;
})

$.ajax({
	type: "get",
	url: '/categories',
	success: function(res) {
		$("#categoryBox").html(template("categoryTpl", {
			data: res
		}))
	}
})


$("#categoryBox").on("click", ".edit", function() {
	let id = $(this).attr("data-id")
})

//删除
$("#categoryBox").on("click", ".delete", function() {
	if (confirm("您真的要删除吗?")) {
		let id = $(this).attr("data-id")
		$.ajax({
			type:"delete",
			url:"/categories/"+id,
			success:function(res){
				location.reload()
			}
		})
	} else {

	}
})
