var fs = require('fs');

function pwd(file) {
	process.stdout.write(process.env.PWD.toString());
}

function date(file) {
	process.stdout.write(new Date().toString());
}

function ls(file) {
	fs.readdir('.', function(err, files) {
		if(err) throw err;
		files.forEach(function(file) {
			process.stdout.write(file.toString() + "\n");
		})
		//process.stdout.write("prompt > ");
	});
	process.stdout.write("inside ls");
}

function echo(file) {
	process.stdout.write(file.join(' '));
}

function cat(file) {
	for(var i = 0; i < file.length; i++) {
		fs.readFile(file[i], 'utf8', function (err, data) {
			if(err) throw err;
			process.stdout.write(data);
			process.stdout.write('\nprompt > ');

		});
	}

}

function head(file) {
	fs.readFile(file[0], 'utf8', function (err, data) {
		if(err) throw err;
		var headData = data.split('\n');
		for (var i = 0; i < 5; i++) {
			process.stdout.write(headData[i] + '\n')
		}
	});
}

module.exports = {
	pwd: pwd,
	date: date,
	ls: ls,
	echo: echo,
	cat: cat,
	head: head
}

// module.exports = {
// 	pwd: function () {
// 		console.log(hi);
// 	}
// }

