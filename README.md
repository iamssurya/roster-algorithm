# ROSTER ALGORITHM [![BuildStatus](https://travis-ci.org/travis-ci/travis-web.svg?branch=master)](https://travis-ci.org/travis-ci/travis-web) [![CircleCI](https://circleci.com/gh/iamssurya/roster-algorithm/tree/master.svg?style=svg)](https://circleci.com/gh/iamssurya/roster-algorithm/tree/master)

Simple Algorithm to Generate Roster for your team

## DEMO
https://plnkr.co/edit/kk7tcf?p=preview


## DATA

Create a object with members name in below structure

```JSON
{

  "members": [{
      "id": 1,
      "name": "John"
    },
    {
      "id": 2,
      "name": "Paul"
    },
    {
      "id": 3,
      "name": "Simon"
    }]
}

```

## CONFIG

Now, its time to configure!

```js
{
  // Number of Weeks you want to generate Roster
  noWeeks : 52,
  // Number of Working days per week.
  noOfDaysPerWeek : 5,
  // List of Shifts
  shifts : ['morning','noon','night'],
  // Required Probability of shifts ( rate out of 10 )
  // For Below ,
  // Morning - 2
  // Noon - 5
  // Night - 3
  weights : ['2','5','3'],
  // Intensity of shuffle.
  shuffleIntensity : 1,
  // How frequent you want to rotate shifts
  changeFrequency: 2
}
```

### Instantiation

To start with, using the below snippet.

```js
roster = new Roster(config,data);
roster.getRosterPlan();

```


More Info
---

 * Send me an email at iamssurya@gmail.com
