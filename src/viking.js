// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}


// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(vikingArmy = [], saxonArmy = []) {
    this.vikingArmy = vikingArmy;
    this.saxonArmy = saxonArmy;
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
  }

  vikingAttack() {
    let saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[saxonIndex];
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let damageReceived = randomSaxon.receiveDamage(randomViking.strength);
    this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);

    return damageReceived;
  }
  saxonAttack() {
    let vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking = this.vikingArmy[vikingIndex];
    let damageSustained = randomViking.receiveDamage(randomSaxon.strength);
    this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);

    return damageSustained;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
