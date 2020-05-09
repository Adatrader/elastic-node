const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
   hosts: [ 'http://localhost:9200']
});

client.ping({
     requestTimeout: 30000,
 }, function(error) {
     if (error) {
         console.error('elasticsearch cluster is down!');
     } else {
         console.log('Everything is ok');
     }
 });

 client.indices.create({
     index: 'parts_file'
 }, function(error, response, status) {
     if (error) {
         console.log(error);
     } else {
         console.log("created new index", response);
     }
 });


const cities = require('./parts.json');
var bulk = [];
parts.forEach(part =>{
  bulk.push({index:{
                _index:"parts_file",
                _type:"parts_list",
            }

        })
  bulk.push(city)
})


client.bulk({body:bulk}, function( err, response  ){
        if( err ){
            console.log("Failed Bulk operation".red, err)
        } else {
            console.log("Successfully imported %s".green, bulk.length);
        }
    });
