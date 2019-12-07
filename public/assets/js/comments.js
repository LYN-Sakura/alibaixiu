loadComment()

$("#page").on("click", "a", function() {
	let page = $(this).data("page")
	loadComment(page)
	// console.log()
})


function loadComment(page) {
	$.ajax({
		url: "/comments",
		type: "get",
		data: {
			page: page || 1
		},
		success: function(res) {
			console.log(res)
			$("#tbody").html(template("pinlunTpl", res))
			$("#page").html(template("pageTpl", res))
		}
	})
}
