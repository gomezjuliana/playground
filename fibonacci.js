// let start = 0;
// let hold = "";
// let next = 1;

// function fibon(number){
// 	console.log(start)
// 	hold = start;
// 	start = next;
// 	next += hold
// 	if (start > number) return;
// 	else fibon(number);
// }


function fibon(limit, now, prev){
	if (typeof now === 'undefined') {
		console.log(0);
		prev = 0;
		now = 1;
	}

	if (now > limit) {
		return
	}
	console.log(now);
	fibon(limit, now + prev, now)
}


fibon(32);


// 0 1 1 2 3 5 8 13