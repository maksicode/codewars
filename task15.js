// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    if (health > 0 && health > damage) {
        return health - damage;
    } else {
        return 0;
    }
}
console.log(combat(90, 150));


let combat1 = (health, damage) => health > 0 && health > damage ? health - damage : 0;
console.log(combat1(130, 70));
