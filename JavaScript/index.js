document.addEventListener("DOMContentLoaded", function() {
    debugger

    const url= "https://gorest.co.in/public-api/posts";
    var container = document.getElementById("container");

    fetch(url).then(response =>{
        return response.json();
    }).then(result =>{
        debugger
        console.log(result)
    
    
    var templates = result.data.map(function(item, indice)  {

        return  `<a href=${item.imagem} target='_blank'>
                    <div>
                        <span>Card nº ${item.id}</span>
                        <h2>${item.user_id}</h2>
                        <h3>${item.title}</h3>
                        <p>${item.body}</p>
                        
                    </div> 
                </a>`;


    });
    container.innerHTML += templates.join("");
});
})