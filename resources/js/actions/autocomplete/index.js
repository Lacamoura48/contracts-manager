export const autocompleteFetch = async (modal, params) => {
    const { page } = params;
    let url = `/autocomplete/${modal}?page_size=6`;

    for (const param in params) {
        if (params[param]) {
            url += `&${param}=${params[param]}`;
        }
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const hasNextPage = data.next_page_url;

        return {
            data: data.data,
            nextPage: hasNextPage ? page + 1 : null,
        };
    } catch (e) {
        console.log('autocomplete', e.message);

        return {
            data: [],
            nextPage: null,
        };
    }
};
