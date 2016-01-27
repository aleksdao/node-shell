//console.log(Object.keys(process));
//console.log(process);
var commands = require('./commands')

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
	var input = data.toString().trim().split(' ');
	var cmd = input.shift();
	var file = input;

	if(cmd === 'pwd') {
		commands.pwd(file);
		process.stdout.write('\nprompt > ');		
	}
	else if(cmd === 'date') {
		commands.date(file);
		process.stdout.write('\nprompt > ');

	}
	else if(cmd === 'ls') {
		commands.ls(file);
	}
	else if(cmd === 'echo') {
		commands.echo(file);
		process.stdout.write('\nprompt > ');

	}
	else if(cmd === 'cat') {
		commands.cat(file);
	}
	else if(cmd === 'head') {
		commands.head(file);
	}
	else {
		process.stdout.write('prompt > ');
	}



	//process.stdout.write('You typed: ' + cmd);
})