function Animal(_name, _age, _food, _sleep, _happiness) {
  let name = _name || ''
  let age = _age || 0
  let food = _food || 0
  let sleep = _sleep || 0
  let happiness = _happiness || 0
  let isAlive = true

  this.getName = function () {
    return name
  }
  this.getAge = function () {
    return age
  }
  this.getFood = function () {
    return food
  }
  this.getSleep = function () {
    return sleep
  }
  this.getHapiness = function () {
    return happiness
  }
  this.getIsAlive = function () {
    return isAlive
  }
  this.setName = function (string) {
    if (typeof name === 'string') {
      name = string
    }
  }

  this.addAge = function (_age) {
    if (typeof _age === 'number' && _age >= 0) {
      if (age + _age > 100) {
        age = 100
      } else {
        age += _age
      }
    }
  }
  this.addFood = function (_food) {
    if (typeof _food === 'number' && _food >= 0) {
      if (food + _food > 100) {
        food = 100
      } else {
        food += _food
      }
    }
  }
  this.removeFood  = function (_food) {
    if (typeof _food === 'number' && _food >= 0) {
      if (food - _food < 0) {
        food = 0
      } else {
        food -= _food
      }
    }
  }
  this.addSleep = function (_sleep) {
    if (typeof _sleep === 'number' && _sleep >= 0) {
      if (sleep + _sleep > 100) {
        sleep = 100
      } else {
        sleep += _sleep
      }
    }
  }
  this.removeSleep = function (_sleep) {
    if (typeof _sleep === 'number' && _sleep >= 0) {
      if (sleep - _sleep < 0) {
        sleep = 0
      } else {
        sleep -= _sleep
      }
    }
  }
  this.addHappiness = function (_happiness) {
    if (typeof _happiness === 'number' && _happiness >= 0) {
      if (happiness + _happiness > 100) {
        happiness = 100
      } else {
        happiness += _happiness
      }
    }
  }
  this.removeHappiness = function (_happiness) {
    if (typeof _happiness === 'number' && _happiness >= 0) {
      if (happiness - _happiness < 0) {
        happiness = 0
      } else {
        happiness -= _happiness
      }
    }
  }
  this.checkAlive = function () {
    if ( age >= 20 || food === 0 || sleep === 0 || happiness === 0  ) {
    isAlive = false
    }
  }
}

let cat = new Animal ('Кися', 0, 100, 100, 100, 100)


function writeAnimalState(animal) {
  const div = document.getElementsByTagName('div')[2]
  div.innerHTML = "<div> Имя: "  + animal.getName() + "</div> <br/> <div> Возраст: "  + animal.getAge() +
  "</div>   <br/> <div> Голод: " + animal.getFood() + "</div> <br/> <div> Сон: " + animal.getSleep() + "</div> <br/> <div> Счастье: " +
  animal.getHapiness() +"</div><br /><div> isAlive:" + animal.getIsAlive() + '</div>'
}

function feedAnimal(animal) {
  animal.addFood(10)
  writeAnimalState(animal)
}
function playAnimal(animal) {
  animal.addHappiness(10)
  writeAnimalState(animal)
}
function sleepAnimal(animal) {
  animal.addSleep(10)
  writeAnimalState(animal)
}

function setCatImg (_imageCat) {
  var img = document.createElement('img')
  img.setAttribute('src', _imageCat)
  let div = document.getElementsByTagName('div')[0]
  div.innerHTML = ''
  div.appendChild(img)
  document.getElementsByTagName('div')[1].style.display = 'block'
}

let interval = setInterval (() => {
  if (cat.getIsAlive() === true) {
    cat.removeFood(10)
    cat.removeSleep(10)
    cat.removeHappiness(10)
    cat.addAge(1)
    cat.checkAlive()
    console.log(cat)
    writeAnimalState(cat)
  } else {
    cat.getIsAlive() === false
    console.log('Cat is dead')
  }
}, 10000)




// var coordinate= [];
//   var r = 1;
//   var c = 4;
//      for (r=0; r <= 0; r++) {
//            coordinate[r] = [];
//          for (c=0; c <= 4; c++) {
//              coordinate[r][c] = "["+r+","+c+"]";
//          }
//      }
//      console.log(coordinate)
