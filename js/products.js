//array donde se cargarán los datos recibidos:
let categoriesArray = [];

//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function showCategoriesList(array){
    
    const htmlContentToAppend = array.products.map(prod => {
        return `
            <div class="table">
                <div>
                    <img src="${prod.image}" class="tableImg" alt="aa" width="150">
                </div>
                <span class="item"> ${prod.name} </span>
                <span class="item">${prod.description}</span>
                <span class="item">${prod.currency} ${prod.cost}</span>
                <span class="item">${prod.soldCount}</span>
            </div>
            `;
        }).join("");
        console.log(array);

        
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
     
}


/* 
EJECUCIÓN:

-Al cargar la página se llama a getJSONData() pasándole por parámetro la dirección para obtener el listado.
-Se verifica el estado del objeto que devuelve, y, si es correcto, se cargan los datos en categoriesArray.
-Por último, se llama a showCategoriesList() pasándole por parámetro categoriesArray.

*/

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            showCategoriesList(categoriesArray);
        }
    });
});