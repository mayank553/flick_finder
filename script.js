let searchBtn = document.querySelector('.search');
let movieInp = document.querySelector('.movieInp');
let card = document.querySelector('.card');


function getMovieData(moviename){
    return fetch(`https://www.omdbapi.com/?t=${moviename}&apikey=96bed65a`)
    .then(raw => {
        if(!raw.Response){
            throw new Error('Movie not found or incorrect spelling')
        }else{
            return raw.json()
        }
    })
}

function displayMovieData(details){
    console.log(details)
    let data = `   
        <img
          id="posterImg"
          src="${details.Poster}"
          alt="Movie Poster"
          class="w-40 rounded-lg mx-auto md:mx-0 border-2 border-gray-600"
        />
        <div class="flex-1">
          <h2 class="text-2xl font-bold mb-2">
            ${details.Title} <span class="text-gray-400 text-base">${details.Year}</span>
          </h2>
          <p class="italic mb-2">Genre: ${details.Genre}</p>
          <p class="mb-2">IMDb Rating: <strong>${details.imdbRating}</strong></p>
          <p class="mb-2">Actors: ${details.Actors} </p>
          <p class="mt-4 leading-relaxed">
          ${details.Plot}
          </p>
        </div>
      </div>
    </div>`
    card.innerHTML = data
 
}


// getMovieData('Mirzapur').then( function (data) {
//     console.log(data)
// })

searchBtn.addEventListener('click', function(){
   let moviename = movieInp.value.trim()
   if(moviename.length > 0){
    getMovieData(moviename).then(function(data){
        displayMovieData(data)
    })
   }else{
        alert('Please enter a movie name')
    }
   }
       
)