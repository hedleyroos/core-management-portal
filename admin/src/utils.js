export const GenerateQueryString = parameters => {
    return Object.entries(parameters).map(
        ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    ).join('&');
}

export const ToTitle = text => {
    text = text.toLowerCase();
    let words = text.split(' ');
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}