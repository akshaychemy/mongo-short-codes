show dbs 
db
use akshay_db  // to sue the this as db
db.dropDatabase()
db.dropDatabase()           
db.createCollection('posts')
db.createCollection('Akshay')
db.createCollection('')
show collections
show dbs
dbuse akshay_db
show collections
db.createCollection('akshay')


db.posts.insert({
    title: 'Post One',
    body: 'Body of post one',
    category: 'News',
    tags: ['news', 'events'],
    user: {
      name: 'John Doe',
      status: 'author'
    },
    date: Date()
  })

db.Akshay_db.insert({
    name:'akshay',
    age:23,
    interstes:['1','2','3']
})

//to find all the rows
db.posts.find()
db.akshay_db.find()
db.akshay_db.find()
db.akshay_db.find().pretty()
db.akshay_db.find({name:'akshay'})


//sorting fo all the rows
# asc
db.posts.find().sort({ title: 1 }).pretty()
# desc
db.posts.find().sort({ title: -1 }).pretty()

db.akshay_db.find().sort({title:1}).pretty()
db.akshay_db.find().sort({name:-1}).pretty()


//to find the count
db.posts.find().count()
db.posts.find({ category: 'news' }).count()



db.akshay_db.find().count()
db.akshay_db.find({name:'akshay'}).sort({name:1}).count()


db.akshay_db.find().limit(3)


db.posts.find().forEach(function(doc) {
    print("Blog Post: " + doc.title)
  })


  db.akshay_db.find().forEach((docs)=>{
    print("this is the docs",docs.title)
  })


  db.posts.findOne({ category: 'News' })
  db.akshay_db.findOne({age:23})


  //updating things

  db.posts.update({ title: 'Post Two' },
{
  $set: {
    body: 'Body for post 2',
    category: 'Technology'
  }
})


db.akshay_db.update({
    title:'akshay'
},{
    $set:{
        name:'akshay1',
        age:23,
        address:"home address"
    }
})

db.posts.update({ title: 'Post Two' },
{
  $inc: {
    likes: 5
  }
})


db.akshay_db.update({
    name:'akshay'
},{
    $inc:{
        age:26
    }
})


///====================updating sub docs
db.posts.update({ title: 'Post One' },
{
  $set: {
    comments: [
      {
        body: 'Comment One',
        user: 'Mary Williams',
        date: Date()
      },
      {
        body: 'Comment Two',
        user: 'Harry White',
        date: Date()
      }
    ]
  }
})

db.akshay_db.update({
    name:'akshay'
},{
    $set:{
        comments:[
            {
                body:'body1',
                stuff:'stufff1'
            },
            {
                body:'body2',
                stuff:'stuff2'
            }
        ]
    }
})


///======tect search
db.posts.find({
    $text: {
      $search: "\"Post O\""
      }
  })



db.find({
  EmpId: 1234,
  $text:{
    $search: "\"child\"",$caseSensitive:true
  }
})

//===greater or less
db.posts.find({ views: { $gt: 2 } })
db.posts.find({ views: { $gte: 7 } })
db.posts.find({ views: { $lt: 7 } })
db.posts.find({ views: { $lte: 7 } })

db.akshay_db.find({
    views:{
        $gt:2
    }
})

db.akshay_db.find({
    age:{
        $lte:5
    }
})



