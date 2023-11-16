[
  {
    users: [
      {
        name: "frank",
        age: 15,
        email: "frank@email.com",
      },
      {
        name: "daniel",
        age: 18,
        email: "daniel@email.com",
      },
      {
        name: "george",
        age: 18,
        email: "george@email.com",
      },
    ],
  },
  {
    users: [
      {
        name: "dan",
        age: 19,
        email: "dan@email.com",
      },
      {
        name: "steve",
        age: 18,
        email: "steve@email.com",
      },
      {
        name: "chris",
        age: 21,
        email: "chris@email.com",
      },
    ],
  },
];

//I want to query all the documents with all it’s users being 18 or above.
// The methods I found like

db.collection.aggregate([
    {
      $match: {
        users: {
          $not: {
            $all: [
              {
                $elemMatch: {
                  age: {
                    $lt: 18
                  }
                }
              }
            ]
          }
        }
      }
    }
  ])
  


