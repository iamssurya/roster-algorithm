const data = {

  "members": [{
      "id": 1,
      "name": "John",
      "team": 1
    },
    {
      "id": 2,
      "name": "Paul",
      "team": 2
    },
    {
      "id": 3,
      "name": "Simon",
      "team": 1
    },
    {
      "id": 4,
      "name": "Mark",
      "team": 1
    },
    {
      "id": 5,
      "name": "Angel",
      "team": 1
    },
    {
      "id": 6,
      "name": "Laurel",
      "team": 1
    },
    {
      "id": 7,
      "name": "Hilton",
      "team": 1
    },
    {
      "id": 8,
      "name": "Peter",
      "team": 1
    },
    {
      "id": 9,
      "name": "Elavil",
      "team": 1
    },
    {
      "id": 10,
      "name": "Stan",
      "team": 1
    },
    {
      "id": 11,
      "name": "Peter Theil",
      "team": 1
    },
    {
      "id": 12,
      "name": "Sean",
      "team": 1
    }
  ]
};
  let config = {
    noWeeks : 52,
    noOfDaysPerWeek : 5,
    shifts : ['morning','noon','night'],
    weights : ['2','5','3'],
    shuffleIntensity : 1,
    changeFrequency: 2
  }
  let roster = new Roster(config,data);
  document.getElementById('result').innerHTML = JSON.stringify(roster.getRosterPlan(),undefined,2);
