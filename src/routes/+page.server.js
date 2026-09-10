const endpoint = "https://fdnd.directus.app/items/person/262";

export async function load() {
    const res = await fetch(endpoint);
    const { data } = await res.json();

    return { chama: data };
}