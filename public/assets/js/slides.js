//显示轮播图列表
loadImg()

function loadImg() {
	$.ajax({
		url: "/slides",
		type: "get",
		success: function(res) {
			$("#tbody").html(template("listTpl",{
				data:res
			}))
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

$("#addImg").on("submit",function(){
	let formData = serializeObj($(this))
	$.ajax({
		url:"/slides",
		type:"post",
		data:formData,
		success:function(res){
			loadImg()
		}
	})
	return false
})

//事件委托
$("#tbody").on("click",".delete",function(){
	if(confirm("您确定要删除吗")){
		let id = $(this).data("id")
		$.ajax({
			url:"/slides/"+id,
			type:"delete",
			success:function(res){
				loadImg()
			}
		})
	}
})