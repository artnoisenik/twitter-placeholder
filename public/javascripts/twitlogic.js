// var Twit = require('twit');
// var T = new Twit({
//   consumer_key: 'gWKjJ2OnCNmXLKwOqfyfaQTyb',
//   consumer_secret: 'hOMkXlLCLNcA3BgBLetgyATojg1nqeZEzHoUqcxUxwwcIIY48f',
//   access_token: '714465526848888832-MHW34PMBqmf8URg2vPX0j29APOujjOx',
//   access_token_secret: 'BPbcyhfteE0wGGJ5WwNErhLaXCJGB2vz8lhNA5ypwCbRp'
// });
//
// function retweetRecent() {
//   T.get('search/tweets', {
//       q: "#deepthought OR #dontpanic",
//       result_type: "recent"
//     },
//     function(err, data, response) {
//       if (!err) {
//         var retweetId = data.statuses[0].id_str;
//         T.post('statuses/retweet/' + retweetId, {}, function(err, response) {
//           if (response) {
//             console.log('Retweeted Tweet ID: ' + retweetId);
//           }
//           if (err) {
//             console.log('Retweet Error: ', err);
//           }
//         });
//       } else {
//         console.log('Search Error: ', err);
//       }
//     });
// }
//
// function getTheirStatus() {
//   var stream = T.stream('statuses/filter', { track: ['learning', 'keys', 'fun'] })
//
//   stream.on('tweet', function (tweet) {
//     console.log(tweet);
//   })
// }
//
// function getOurStatusStream() {
//   var stream = T.stream('user')
//   stream.on('tweet', function (tweet) {
//     console.log(tweet);
//   });
// }
//
// function getOurStatus() {
//   var stream = T.stream('user')
//   var statuses = T.get('statuses/user_timeline')
//   console.log("first status", statuses);
//   console.log("first stream", statuses);
//
//   stream.on('tweet', function (tweet) {
//     console.log("tweet", tweet);
//     var statuses = T.get('user');
//     console.log("second status", statuses);
//   });
// }
//
// function geet(){
//   T.get('search/tweets', { q: 'fun', screen_name: 'tweetthawt', count: 100 }, function(err, data, response) {
//   console.log(data)
// })
// }
//
// function postStatus(input){
//   T.post('statuses/update', { status: input }, function(err, data, response) {
//   console.log(data)
// })
// }
// geet();
// retweetRecent();
// getOurStatus();
// postStatus('I hopefully see this in my console, obviously you people will');
// setInterval(postStatus('this is an autopost, happens every 5 seconds'), 5000);
