let inputRecherche = document.querySelector('.form-control');
let inputSearch = document.getElementById('inputSearch')
let lesCard = document.querySelector('.lesCard');
let url =  "https://fr.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

async function lesRecherche(recherche){
    const reponse = await fetch(`${url}${recherche}`);
    const data = await reponse.json();
  
     if (data.query.search.length == 0) {
        return alert('errer');
      } else {
        afficherResultas(data.query.search);
        
      } 
      console.log(data);
}
function afficherResultas(results){
    results.forEach((result)  => {
        let resultURL = `https://fr.wikipedia.org/?curid=${result.pageid}`;
        console.log(resultURL);
        lesCard.innerHTML+=`
            <div class="col-md-3 col-sm-12">
                <div class="card py-5 mx-1">
                <p class="text-center"><a href="${resultURL}">${result.title}</a></p>
                <p>${result.snippet}</p>
                <p><a href="${resultURL}">Voir plus</a></p>
                </div>
            </div>
        `
       //console.log(result);
    });
} 
inputRecherche.addEventListener('submit', (e) => {
        e.preventDefault();
        let searchValue = inputSearch.value;
      if(searchValue !== ''){
            lesRecherche(searchValue)
            searchValue=''
        } 
        
}); 
