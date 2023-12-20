export const getRandomString = (length:number):string => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length }, () => characters.charAt(getRandomNumberInRange(0, characters.length - 1))).join('');
}

export const getRandomNumberInRange = (min:number, max:number) => {
    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}