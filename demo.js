//===practise

{
    "address": {
       "building": "1007",
       "coord": [ -73.856077, 40.848447 ],
       "street": "Morris Park Ave",
       "zipcode": "10462"
    },
    "borough": "Bronx",
    "cuisine": "Bakery",
    "grades": [
       { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },
       { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 },
       { "date": { "$date": 1358985600000 }, "grade": "A", "score": 10 },
       { "date": { "$date": 1322006400000 }, "grade": "A", "score": 9 },
       { "date": { "$date": 1299715200000 }, "grade": "B", "score": 14 }
    ],
    "name": "Morris Park Bake Shop",
    "restaurant_id": "30075445"
  }





  
  //Write a MongoDB query to find the restaurants that achieved a score is more than 80 but less than 100
  
  db.rest.find({
    grades:{
      $elemMatch:{
        "score":{
          $gt:80,
          $lt:100,
        }
      }
    }
  })

  
  // Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168.
  db.collectionName.find({ "address.coord.1": { $lt:-95.754168 } })
  db.restaurants.find({
    "address.coord.1":{
      $lt:-95.754168
    }
  })
  
  //Write a MongoDB query to find the restaurants that do not prepare any
  // cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168.
  
  db.restaurants.find({
    "cuisine":{
      $ne:"American" // Not American cuisine
    },
    "gardes.score":{
      $gt:70
    },
    "address.coord.1":{
      $lt:-10
    }
  })
  
  db.restaurants.find(
    {$and:
         [
            {"cuisine" : {$ne :"American "}},
            {"grades.score" : {$gt : 70}},
            {"address.coord" : {$lt : -65.754168}}
         ]
     }
  );
  
  //Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American'
  // and achieved a grade point 'A' not belongs to the borough Brooklyn. 
  //The document must be displayed according to the cuisine in descending order.
  
  db.collectionName.find({
    "cuisine": { $ne: "American" },      // Not American cuisine
    "grades.grade": "A",                 // Grade is 'A'
    "borough": { $ne: "Brooklyn" }       // Not in Brooklyn borough
  }).sort({ "cuisine": -1 })
  
  db.restaurants.find({
    "cuisine":{
      $ne: "American"
    },
    "grades.grade":"A",
    "borough":{
      $ne: "Brooklyn"
    }
  }).sort({ "Cuisine":-1})
  
  
  //Write a MongoDB query to find the restaurant Id, name, 
  //borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.
  
  db.collectionName.find(
    { "name": { $regex: /^Wil/i } },
    { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0 }
  )
  
  
  db.collectionName.find({
    "name":{
      $regex:/^wil/i
    }
  },{"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0 })
  
  
  //Write a MongoDB query to find the restaurant Id, name,
  // borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.
  db.collectionName.find(
    { "name": { $regex: /ces$/i } },
    { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0 }
  )

  //Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants
  // which prepared dish except 'American' and 'Chinees' or restaurant's name begins with letter 'Wil'
  
  db.collectionName.find({
    $or: [
      {
        "cuisine": { $nin: ["American", "Chinese"] }
      },
      {
        "name": { $regex: /^Wil/i }
      }
    ]
  },
  {
    "restaurant_id": 1,
    "name": 1,
    "borough": 1,
    "cuisine": 1,
    "_id": 0
  })

  db.collectionName.find({
    $or:[
        {
            "cuisines":{
                $nin:['american',"chinese"]
            }
        },{
            "name":{
                $regex:/^wil/i
            }
        }
    ]
  },{
    "rest_name":1,
    "location":1,
    "_id":0
})

//Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants which achieved a
// grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates..

db.collectionName.find(
    {
      "grades": {
        $elemMatch: {
          "grade": "A",
          "score": 11,
          "date": ISODate("2014-08-11T00:00:00Z")
        }
      }
    },
    {
      "restaurant_id": 1,
      "name": 1,
      "grades": 1,
      "_id": 0
    }
  )


  //To find the restaurant ID, name, and grades for restaurants where 
  //the 2nd element of the grades array contains a grade of "A" and a score of 9 on the specific 
  //ISODate "2014-08-11T00:00:00Z," you can use the following MongoDB query:
  db.collectionName.find(
    {
      "grades.1.grade": "A",
      "grades.1.score": 9,
      "grades.1.date": ISODate("2014-08-11T00:00:00Z")
    },
    {
      "restaurant_id": 1,
      "name": 1,
      "grades": 1,
      "_id": 0
    }
  )
  
//==================================================================

  {
    "_id": "eVJYqENah",
    "publicIp": "108.53.197.226",
    "ssid": "Monaco",
    "clients": [
      "192.168.1.142",
      "192.168.1.120",
      "192.168.1.205",
      "192.168.1.115",
      "192.168.1.217",
      "192.168.1.216",
      "192.168.1.181",
      "192.168.1.248"
    ],
    "downloadRate": 486544,
    "uploadRate": 58598,
    "activeClients": [
      "192.168.1.181",
      "192.168.1.248",
      "192.168.1.217",
      "192.168.1.216",
      "192.168.1.120",
      "192.168.1.205"
    ],
    "displayName": "wrt1900ACv2",
    "deviceId": "1691822bc939",
    "userId": "PdvmviSNZ",
    "createdAt": {
      "$date": "2020-06-28T14:17:50.410Z"
    },
    "updatedAt": {
      "$date": "2020-06-28T16:41:00.609Z"
    },
    "__v": 0,
    "activeTags": []
  }


  db.collectionName.find(
    $and[{
      activeClients:{
        $gt:150
      }
    },{
      buildVersion:{
        $regex:/^.10./i
      }
    }]
  )