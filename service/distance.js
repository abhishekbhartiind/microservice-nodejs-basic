var request = require('request');

const apiKey = process.env.ZIPCODE_API_KEY || "dbSvGM6Jchr2yzcDT3xNiKdNJA2wHvG2HISkYjmrLHNmUU9fhhrcpkHzVs67Fmvu";
const zipCode = 'https://www.zipcodeapi.com/rest/';

var distance = {
    find: function(req, res, next){
        request(zipCode + apiKey 
            +'/distance.json/' 
            +req.params.zipcode1 +'/'
            +req.params.zipcode2 + '/km', 
            function(err, response, body){
                if(!err && response.statusCode === 200){
                    response = JSON.parse(body);
                    res.send(response);
                }else{
                    console.log(response.statusCode + response.body);
                    res.send({distance: -1});
                }
            })
    }
}

module.exports = distance;