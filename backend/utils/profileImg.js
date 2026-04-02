export const boyImgs = [
    3,
    12,
    54,
    58,
    62
];

export const girlImgs = [
    5,
    9,
    32,
    38,
    44
];

export const getRandomBoyImg = () => {
    return boyImgs[Math.floor(Math.random() * boyImgs.length)];
};

export const getRandomGirlImg = () => {
    return girlImgs[Math.floor(Math.random() * girlImgs.length)];
};