'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Roster = function () {
    function Roster(config, data) {
        _classCallCheck(this, Roster);

        this.noWeeks = config.noWeeks;
        this.noOfDaysPerWeek = 5;
        this.shifts = config.shifts;
        this.weights = config.weights;
        this.shuffleIntensity = config.shuffleIntensity;
        // this.minMembersForShifts = ['2','4','3'];
        this.numberOfDays = this.noWeeks * this.noOfDaysPerWeek;
        this.changeFrequency = config.changeFrequency;
        this.data = data;
        this.cyclicMemberArray = [];
        this.result = [];
        this.quotasForShifts = [];
        for (var i = 0; i < this.data['members'].length; i++) {
            this.cyclicMemberArray.push(this.data['members'][i].name);
        }
    }

    _createClass(Roster, [{
        key: 'getRosterPlan',
        value: function getRosterPlan() {

            var changeCounter = 1;
            for (var i = 0; i < this.shifts.length; i++) {
                var _t = Math.ceil(this.cyclicMemberArray.length * (this.weights[i] / 10));
                this.quotasForShifts.push(_t);
            }

            for (var i = 0; i < this.noWeeks; i++) {
                var _temp = this.cyclicMemberArray.slice();
                var _shifts = {};
                var count = 0;
                var totalShifts = this.shifts.length;
                _shifts.week = i + 1;
                while (_temp.length > 0) {
                    var name = this.shifts[count % totalShifts];
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
    }, {
        key: 'cycleArray',
        value: function cycleArray() {
            for (var i = 0; i < this.shuffleIntensity; i++) {
                this.cyclicMemberArray.push(this.cyclicMemberArray.shift());
            }
        }
    }]);

    return Roster;
}();