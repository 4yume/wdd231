export async function getAnime() {
    try {
        const response = await fetch("data/anime.json");
        if (!response.ok) {
            throw new Error("Could not load anime data.")
        }

        const anime = await response.json();

        return anime;
    } catch (error) {
        console.error(error);
    }
}