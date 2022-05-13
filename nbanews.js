const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com',
		'X-RapidAPI-Key': 'b34905a4ddmsha45ece3672a905ap1c73c9jsn9788546b6a6b'
	}
};

fetch('https://nba-latest-news.p.rapidapi.com/news', options)
	.then(response => response.json())
	.then(data => {
		for (var i = 0; i < data.length; i++) {
			var title = data[i].title;
			var url = data[i].url;
			var news = '<div class="col-md-6 col-sm-12 new"><h4>' + title + '</h4><p>' + '<a href="' + url + '">' + url + '</a></p></div>'
			document.querySelector('.news').innerHTML += news;
		}

		
	})
	.catch(err => console.error(err));