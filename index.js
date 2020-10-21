const input = document.querySelector("input");
const date = document.querySelector("#date");
const root = "root@localhost ~ % "

const prompt = document.querySelector(".prompt")



window.addEventListener("load", function(){
    input.focus()
    date.textContent = new Date();

})

input.addEventListener("keyup", function(e){
    if (e.key === 'Enter'){
        
        let line = document.createElement("p")
          prompt.append(line)
       
        line.textContent = root + input.value;
       
       if (input.value === 'prompt generate'){
           console.log("it worked!")
           let idea = document.createElement("p");
           idea.textContent = "This is a prompt!"
        prompt.append(idea);
        idea.classList = "indent"
       }
      else{
        let idea = document.createElement("p");
           idea.textContent = "Command not found"
           idea.classList = "indent"
           idea.style.color = "red";
           prompt.append(idea);
       }
      

       input.value = "";
    }
})