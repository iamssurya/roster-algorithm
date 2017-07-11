class Roster {
    constructor(config, data) {
        this.noWeeks = config.noWeeks;
        this.noOfDaysPerWeek = 5;
        this.shifts = config.shifts;
        this.weights = config.weights;
        this.shuffleIntensity = config.shuffleIntensity;
        this.numberOfDays = this.noWeeks * this.noOfDaysPerWeek;
        this.changeFrequency = config.changeFrequency;
        this.data = data;
        this.cyclicMemberArray = [];
        this.result = [];
        this.quotasForShifts = [];
        for (let i = 0; i < this.data['members'].length; i++) {
            this.cyclicMemberArray.push(this.data['members'][i].name);
        }
    }
    getRosterPlan() {
        let changeCounter = 1;
        for (let i = 0; i < this.shifts.length; i++) {
            let _t = Math.ceil(this.cyclicMemberArray.length * (this.weights[i] / 10));
            this.quotasForShifts.push(_t);
        }

        for (let i = 0; i < this.noWeeks; i++) {
            let _temp = this.cyclicMemberArray.slice();
            let _shifts = {};
            let count = 0;
            let totalShifts = this.shifts.length;
            _shifts.week = i + 1;
            while (_temp.length > 0) {
                let name = this.shifts[count % totalShifts];
                if (_shifts[name] instanceof Array === false) {
                    _shifts[name] = [];
                }
                if (_shifts[name].length < this.quotasForShifts[count % totalShifts]) {
                    _shifts[name].push(_temp.pop());
                }
                count++;
            }

            this.result.push(_shifts);
            // _temp = [];
            if (changeCounter === this.changeFrequency) {
                this.cycleArray();
                changeCounter = 0;
            }
            changeCounter++;
        }

        return this.result;
    }

    cycleArray() {
        for (let i = 0; i < this.shuffleIntensity; i++) {
            this.cyclicMemberArray.push(this.cyclicMemberArray.shift());
        }
    }

}
