function ShowFilmInfo(info,form)
{
    var title = info.value;
   // form.innerHTML = title;
    var URL = "http://www.omdbapi.com/?apikey=d44c81ba&t=" + info.value;
    fetch(URL)
        .then(function (response) {
            response.json().then(function (data) {
                    form.innerHTML = '<p><img id="IdImg" src="' + data.Poster + '"/>'+
                    '<h4>Назва: '+data.Title+'</h4>'+
                    '<h4>Рік: '+data.Year+'</h4>'+
                    '<h4>Тривалість: '+data.Runtime+'</h4>' +
                    '<h4>Режисери: '+data.Director+'</h4>'+
                    '<h4>Актори: '+data.Actors+'</h4>'+
                    '<h4>Студія: '+data.Production+'</h4>'+
                    '<h4>Збори: '+data.BoxOffice+'</h4>'+
                    '<h4>Rotten Tomatoes: '+data.Ratings[1].value+'</h4>'+
                    '<h4>Metascore: '+data.Metascore+'</h4>'+
                    '<h4>imdbRating: '+data.imdbRating+'</h4></p>';
        });
    });
}
