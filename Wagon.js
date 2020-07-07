class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passegers = []
    }

// – Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
    getAvailableSeatCount(capacity) {
        return this.capacity - this.passegers.length
    }

// Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
    join(traveler){

        if (this.capacity >= 0){
            this.passegers.push(traveler)
        }  
    }  

// Returns true if there is at least one unhealthy person in the wagon. Return false if not.
    shouldQuarantine() {
        this.food -= 1
        if (this.food >= 0){
            this.isUnhealthy = true
        }
        else {return this.isUnhealthy = false}
    } 

// Returns the total amount of food among all passengers in the wagon.
    totalFood() {

    }



}






