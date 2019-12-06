//添加用户
$("#userForm").on("submit", function(e) {

	let formData = serializeObj($(this))
	if (formData.id) {
		$.ajax({
			type: "put",
			url: "/users/" + formData.id,
			data: formData,
			success: function(res) {
				loadUser()
				$("#userForm").html(template("lowTpl", {}))
			},
			error: function(err) {
				console.log(err.message)
			}
		})
	} else {
		$.ajax({
			type: "post",
			url: "/users",
			data: formData,
			success: function(res) {
				loadUser()
				$("#userForm").html(template("lowTpl", {}))
			},
			error: function(res) {
				console.log("操作失败", res.message)
			}
		})
	}
	return false;
})

//修改用户
$("#tbody").on("click", ".edit", function() {
	let id = $(this).attr("data-id")
	$.ajax({
		type: "put",
		url: "/users/" + id,
		success: function(res) {
			$("#userForm").html(template("changeTpl", res))
		}
	})
})



// 上传文件
$('#userForm').on("change", "#avatar", function() {
	// console.log(this.files[0])
	let formData = new FormData()
	formData.append("avatar", this.files[0])
	//开始发送请求
	$.ajax({
		type: "post",
		url: "/upload",
		data: formData,
		//告诉$.ajax方法不要解析请求参数
		processData: false,
		// 告诉$.ajax方法不要设置请求参数类型
		contentType: false,
		success: function(res) {
			let url = res[0].avatar
			$("#preview").attr("src", url)
			// 设置隐藏域
			$('#hide').val(url)
		}
	})

})



//读取用户列表
function loadUser() {
	$.ajax({
		type: "get",
		url: "/users",
		success: function(res) {
			$("#tbody").html(template("userMsg", {
				msg: res
			}))
		},
		error: function() {
			console.log("读取失败")
		}
	})
}

loadUser()


//todo  删除用户
$("#tbody").on("click", ".delete", function() {
	let id = $(this).attr("data-id")
	if (confirm("确认删除?")) {
		$.ajax({
			type: "delete",
			url: "/users/" + id,
			success: function(res) {
				loadUser()
			} 
		})
	}
})


//多选删除
$("#checkedAll").on("change", function() {
	$("#tbody input").prop("checked", $(this).prop("checked"))
	ischecked()
})
$("#tbody").on("change", "input", function() {
	ischecked()
})

// 封装函数:检测是否有选中的用户,有则可以选择批量选择,否则反之
function ischecked() {
	let clength = $("#tbody input:checked").length;
	let length = $("#tbody input").length;
	if (clength > 0) {
		$("#deleteChecked").attr("disabled", false)
	} else {
		$("#deleteChecked").attr("disabled", true)
	}
	if (clength == length && clength != 0) {
		$("#checkedAll").prop("checked", true)
	} else {
		$("#checkedAll").prop("checked", false)
	}
}
$("#deleteChecked").on("click", function() {
	let id = ""
	$("#tbody input:checked").each((i, v) => {
		id += $(v).attr("data-id") + "-"
	})
	id = id.slice(0, -1)
	if (confirm("确认删除?")) {
		$.ajax({
			url: "/users/" + id,
			type: "delete",
			success: function(res) {
				loadUser()
			}
		})
	}
})
ischecked()
