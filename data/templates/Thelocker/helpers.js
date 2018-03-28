function now() {
	//return new Date().toLocaleDateString()
	var d = new Date();
    //var n = d.toLocaleDateString();
	//var mm = d.getMonth() + 1;
	//var dd = d.getDate();
	//var yy = d.getFullYear() + 543;
	//var fDate = dd + '/' + mm + '/' yy;
	return d.getDate() + "/" + parseInt(d.getMonth() + 1) + "/" + parseInt(d.getFullYear() + 543)
}

function nowPlus20Days() {
	//<br> Due: {{nowPlus20Days}}
    var date = new Date()
    date.setDate(date.getDate() + 20);
    return date.toLocaleDateString();
}

function total(items) {
    var sum = 0
    items.forEach(function (i) {
        console.log('Calculating item ' + i.name + '; you should see this message in debug run')
        sum += i.price
    })
    return sum
}