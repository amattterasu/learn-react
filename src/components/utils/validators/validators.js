export const required = value => {
    if (value) return undefined;
    return 'error message'
};

export const maxLengthCreator = (maxLength) => value => {
    if (value && value.length > 30 ) return `Max length is ${maxLength} symbols`;
    return undefined;
};

