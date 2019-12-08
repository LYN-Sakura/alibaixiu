$("#logo").on("change",function(){
	let formData = new FormData()
	formData.append("logo",this.files[0])
	
	$.ajax({
		url:"/upload",
		type:"post",
		processData:false,
		contentType:false,
		data:formData,
		success:function(res){
			$("#site_logo").val(res[0].logo)
			$("#logoImg").prop("src",res[0].logo)
		}
	})
})


$("#formUse").on("submit",function(){
	
})