[
  {
    _id: ObjectId("5fd48f21c93c320001f3b3b1"),
    username: "john_doe",
    email: "john@example.com",
    password: "hashed_password_1",
    full_name: "John Doe",
    birthdate: ISODate("1990-01-01"),
    created_at: ISODate("2023-01-01T00:00:00Z"),
    updated_at: ISODate("2023-01-01T00:00:00Z"),
    profile: {
      avatar: "avatar_url_1",
      bio: "Short user bio 1",
      location: "City 1, Country 1",
    },
    posts: [
      {
        post_id: ObjectId("5fd48f21c93c320001f3b3b2"),
        text: "Post content 1",
        created_at: ISODate("2023-01-02T12:30:00Z"),
        likes: ["user_id_2", "user_id_3"],
        comments: [
          {
            comment_id: ObjectId("5fd48f21c93c320001f3b3b3"),
            user_id: "commenter_id_1",
            text: "Comment text 1",
            created_at: ISODate("2023-01-02T13:00:00Z"),
          },
          {
            comment_id: ObjectId("5fd48f21c93c320001f3b3b4"),
            user_id: "commenter_id_2",
            text: "Comment text 2",
            created_at: ISODate("2023-01-02T13:15:00Z"),
          },
        ],
      },
      {
        post_id: ObjectId("5fd48f21c93c320001f3b3b5"),
        text: "Post content 2",
        created_at: ISODate("2023-01-03T09:45:00Z"),
        likes: ["user_id_1"],
        comments: [
          {
            comment_id: ObjectId("5fd48f21c93c320001f3b3b6"),
            user_id: "commenter_id_3",
            text: "Comment text 3",
            created_at: ISODate("2023-01-03T10:00:00Z"),
          },
        ],
      },
    ],
  },
  {
    _id: ObjectId("5fd48f21c93c320001f3b3b7"),
    username: "jane_smith",
    email: "jane@example.com",
    password: "hashed_password_2",
    full_name: "Jane Smith",
    birthdate: ISODate("1985-05-15"),
    created_at: ISODate("2023-01-04T00:00:00Z"),
    updated_at: ISODate("2023-01-05T12:30:00Z"),
    profile: {
      avatar: "avatar_url_2",
      bio: "Short user bio 2",
      location: "City 2, Country 2",
    },
    posts: [
      {
        post_id: ObjectId("5fd48f21c93c320001f3b3b8"),
        text: "Post content 3",
        created_at: ISODate("2023-01-05T14:20:00Z"),
        likes: ["user_id_1", "user_id_3"],
        comments: [
          {
            comment_id: ObjectId("5fd48f21c93c320001f3b3b9"),
            user_id: "commenter_id_4",
            text: "Comment text 4",
            created_at: ISODate("2023-01-05T15:00:00Z"),
          },
        ],
      },
    ],
  },
  //----
  {
    _id: ObjectId("5fd48f21c93c320001f3b3b1"),
    username: "john_doe",
    email: "john@example.com",
    password: "hashed_password_1",
    full_name: "John Doe",
    birthdate: ISODate("1990-01-01"),
    created_at: ISODate("2023-01-01T00:00:00Z"),
    updated_at: ISODate("2023-01-01T00:00:00Z"),
    profile: {
      avatar: "avatar_url_1",
      bio: "Short user bio 1",
      location: "City 1, Country 1",
    },
    followers: ["follower_id_1", "follower_id_2"],
    following: ["following_id_1", "following_id_2"],
  },
  {
    _id: ObjectId("5fd48f21c93c320001f3b3b7"),
    username: "jane_smith",
    email: "jane@example.com",
    password: "hashed_password_2",
    full_name: "Jane Smith",
    birthdate: ISODate("1985-05-15"),
    created_at: ISODate("2023-01-04T00:00:00Z"),
    updated_at: ISODate("2023-01-05T12:30:00Z"),
    profile: {
      avatar: "avatar_url_2",
      bio: "Short user bio 2",
      location: "City 2, Country 2",
    },
    followers: ["follower_id_3", "follower_id_4"],
    following: ["following_id_3", "following_id_4"],
  },
  {
    _id: ObjectId("5fd48f21c93c320001f3b3ba"),
    username: "alice_jones",
    email: "alice@example.com",
    password: "hashed_password_3",
    full_name: "Alice Jones",
    birthdate: ISODate("1995-08-20"),
    created_at: ISODate("2023-01-06T00:00:00Z"),
    updated_at: ISODate("2023-01-07T08:45:00Z"),
    profile: {
      avatar: "avatar_url_3",
      bio: "Short user bio 3",
      location: "City 3, Country 3",
    },
    followers: ["follower_id_5", "follower_id_6"],
    following: ["following_id_5", "following_id_6"],
  },
];

//
// Find users with the username "john_doe"
db.users.find({ username: { $eq: "john_doe" } });

// Find users whose username is not "john_doe"
db.users.find({ username: { $ne: "john_doe" } });

// Find users created after January 1, 2023
db.users.find({ created_at: { $gt: ISODate("2023-01-01T00:00:00Z") } });

// Find users whose birthdate is less than January 1, 1990
db.users.find({ birthdate: { $lt: ISODate("1990-01-01") } });

// Find users whose birthdate is less than or equal to January 1, 1990
db.users.find({ birthdate: { $lte: ISODate("1990-01-01") } });

// Find users whose location is either "City 1, Country 1" or "City 2, Country 2"
db.users.find({
  "profile.location": { $in: ["City 1, Country 1", "City 2, Country 2"] },
});


// Find users whose location is not "City 1, Country 1" or "City 2, Country 2"
db.users.find({
  "profile.location": { $nin: ["City 1, Country 1", "City 2, Country 2"] },
});

// Find users whose birthdate is greater than January 1, 1985 AND username is "john_doe"
db.users.find({
  $and: [
    { birthdate: { $gt: ISODate("1985-01-01") } },
    { username: "john_doe" },
  ],
});


// Find users whose username is either "john_doe" OR "jane_smith"
db.users.find({ 
    $or: [
        { username: "john_doe" }, 
        { username: "jane_smith" }
    ] 
});

// Find users whose username is NOT "john_doe"
db.users.find({ 
    "username": { 
        $not: { 
            $eq: "john_doe" 
        } 
    } 
})

// Find users who have the "bio" field in their profile
db.users.find({ "profile.bio": { $exists: true } })

// Find users whose "birthdate" field is of type date (BSON data type 9)
db.users.find({ "birthdate": { $type: 9 } })

// Find users whose username starts with "john"
db.users.find({ "username": { $regex: /^john/i } })

// Find users whose following array has exactly 2 elements
db.users.find({ "following": { $size: 2 } })

// Find users who follow both "follower_id_1" and "follower_id_2"
db.users.find({ "followers": { $all: ["follower_id_1", "follower_id_2"] } })

// Find users who have a post with more than 10 likes
db.users.find({ 
    "posts": { 
        $elemMatch: { 
            "likes": { 
                $gt: 10 
            } 
        } 
    } 
})

// Retrieve only the first 5 posts for the user with the username "john_doe"
db.users.find({ "username": "john_doe" }, { "posts": { $slice: 5 } })


// Retrieve the lengths of usernames for users
db.users.aggregate([
    {
      $project: {
        "usernameLengths": { $map: { input: "$username", as: "char", in: { $size: "$$char" } } }
      }
    }
  ])

  // Find documents where the "value" field modulo 5 is equal to 2
db.collection.find({ "value": { $mod: [5, 2] } })

// Find documents that contain the word "search" in the "content" field
db.collection.find({ $text: { $search: "search" } })

// Remove all elements with the value 5 from the "numbers" array
db.collection.update({}, { $pull: { "numbers": 5 } }, { multi: true })

// Add the value 10 to the "numbers" array
db.collection.update({ "_id": ObjectId("...") }, { $push: { "numbers": 10 } })

// Add the value 7 to the "uniqueNumbers" array if it doesn't already exist
db.collection.update({ "_id": ObjectId("...") }, { $addToSet: { "uniqueNumbers": 7 } })

// Remove the first element from the "numbers" array
db.collection.update({ "_id": ObjectId("...") }, { $pop: { "numbers": -1 } })

// Add multiple values to the "numbers" array
db.collection.update({ "_id": ObjectId("...") }, 
{ $push: { 
    "numbers":{ 
        $each: [8, 9, 11]
     } 
    } 
})

// Add the value 6 at the second position in the "numbers" array
db.collection.update({ "_id": ObjectId("...") }, 
{ $push: { 
    "numbers": { 
        $each: [6], 
        $position: 1 
    } 
} 
})

// Update documents where the "flags" field has the 4th bit set to 1
db.collection.update({ "flags": { $bit: { and: 0b00001000 } } })

// Find documents where the sum of "field1" and "field2" is greater than 10
db.collection.find({ 
    $expr: { 
        $gt: [{ 
            $add: ["$field1", "$field2"] 
        }, 10] 
    } 
})



// Validate documents against a JSON schema
db.runCommand({
    validate: "collectionName",
    jsonSchema: {
      bsonType: "object",
      required: ["field1", "field2"],
      properties: {
        field1: { bsonType: "string" },
        field2: { bsonType: "int" }
      }
    }
  })

  // Find documents where the "status" is "active" and add a comment for documentation
db.collection.find({ "status": "active" }).comment("Find active documents")

// Perform a text search and access metadata about the results
db.collection.find(
    { $text: { $search: "query" } },
    { _id: 1, score: { $meta: "textScore" } }
  )

  // Find documents where the value of "field1" plus "field2" is greater than 10 using $where
db.collection.find({ $where: "this.field1 + this.field2 > 10" })

// Find documents that intersect with a GeoJSON object
db.collection.find({
    "location": {
      $geoIntersects: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude]
        }
      }
    }
  })

  // Find documents that are completely within a GeoJSON object
db.collection.find({
    "location": {
      $geoWithin: {
        $geometry: {
          type: "Polygon",
          coordinates: [[...coordinates for the polygon...]]
        }
      }
    }
  })

  // Find documents near a specific location, sorted by distance
db.collection.aggregate([
    {
      $geoNear: {
        near: { type: "Point", coordinates: [longitude, latitude] },
        distanceField: "distance",
        spherical: true
      }
    }
  ])

  // Find documents within a specified maximum distance from a location
db.collection.find({
    "location": {
      $near: { $geometry: { type: "Point", coordinates: [longitude, latitude] }, $maxDistance: 500 }
    }
  })

  // Find documents where all elements in the "flags" array are true
db.collection.find({ "flags": { $allElementsTrue: true } })

// Generate a sequence of numbers from 1 to 10
db.collection.aggregate([
    { $project: { "generatedNumbers": { $range: [1, 11] } } }
  ])
  

