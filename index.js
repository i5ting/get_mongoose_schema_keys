var fs = require('fs')
const acorn = require("acorn")
const walk = require("acorn/dist/walk")

module.exports = function (file, cb) {
    // console.log(file)
    var result = []
    fs.exists(file, (exists) => {
        if (exists) {
            var c = fs.readFileSync(file).toString()
            // console.log(c)
            walk.full(acorn.parse(c), node => {
                if (node.type === 'NewExpression' && node.callee.name === 'Schema') {
                    var properties = node.arguments[0].properties
                    
                    properties.forEach(function (item) {
                        result.push(item.key.name)
                    })
                }
            })

            cb(result)
        }else {
            console.log('please your model file is not exist.')
        }
    })
}