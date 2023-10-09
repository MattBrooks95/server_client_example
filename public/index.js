console.log("script");
const enterButton = document.querySelector("button#people");
//console.log({ body, enterButton });

const container = document.querySelector("div#peopleList");

enterButton.addEventListener("click", async () => {
	//$fetch()
	const data = await fetch(
		"/data"
	).then((res) => res.json())
	.catch((e) => console.error(e));
	console.log(data);

	//ここまではデータ取得の部分、でしたにHTMLようそに情報をかきこみます。
	const peopleElements = [];
	for (const person of data) {
		console.log("creating row for:", person);

		const personContainer = document.createElement("div");
		personContainer.textContent =
			`name: ${person.name}, city: ${person.city}`;
		//"name:" + person.name
		//container.appendChild(personContainer);
		peopleElements.push(personContainer);
	}

	container.replaceChildren(...peopleElements);
});

const newButton = document.createElement("div");
newButton.style.width = "100px";
newButton.style.backgroundColor = "blue";
newButton.style.color = "white";
newButton.textContent = "Hover Me!";
newButton.addEventListener("mouseenter", (e) => {
	console.log("you hovered me!", e);
	console.log(e.target);
	e.target.style.backgroundColor = "blue";
});
newButton.addEventListener("mouseleave", (e) => {
	console.log("you left! =(", e);
	e.target.style.backgroundColor = "red";
});

document.body.appendChild(newButton);

//$("div#myDiv");
const changeDiv = document.querySelector("div#myDiv");
console.log(changeDiv)
changeDiv.style.backgroundColor = "green";

/**
* https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
*/
const pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon/ditto"
const pokemonButton = document.querySelector("button#ditto");
pokemonButton.addEventListener("click", async () => {
	const pokemonInfo = await fetch(
		pokemonApiUrl
	).then((res) => res.json())
	.catch((e) => console.error(e));

	const elements = [...Object.values(pokemonInfo.sprites)]
		.filter(x => typeof x === "string")
		.map((sprite) => {
			const imgTag = document.createElement("img");
			imgTag.src = sprite;
			document.body.appendChild(imgTag);
		});
});
