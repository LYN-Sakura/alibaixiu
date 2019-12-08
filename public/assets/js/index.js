//todo
$.when(
	$.ajax({
		url: "/posts/count",
		type: "get"
	}),
	$.ajax({
		url: "/categories/count",
		type: "get"
	}),
	$.ajax({
		url: "/comments/count",
		type: "get"
	})

).done(function(r1, r2, r3) {
	$("#num").html(template("numTpl", {
		r1: r1[0],
		r2: r2[0],
		r3: r3[0]
	}))
})
