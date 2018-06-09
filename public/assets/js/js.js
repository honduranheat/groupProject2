// $(document).on("click", ".recipeBtn", function() {

// })



$(document).on("click", ".recipeBtn", function () {


    function getRecipe() {
        var ingredient = document.getElementById("ingredientSearch").value;
        var dishName = document.getElementById("dishName").value;
        var healthLabel = document.getElementById("healthLabel").value;
        var apiKey = "d8e8948c4d70b8c78827596832285f57";
        var appId = "ef5218c7";
        console.log("what");

        var url = `https://api.edamam.com/search?app_id=${appId}&app_key=${apiKey}&label=${dishName}&q=${ingredient}&healthLabels=${healthLabel}&count=3&hits=3from=0&to=3`;
        $.ajax({
            url: url,
            method: "GET",
        }).then(function (data) {
            console.log(data.hits[0].recipe.label);
            var lotto = Math.floor(Math.random() * 3);
            $('#recipeTitle').text(JSON.stringify(data.hits[lotto].recipe.label));

            console.log(data);

        });




    }
    getRecipe();
});