document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('search').value;
    if (query) {
        fetchRecipes(query);
    }
});

async function fetchRecipes(query) {
    const appId = '5ef63bf7';  
    const appKey = 'e93f289525ef919f31f7a725788b607d';  

    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`);
    const data = await response.json();
    displayRecipes(data.hits);
}

function displayRecipes(recipes) {
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <h2>${recipe.recipe.label}</h2>
            <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            <p>Calories: ${recipe.recipe.calories.toFixed(2)}</p>
            <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
        `;
        recipesDiv.appendChild(recipeDiv);
    });
}
