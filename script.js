const acessKey = "Rq_Kg4y9D4fgQp16tWES8CEMfKUKTsNvkupbnyqU7vU";
const SearchForm = document.getElementById("search-form");
const SearchBox = document.getElementById("search-box");
const SearchResults = document.getElementById("search-results");
const SearchBtn = document.getElementById("btn");
//Rq_Kg4y9D4fgQp16tWES8CEMfKUKTsNvkupbnyqU7vU : acess key unsplash 
let keyword="";
let page = 1;

async function searchImage(){
    keyword = SearchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acessKey}&per_page=12`;
    // Fetching an API key and then having the data in our web application.
    const response = await fetch(url)
    const data = await response.json();
    //This 'if' is added as when cat is search so its pics are uploaded then if we search birds so it would show birds pics so in order to clear cat pics we have done this.
    if(page===1){
        SearchResults.innerHTML = "";
    }
    
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");//Anchor tag banaya as wo image pe click hua toh wo image ko unsplash ke through direct karega .
        imageLink.href = result.links.html;
        imageLink.target = "_blank";//Becuase of this image will be open in new tab.
        imageLink.appendChild(image);// This means the image will be inside the anchor tag.
        SearchResults.appendChild(imageLink);//This means the imageLink will be inside the search results.
    })
    btn.style.display = "block";
}
// Yaha eventlistener add kiya hai search button ke click karne ke liye.
SearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});

SearchBtn.addEventListener("click", () => {
    page++;
    searchImage();
});