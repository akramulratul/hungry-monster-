////////////////////////////////////////////////search button action
function searchMealItems() {
    const mealName = document.getElementById('inputMealName').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealName}`)
        .then(res => res.json())
        .then(data => foodItem(data.meals))
    closeDetails();

};



function foodItem(meals) {
    const mealContainer = document.getElementById('mealContainer');
    if (mealContainer.innerHTML !== null) {
        mealContainer.innerHTML = '';
        meals.forEach(meal => {

            mealContainer.innerHTML += `
        <div class="d-flex col-lg-3 my-3 justify-content-center">
        <div class="card" onclick="mealInfo('${meal.strMeal}')" style="width: 18rem;">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="">
        <div class="card-body">
            <h4 class="card-title">${meal.strMeal}</h4>
        </div>
    </div>
</div>
      
                `
        });
    };
};


// fetch single ingredients 
function mealInfo(mealName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => mealDetails(data.meals))
}


// showing meal details function
function mealDetails(meal) {
    document.querySelector('.detaisHolder').style.display = 'block';
    const [mealItem] = meal;
    const mealDetails = document.querySelector('.mealDetails');
    mealDetails.innerHTML = `
    <div class="col-8 my-5">
    <img class='detail-image' src='${mealItem.strMealThumb}'>
    <h1>${mealItem.strMeal}</h1>
    <h3>Ingredients</h3>
    <ul id="ingredientsContainer"></ul>
    <li>${mealItem.strMeasure1} ${mealItem.strIngredient1}</li>
    <li>${mealItem.strMeasure2} ${mealItem.strIngredient2}</li>
    <li>${mealItem.strMeasure3} ${mealItem.strIngredient3}</li>
    <li>${mealItem.strMeasure4} ${mealItem.strIngredient4}</li>
    <li>${mealItem.strMeasure5} ${mealItem.strIngredient5}</li>
    <li>${mealItem.strMeasure6} ${mealItem.strIngredient6}</li>
    <li>${mealItem.strMeasure7} ${mealItem.strIngredient7}</li>
    <li>${mealItem.strMeasure8} ${mealItem.strIngredient8}</li>
    <li>${mealItem.strMeasure9} ${mealItem.strIngredient9}</li>
    <li>${mealItem.strMeasure10} ${mealItem.strIngredient10}</li>
    
    </div>
 

    `

    mealDetails.style.display = 'block';
};



function closeDetails() {
    document.querySelector('.detaisHolder').style.display = 'none';
};