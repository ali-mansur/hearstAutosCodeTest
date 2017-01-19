var express = require('express')
var app = express()

app.use(express.static(__dirname + '/dist'))
var mongo = require('mongojs')
var db = mongo('models',['makeModelList'])
var data = [
      {
         maker: { lable:"Ford" },
         models: [
                {
                   lable: "Edge",
                   imgSource: "http://static.usnews.rankingsandreviews.com/images/Auto/izmo/i6336198/2017_ford_edge_angularfront.jpg"
                },

                {
                   lable: "Escape",
                   imgSource: "http://static.usnews.rankingsandreviews.com/images/Auto/izmo/i5468/2016_ford_escape_angularfront.jpg"
                }
             ]
          },

          {
             maker: { lable:"Acura" },
             models: [
                {
                   lable: "ILX",
                   imgSource: "https://file.kbb.com/kbb/vehicleimage/evoxseo/cp/l/10421/2016-acura-ilx-front_10421_032_640x480_wv.png"
                },
                {
                   lable: "MDX",
                   imgSource: "https://file.kbb.com/kbb/vehicleimage/evoxseo/cp/l/10476/2016-acura-mdx-front_10476_032_640x480_wb.png"
                }
             ]
          }
          
       ];

       
function insertData(){
	db.makeModelList.drop();
	db.makeModelList.insert({data},function (err,docs) {
		
	})

}
insertData();

app.get('/models',function(req,response){
	console.log("request received")
	db.makeModelList.find(function (err,docs) {
		response.json(docs);
	})
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000')
})