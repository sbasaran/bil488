$(document).ready(function() {	//when document completely load 
	$(".button").click(function(){	//press search button
		setInterval(function () {
			bringfunction()
		}, 10000);	//for 10 sec interval
	});
});
	function bringfunction(){
	$.getJSON('http://search.twitter.com/search.json?' + 'callback=?&rpp=5&q=' + $(".input").val(),
		function(data) {
			$(".loading").text("Loading");				//write down loading while loading tweet
			$.each(data.results, function(i, tweet) {	//information is in data.result so now in tweet
				// variable that will be used
				var tweet_html;
				// if data came
				if(tweet.text !== undefined) {
					$(".loading").hide(); //data in place so hide loading
					var user_foto = tweet.profile_image_url;
					var user_name = tweet.from_user;
					var user_name1 = tweet_from_user_name;
					var tweet_time = tweet.created_at;
					var tweet_text = tweet.text;
					// prepare them in html
					tweet_html = '<div class="tweet_piece">';
					tweet_html += '<img src="' + user_foto + '" alt="user foto" width="50" height="50" />'; //burda hata olabilir sonra bak
					tweet_html += user_name + ' ' + user_name1 + tweet_time + '<br>' + tweet.text;
					tweet_html += '</div>'
					//add inside
					$("#bring").append(tweet_html);
				}
				//if data not came
				else 
				{
					$(".loading").text("yuklenemedi");
				}
			});
		}
	});

