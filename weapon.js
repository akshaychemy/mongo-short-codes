{
    "data": {
      "charEnemy": [
        {
          "charID": "a",
          "enemy": [
            {
              "name": "q",
              "weapons": [
                      { "type": "metal", "power": "5" }
               ]
            },
            {
              "name": "X",
              "weapons": [
                      { "type": "metal", "power": "6" }
               ]
            },
            {
              "name": "c",
              "weapons": [
                      { "type": "metal", "power": "7" }
                ]
            },
          ]
        }
      ]
  }

  //How should I go about querying a specific CharID with a specific 
  //enemy name? If I query charID=“a” and enemy name “X” for example, 
  //I only want to be able to access enemy[1], 
  //or rather, everything within the object with that specific name.

  charEnemy.find({ 'data.charEnemy.enemy.name': 'X' }, 
                 { 'data.charEnemy.enemy.name': 1, 'data.charEnemy.enemy.weapons': 1 }
)

charEnemy.find({ 'data.charEnemy.charID': 'charA', 'data.charEnemy.enemy.weapons': 'weaponA' },
 { 'data.charEnemy.enemy.name': 1, 'data.charEnemy.enemy.weapons': 1 })