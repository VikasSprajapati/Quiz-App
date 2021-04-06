// ----global scoped-----
let rightAns,
rightNumber = 0,
falseNumber = 0;

document.addEventListener('DOMContentLoaded',function(){
    AddQuestion();
    
    eventListeners();
});

eventListeners = () =>{

}
AddQuestion = ()=>{
    const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy';  /*opentdb api for questions*/
    fetch(url)
        .then(data => data.json())
        .then(result => {
            console.log(result);
        })


}