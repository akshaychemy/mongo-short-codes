Mongo DB

[https://mongoosejs.com/docs/api/query.html#Query.prototype.or()](https://mongoosejs.com/docs/api/query.html#Query.prototype.or%28%29 "https://mongoosejs.com/docs/api/query.html#Query.prototype.or()")

https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6

```
`db.posts.find({ category: 'News' })`
`# asc
db.posts.find().sort({ title: 1 }).pretty()
# desc
db.posts.find().sort({ title: -1 }).pretty()
`
```

```
`db.posts.find().count()
db.posts.find({ category: 'news' }).count()`
// limit the rows
`db.posts.find().limit(2).pretty()
`
```

```
db.posts.find().limit(2).sort({ title: 1 }).pretty()
//populate example

```

```
Post.find()
.populate("postedBy")  // here postby is parameter which is nested db and it feches 
.then(p=>console.log(p)) //data from that pramter
.catch(error=>console.log(error));
```

Product.findByIdAndRemove(req.params.id)

 const  category  =  await  Category.findByIdAndUpdate(

 req.params.id,

        {

 name:  req.body.name,

 icon:  req.body.icon  ||  category.icon,//-------

 color:  req.body.color,

        },

{ new:  true}//----adding new updated data

    )

router.delete("/:id",(req,res)=>{

 Category.findByIdAndDelete(req.params.id).then((cat)=>{

 if(cat){

 return  res.status(200).send({ type:"success"})

        }else{

 return  res.status(404).send({type:"failure"})

        }

    })

})

const  orderList  =  await  Order.find().populate('user', 'name').sort({'dateOrdered':  -1})


//=======populating nested data=============================================================

"orderItems": [
    {
      "_id": {
        "$oid": "5f15de0cd47dbd4530b2fb64"
      },
      "product": {
        "$oid": "5f15d8852a025143f9593a7c"
      },
      "quantity": 6
    },
    {
      "_id": {
        "$oid": "5f15de0cd47dbd4530b2fb65"
      },
      "product": {
        "$oid": "5f15d92ee520d44421ed8e9b"
      },
      "quantity": 4
    }
  ],


  //====in this query orderItems has product and product has category
router.get(`/:id`, async (req, res) =>{//----tut 62------
    const order = await Order.findById(req.params.id)
    .populate('user', 'name')//----populating is showing detailed data
    .populate({ //------6.35(TS)----------(orderItems) is main attribute which contains(Quentity,product)
        path: 'orderItems', populate: {
            path : 'product', populate: 'category'} //-----product conatins category(also populate cats)
        });

    if(!order) {
        res.status(500).json({success: false})
    } 
    res.send(order);
})

//==========aggregate=================================================================================================
const totalSales= await Order.aggregate([
    { $group: { _id: null , totalsales : { $sum : '$totalPrice'}}}
]) //----give (id as null) and make field (totalsales)and assign value if totalprice to it
