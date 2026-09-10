const endpoint = "https://fdnd.directus.app/items/person/262";

export function load() {

    const chama = fetch(endpoint)

        .then((res) => res.json())
        .then(({ data }) => {
            return data;
        })

    return { chama };
}