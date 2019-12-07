$.ajax({
	type: "get",
	url: '/categories',
	success: function(res) {
		$("#category").html(template("categoryTpl", {
			data: res
		}))
	}
})

$("#feature").on("change", function() {
	let file = this.files[0]
	var formData = new FormData()

	formData.append("cover", file)

	$.ajax({
		type: "post",
		url: "/upload",
		data: formData,
		processData: false,
		contentType: false,
		success: function(res) {
			$("#hide").val(res[0].cover)
		}
	})
})

$("#articleAdd").on("submit", function() {
	let formData = serializeObj($(this))
	$.ajax({
		url: "/posts",
		type: "post",
		data: formData,
		success: function(res) {
			location.href = "/admin/posts.html"
		}
	}) 
	return false;
})