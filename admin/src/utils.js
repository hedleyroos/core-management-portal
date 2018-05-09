export const GenerateQueryString = parameters => {
    return Object.entries(parameters)
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join('&');
};

export const titleCase = string => {
    return string
        .toLowerCase()
        .split(' ')
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
};
