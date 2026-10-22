var objArr=[];
var q_id=0;
var _id=0;
function addObject()
{
    let movie = document.getElementById("val1").value;
    let rating = document.getElementById("val2").value;

    let obj = {
        movie: movie,
        rating: rating
    };  

    objArr.push(obj);
    console.log(objArr); 
}

function toggleButtons(){

}
function modifyObject(){
    let movie = document.getElementById("val3").value;

}

function searchAndDisplay(){
    let query = document.getElementById("val3").value;

    for(var i=0; i<objArr.length; i++){
        if(objArr[i].movie === query){
            q_id =i;
            document.getElementById("val1").value = objArr[i].movie;
            document.getElementById("val2").value = objArr[i].rating;
            break;

        }
    }
}