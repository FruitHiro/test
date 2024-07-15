export async function getData(id: string): Promise<any> {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
