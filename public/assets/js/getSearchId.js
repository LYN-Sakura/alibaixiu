//封装函数
function getUrlParam(name) {
	let query = location.search.slice(1).split("&")

	let value = -1
	if (query && query.length > 0){
		query.forEach(item=>{
			let tem = item.split("=")
			if (name = tem[0]) {
				value - tem[0]
			}
		})
	}
}