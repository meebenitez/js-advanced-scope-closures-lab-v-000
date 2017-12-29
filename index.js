function produceDrivingRange(blockRange){
    return function(block1, block2){
        block1 = parseInt(block1);
        block2 = parseInt(block2);
        const difference = blockRange - Math.abs(block1 - block2);
        const differenceAbs = Math.abs(difference);
        if (difference >= 0 ) {
            return `within range by ${differenceAbs}`;
        } else {
            return `${differenceAbs} blocks out of range`;
        }
    }
}

function produceTipCalculator(percent){
    return function(total){
        return total * percent;
    }
}

function createDriver(){
    let driverId = 0
    // return the class
    return class {
      constructor(name){
        this.name = name
        this.id = ++driverId;
      }
    }
  }