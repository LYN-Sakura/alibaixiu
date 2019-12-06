$.ajax({
	type: "get",
	url: '/categories',
	success: function(res) {
		$("#category").html(template("categoryTpl",{
			data:res
		}))
	}
})



$("#feature").on("change",function(){
	let file = this.files[0]
	
	var formData = new FormData()
	
	formData.append("cover",file)
	
	$.ajax({
		type:"post",
		url:"/upload",
		data:formData,
		processData:false,
		contentType:false,
		success:function(res){
			console.log(res)
		}
	})
	
})

