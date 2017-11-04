# get_mongoose_schema_keys

如果模型是

```
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var MongooseDao = require('mongoosedao')

var courseSchema = new Schema({
  name: { type: String, unique: true },
  category: String,
  price: String,
  picture: String

})
```

最终调用和结果

```
require('get_mongoose_schema_keys')('./course.js', function(keys){
    console.log(keys) //[ 'name', 'category', 'price', 'picture' ]
})
```