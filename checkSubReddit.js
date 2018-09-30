const {fetchSubreddit} = require('fetch-subreddit');
var args = process.argv.slice(2);
var isTrueSet = (args[1] == 'true');
fetchSubreddit(args[0])
  .then(function(response) {
  	if(response[0].urls.length > 0) {
  		if(isTrueSet) {
  			console.log('subreddit name is already been taken and following are the urls of the same');
  			console.log(pretty(response));
  		} else {
  			console.log('subreddit name is already been taken');
  		}
  	}else{
  		console.log('subreddit name is available');
  	}
  })
  .catch(function(err){
  	console.error('something went wrong');
  });
 
function pretty(obj) {
  return JSON.stringify(obj, null, 2);
}