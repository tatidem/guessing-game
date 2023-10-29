class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.solution = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.solution = Math.round((this.max - this.min) / 2) + this.min;;
        return this.solution;
    }

    lower() {
        this.setRange(this.min, this.solution);
    }

    greater() {
        this.setRange(this.solution, this.max);
    }
}


module.exports = GuessingGame;
