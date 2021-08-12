/**
 * Generates an id string from sentence
 * @param {String} sentence Initialized sentence
 * @returns ID string
 */
const idfier = (sentence) => sentence.toLowerCase().trim().replace(' ', '-');


export const uIdfier = (wordblock) => wordblock.toLowerCase().trim().replace(' ', '-'); 

export default idfier;
