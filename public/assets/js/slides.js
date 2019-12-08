//显示轮播图列表
loadImg()

function loadImg() {
	$.ajax({
		url: "/slides",
		type: "get",
		success: function(res) {
			console.log(res)
		}
	})
}


$("#image").on("change", function() {
	let formData = new FormData()
	formData.append("img", this.files[0])

	$.ajax({
		url: "/upload",
		type: "post",
		data: formData,
		processData: false,
		contentType: false,
		success: function(res) {
			$("#img").prop({
				src:res[0].img
			})
			$("#img").css({
				display:"block"
			})
			$("#hide").val(res[0].img)
		}
	}) 
})
