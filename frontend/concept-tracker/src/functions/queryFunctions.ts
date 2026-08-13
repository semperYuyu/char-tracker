const base_url = "http://localhost:16256"

export const fetchAllCharacters = async () => {
	// const request = await fetch(`${base_url}/characters`);
	// const data = await request.json()

	const fake_data = [
		{
			name: "cat",
			sound: "meow",
		},
		{
			name: "dog",
			sound: "awoo",
		},
		{
			name: "bird",
			sound: "caww",
		},
		{
			name: "snake",
			sound: "ssss",
		},
		{
			name: "mouse",
			sound: "squeak",
		}
	]
	return fake_data;
};