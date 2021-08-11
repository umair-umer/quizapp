function sigUp(){
    let name=document.getElementById("name").value
    localStorage.setItem("name",name)
    let email=document.getElementById("mail").value;
    localStorage.setItem("email",email)
    let password=document.getElementById("password").value;
    localStorage.setItem("password",password)
      user={
        name:name,
        email :email,
        password: password,
    
    }
    firebase.database().ref('quizapp').push(user)
     firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    window.location.href="sigin.html"
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error)
    // ..
  });

  
}
function sigi(){
     let email =document.getElementById("mail").value;
     let password=document.getElementById("password").value;
     firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.href="startquiz.html"
    
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    
     
}

function workpage(){
    
    window.location.href="work.html"
    start();

}
start();
var msc=0;
var sec=0;
var min=0;
var interval;
function start(){
    mine=document.getElementById("min")
    sce=document.getElementById("sec")
      mil= document.getElementById("msc")
 
    interval=setInterval(function(){
        msc++;
        
        
       if(msc >= 100){
           sec++
           sce.innerHTML =sec
           msc =0
       }
       if(sec >= 60){
           min++
           mine.innerHTML =min
           sec=0
       }
       if(min >= 2){
        
        clearInterval(interval)
    }

         
    },10)


    
}

// function getdata(){
//         firebase.database().ref('quizapp').once('value',function(data){
//             console.log(data.val())
//         })
//     }



let questions =[
        {
            questons:" Q1 what is my age",
            answer: 25,
            Options:[
                25,
                34,
                45,
                95,

            ]
        },
        {
            questons:"Q2 what is my fullname",
            answer: "umair umer",
            Options:[
                "umer akmal",
                "umer gul",
                "umair umer",
                "akmal bhai"

            ]
        },
        {
            questons:" Q3  what is my full form of uk",
            answer: "umer kot",
            Options:[
                "united king",
                "umer kot",
                "u bakery",
                "mean"

            ]
        },
            

    ]
    

    function showquestion(e){
        let qelement=document.getElementById("questionss")
          qelement.innerHTML=questions[e].questons;
          let opelement=document.getElementsByClassName("opelemnt")
            for(var i=0; i<opelement.length;i++){
                opelement[i].innerHTML=questions[e].Options[i]

            }
    }
     var score=0;
    var questioncounter=0;
    function nextQuestion(e){
       
        valid(questioncounter);
        questioncounter++;
        if(questioncounter == 3){
            window.location.href="end.html"
        }
     

        
        showquestion(questioncounter)
        removeActiveClass()
       
       
        

    }
    function PutActiveClass(e){

        removeActiveClass()
        e.classList.add("active")
        
        
        
        

    }
    function removeActiveClass(){
        act=document.getElementsByClassName("active")
         for(var i=0;i<act.length;i++){
             act[i].classList.remove("active")
         }
    }
    
      function valid(e){
          let active=document.getElementsByClassName("active");
          if (active[0].innerHTML == questions[e].answer){
              score+=10;
            
          }
          localStorage.setItem("score",score)
         if(questioncounter == 30){
             window.location.href="end.html"
         }
          }
      function fb(){
          
      }    
      