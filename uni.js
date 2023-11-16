{
    _id: ObjectId("1"),
    data: {
      city: "ccp",
      universities: [
        {
          _id: "2"
          name: "universityOne"
          students: []
        },
        {
          _id: "3"
          name: "universityTwo",
          students: []
        }
      ]
    }
  }

  //===1  pushing student to uni 1
  db.pautas.updateOne(
    {_id: ObjectId("1")}, 
    {$push: {"data.universities.$[id].students": {name: "aStudentName", age: 22}}},
     {arrayFilters: [{"id._id": ObjectId("2")}]
    })



  //===2
  db.pautas.updateOne(
    {_id: ObjectId("1")}, 
    {$push: {"data.universities.$[name].students": {name: "aStudentName", age: 22}}}, 
    {arrayFilters: [{"name.name": "universityOne"}]
s})
