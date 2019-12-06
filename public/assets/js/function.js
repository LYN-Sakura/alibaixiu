//封装一个转对象函数
function serializeObj(cs) {
	let arr = cs.serializeArray()
	let obj = {}
	$.each(arr, (i, item) => {
		obj[item.name] = item.value
	})
	return obj
}