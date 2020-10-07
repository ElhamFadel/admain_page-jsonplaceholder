let user_id = 5;
const search = document.getElementById('search');
const req_1 = document.getElementById('req_1');
const req_2 = document.getElementById('req_2');
const req_3 = document.getElementById('req_3');
const remove = document.getElementById('remove');
const result = document.querySelector('.resul');
const user = document.getElementById('user')
search.addEventListener("input",()=>{
  user.textContent = (!isNaN(search.value))? search.value + " user" :" unknown user" ;
});
function dataFetch(user_id){
    if(!isNaN(user_id)){
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user_id}`)
  .then(response => response.json())
  .then((json)=>{
    result.textContent = "";
    let div = document.createElement('div');
    div.classList.add('box');
    if(json.length!=0){
    json.forEach(element => {
        creatResult(element.id,element.title,element.completed,div);
    });
  }else{
    message_no_result();
  }
     
result.appendChild(div);
  })
  
    }else{
      alert("Please,Enter Number in box !");
    }
}
//dataFetch(user_id);
const req = document.getElementById('req_1').checked;
const button = document.getElementById('btn');
document.querySelector('#form').onsubmit = function(e) {
    e.preventDefault();
    dataFetch(search.value);
    //console.log(req_1.checked!==null)
  }
  //==================================================
  function creatResult(id,bookName,status_request,big_parent){
    let parent=  document.createElement('div');
    parent.classList.add('child_box');
      if(req_1.checked){
       let p =  document.createElement('p');
       p.textContent = "ID for book : "+ id ;
       parent.appendChild(p);
       
      } 
      if(req_2.checked){
        let p =  document.createElement('p');
        p.textContent = "Title for Book : "+ bookName ;
        //append
        parent.appendChild(p);
    }
    if(req_3.checked){
        let p =  document.createElement('p');
        let txt = "The request is not completed yet";
        if(status_request){
            txt = "complete";
        }
        p.textContent = "Status of Request : "+ txt ;
        //append
        parent.appendChild(p);
    }
    big_parent.appendChild(parent);
      }
remove.addEventListener('click',(e)=>{
  e.preventDefault();
  //هنا ملاحظة ع السريع لازم لازم تحذفي الايفنت تبع الكليك او تحذفي الفاليو 
  search.value = "";
  req_1.checked = false;
  req_2.checked = false;
  req_3.checked = false;
  result.textContent = "";
});

function message_no_result(){
   let childNoRes = document.createElement("p");
   childNoRes.textContent="Sorry no Result";
    result.appendChild(childNoRes);
}
