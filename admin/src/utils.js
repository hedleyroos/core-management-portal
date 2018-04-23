export const GenerateQueryString = parameters => {
    return Object.entries(parameters).map(
        ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    ).join('&');
}