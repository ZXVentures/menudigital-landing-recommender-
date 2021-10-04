window.addEventListener('DOMContentLoaded', function () {
    generals();
});

const generals = () => {
    let form = document.querySelector('#recommendation-form');
    if(form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            let ingredients = e.target.elements["ingredients"].value
            let results = document.querySelector('#results');
            let loading = document.querySelector('.results-loading')
            let resultsSection = document.querySelector('.results');
            
            if(resultsSection) {
                resultsSection.classList.remove('hidden')
            }
            if(loading) {
                loading.classList.remove('hidden')
            }

            if(results) {
                fetch("https://hrlbvfy9yf.execute-api.us-east-2.amazonaws.com/default/recomendador?ingredients=" + ingredients, {
                    method: "GET",
                    headers: {
                      "Access-Control-Allow-Origin": "*",
                      "Content-Type": "application/json",
                      "cache-control": "no-cache", 
                      "x-api-key": "VvhM8pu31Z3IXiDmiGxbGzoILmMVhOU7zS1Nveff"
                    }
                })
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    loading.classList.add('hidden')
                    if (data) {

                        if(results) {
                            let beers = data;
                            results.innerHTML = '';
                            if(beers.length > 0) {
                                beers.forEach(item => {
                                    results.insertAdjacentHTML('beforeend', `
                                    <div class="result-item">
                                        <img class="result-image" src="./images/${item.name.replace(/\W/ig, "")}.png" alt="${item.name}">
                                        <div class="result-item-feature">
                                            ${item.name}
                                        </div>
                                        <div class="result-item-feature">
                                            ${item.type}
                                        </div>
                                        <div class="result-item-feature">
                                            ${item.abv_alcohol}% Cont. Aprox. de alcohol en volumen
                                        </div>
                                    </div>`)
                                });
                            }
                        }
                    }
                })
                .catch(function (error) {
                    return console.warn(error);
                });
            }
        })
    }
};