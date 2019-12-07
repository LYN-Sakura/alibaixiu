$.ajax({
	url:"/posts",
	type:"get",
	success:function(res){
		console.log(res)
		$("#tbody").html(template("articleListTpl",{data:res.records}))
	}
})
 