export let tirerNbHasard = (min,max) => {
    // J'ai mis le (-1) à la fin car l'indexation des tableaux commence à 0
    return Math.floor(Math.random() * (max - min + 1) + min);
};
export default tirerNbHasard;