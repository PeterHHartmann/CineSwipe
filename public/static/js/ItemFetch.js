const ItemFetch = (() => {

    const initialItems = async() => {
        const response = await fetch(`/items/initial`);
        const result = await response.json();
        return [...result];
    }

    const fetchItems = async (page, filters) => {
        const response = await fetch(`/items/${page}/?${$.param(filters)}`);
        const result = await response.json();
        return [...result];
    }

    const details = async (item) => {
        const response = await fetch(`/${item.media_type}/${item.id}/details`);
        const result = await response.json();
        return result;
    }

    const genres = async (media_type) => {
        const genres = await fetch(`/genres/${media_type}`);
        return genres.json();
    }

    const providers = async () => {
        const providers = await fetch('/providers');
        return providers.json();
    }

    return {
        initialItems, details, genres, fetchItems, providers
    }
})();