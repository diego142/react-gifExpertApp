export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=t2ew0ObdWGKMoUpBhBdyCzK7aoUqEM56`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifts;
};