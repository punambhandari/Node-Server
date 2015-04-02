var fs = require('fs');
var path = require('path');

module.exports={ 

	static_contents:function(request,response)
	{
		
		var url=request.url;
		var filename=path.basename(url);

		console.log("filename : " + filename);

		if(url=="/")
		{
			fs.readFile("./views/index.html" , 'utf8', function (errors, contents){
	            response.writeHead(200, {'Content-Type': 'text/html'});
	            response.write(contents); 
	            response.end();
	        });
		}
		
		else if( path.extname(filename) == "")
		{	
			//file is htnl file
			fs.readFile("./views/"+ filename+".html",'utf8', function (errors, contents){
	            response.writeHead(200, {'Content-Type': 'text/html'});
	            response.write(contents); 
	            response.end();
	        });

		}
		else if( path.extname(filename) == ".html")
		{	
			//file is htnl file
			fs.readFile("./views/"+ filename,'utf8', function (errors, contents){
	            response.writeHead(200, {'Content-Type': 'text/html'});
	            response.write(contents); 
	            response.end();
	        });

		}
		else if( path.extname(filename) == ".css")
		{	
			//file is htnl file
			fs.readFile("./styles/"+ filename, function (errors, contents){
	            response.writeHead(200, {'Content-Type': 'text/css'});
	            response.write(contents); 
	            response.end();
	        });

		}
		else if( path.extname(filename) == ".png" || path.extname(filename) == ".jpeg" ||path.extname(filename) == ".jpg")
		{	
			//file is htnl file
			fs.readFile("./images/"+ filename, function (errors, contents){
	            response.writeHead(200, {'Content-Type': 'image/'+path.extname(filename)});
	            response.write(contents); 
	            response.end();
	        });

		}
		else
		{
			response.end('File not found!!!');
		}
	
	}

}


