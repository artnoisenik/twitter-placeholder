var Twit = require('twit');
var T = new Twit({
  consumer_key: 'gWKjJ2OnCNmXLKwOqfyfaQTyb',
  consumer_secret: 'hOMkXlLCLNcA3BgBLetgyATojg1nqeZEzHoUqcxUxwwcIIY48f',
  access_token: '714465526848888832-MHW34PMBqmf8URg2vPX0j29APOujjOx',
  access_token_secret: 'BPbcyhfteE0wGGJ5WwNErhLaXCJGB2vz8lhNA5ypwCbRp'
});

function retweetRecent() {
  T.get('search/tweets', {
      q: "#deepthought OR #dontpanic",
      result_type: "recent"
    },
    function(err, data, response) {
      if (!err) {
        var retweetId = data.statuses[0].id_str;
        T.post('statuses/retweet/' + retweetId, {}, function(err, response) {
          if (response) {
            console.log('Retweeted Tweet ID: ' + retweetId);
          }
          if (err) {
            console.log('Retweet Error: ', err);
          }
        });
      } else {
        console.log('Search Error: ', err);
      }
    });
}

function getStatus() {
  var stream = T.stream('statuses/filter', { track: ['learning', 'keys', 'fun'] })

  stream.on('tweet', function (tweet) {
    console.log(tweet);
  })
}

function getOurStatus() {
  var stream = T.stream('user')

  stream.on('tweet', function (tweet) {
    console.log(tweet);
  })
}

function postStatus(input){
  T.post('statuses/update', { status: input }, function(err, data, response) {
  console.log(data)
})
}
// retweetRecent();
getOurStatus();
postStatus('I hopefully see this in my console, obviously you people will');
setInterval(postStatus('this is an autopost, happens every 5 seconds'), 5000);
