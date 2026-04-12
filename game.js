//Do not alter the starter code
function main(){

  //Create Character constructor function
    function Character(health, strength, agility) {
        this.health = health;
        this.strength = strength;
        this.agility = agility;
    }
  //Create Warrior ,Mage, Enemy and Archer constructor function inheriting Character
   function Warrior(health, strength, agility, weaponType) {
        Character.call(this, health, strength, agility);
        this.weaponType = weaponType;
    }
    function Mage(health, strength, agility, spellType) {
        Character.call(this, health, strength, agility);
        this.spellType = spellType;
    }
    function Archer(health, strength, agility, arrowType) {
        Character.call(this, health, strength, agility);
        this.arrowType = arrowType;
    }
  //Create constructor function for Hero inheriting Hero and Mage
    function Hero(health, strength, agility, weaponType, spellType, specialAbility) {
        Character.call(this, health, strength, agility);
        Warrior.call(this, health, strength, agility, weaponType);
        Mage.call(this, health, strength, agility, spellType);
        this.specialAbility = specialAbility;
  } 
    function Enemy(health, strength, agility, enemyType) {
        Character.call(this, health, strength, agility);
        this.enemyType = enemyType;
    }
    Warrior.prototype = Object.create(Character.prototype);
    Mage.prototype = Object.create(Character.prototype);
    Archer.prototype = Object.create(Character.prototype);
    Hero.prototype = Object.create(Character.prototype,Warrior.prototype,Mage.prototype);
    // Hero.prototype = Object.create(Warrior.prototype);
    // Hero.prototype = Object.create(Mage.prototype);
    Enemy.prototype = Object.create(Character.prototype);


  let warrior1 = new Warrior(100, 50, 30, "sword");
  let mage1 = new Mage(80, 20, 50, "fireball");
  let archer1 = new Archer(90, 40, 40, "poison");
  let hero1 = new Hero(120, 60, 40, "axe", "ice", "double damage");
  let enemy1 = new Enemy(200, 80, 20, "goblin");
  
  console.log(warrior1);
  console.log(mage1);
  console.log(archer1);
  console.log(hero1);
  console.log(enemy1);
  
  return {Character,Hero,Warrior,Mage,Archer,Enemy};
  }
  main();