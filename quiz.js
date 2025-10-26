const checkAnswer = () =>{
        const correctAnswer = 4;
        const userOption = document.querySelector('input[name="quiz"]:checked');
       
        const feedback = document.getElementById('feedback');

            if(!userOption){
                feedback.textContent = "Please select a valid option";
                 feedback.style.color="orange";
                 return;
            }

         const userAnswer = Number(userOption.value);

         if(correctAnswer === userAnswer){
            feedback.textContent = "Correct! Well done.";
            feedback.style.color="green";
            
         }
         else{
            feedback.textContent ="That's incorrect. Try again!";
             feedback.style.color="red";
         }
     };

     const submitButton = document.getElementById('submit-answer'); 
     submitButton.addEventListener("click", checkAnswer);