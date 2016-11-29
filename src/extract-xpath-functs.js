require("byline")(process.stdin /*,{keepEmptyLines:true}*/) //
.on("data", function(line) {
	extractXpathFunc(line+"").forEach(function(name){
		console.log(name);
	});
});

function extractXpathFunc (data) {
	return data.match(/([:\w-]+)(?=\()/g) || [];
}