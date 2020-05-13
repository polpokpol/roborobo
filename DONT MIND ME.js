const promise = new Promise((resolve, reject) => {
	if(true){
		resolve("stuff worked");
	}
	else{
		reject("error it borked");
	}
})

promise.then((result) => result + "666")
.then((result2) => {
	throw Error 
	console.log(result2 + "333")
})
.catch(() => console.log("errorrr"));

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "First");
})

promise2.then((result) => {
	console.log(result + "666");
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "second");
})

const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, "third");
})

const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 2000, "fourth");
})

Promise.all([promise2, promise3, promise4])
	.then((values) => {
		console.log(values);
	});



const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
	// JUST MAKE YOUR OWN JSON THEIR SERVERS IS TOO SLOW AND SHITTY	
];


Promise.all(urls.map((url) => {
	return fetch(url).then((resp) => resp.json);
})).then(results	=> {
	console.log(results[0]);
	console.log(results[1]);
	console.log(results[2]);
})