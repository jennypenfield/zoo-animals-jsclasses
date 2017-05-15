class Animal {
  constructor (name, DoB, gender) {
    this.name = name
    this.DoB = DoB
    this.gender = gender
  }
  changeName (name) {
    this.name = name
  }
  getDoB () {
    return this.DoB
  }
  getAge () {
    let newDate = new Date()
    return newDate - this.DoB
  }
  toString () {
    console.log('The animal\'s name is ' + this.name + ', and the date of birth is ' + this.DoB)
  }
}

class Mammal extends Animal {
  constructor (species, name, DoB, gender) {
    super(name, DoB, gender)
    this.name = name
    this.species = species
  }
  static getSpecies () {
    return this.species
  }
  toString () {
    console.log('This mammal is a ' + this.species)
  }
  giveBirth (name, DoB, gender) {
    if (this.gender === 'F') {
      return new Mammal(this.species, name, DoB, gender)
    }
  }
  hop (howHigh) {
    if (typeof howHigh !== 'number') {
      console.log('not a valid number. try again using a valid distance without units.')
    } else {
      if (this.species === 'kangaroo') {
        console.log('the kangaroo hops ' + howHigh + '!')
      } else {
        console.log(this.species + 's do not hop!')
      }
    }
  }
  howl (duration) {
    if (typeof duration !== 'number') {
      console.log('not a valid number for howl duration. try again using a number without units.')
    } else {
      if (this.species === 'wolf') {
        console.log('the wolf howls for ' + duration)
      } else {
        console.log(this.species + 's do not howl.')
      }
    }
  }
}

class Reptile extends Animal {
  constructor (species, name, DoB, gender) {
    super(name, DoB, gender)
    this.name = name
    this.species = species
  }
  static getSpecies () {
    return this.species
  }
  toString () {
    console.log('This reptile is a ' + this.species)
  }
  layEggs (name, DoB, gender) {
    if (this.gender === 'F') {
      return new Reptile(this.species, name, DoB, gender)
    }
  }
  swim (speed) {
    if (typeof speed !== 'number') {
      console.log('not a valid speed. try again using a number in mi/h without the units.')
    } else {
      if (this.species === 'lizard') {
        console.log('the lizard is swimming at a speed of ' + speed + 'mi/h.')
      } else {
        console.log(this.species + 's do not swim!')
      }
    }
  }
  slither (speed) {
    if (typeof speed !== 'number') {
      console.log('not a valid speed. try again using a number in mi/h without the units.')
    } else {
      if (this.species === 'snake') {
        console.log('the snake slithers at ' + speed + 'mi/h.')
      } else {
        console.log(this.species + 's do not slither.')
      }
    }
  }
}
