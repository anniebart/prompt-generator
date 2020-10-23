const input = document.querySelector("input");
const date = document.querySelector("#date");
const root = "root@localhost ~ % "
const clear = document.querySelector(".clear")
const lastInputs = []
const prompt = document.querySelector(".prompt")
const prompts = ['FTP Client','HTTP Server','Build a simple operating system','Build a web scraper','Bandwidth monitor','Implement a cipher','Create a text message downtime alerter',
'A net worth calculator and tracker','A tax forecaster','A deal finder','An expense tracker','A financial independence calculator','A bill splitter',
'A random name generator','Conway’s Game of Life',
'A procedurally generated map maker','A character generator','Interactive fiction',
'An unbeatable Tic-Tac-Toe engine','A chess engine','A niche chatbot','A spam classifier',
'A movie showtime finder','A spoiler blocker', 'A prompt generator', 'A portfolio site',
'Pixel art generator','Music suggestion tool','Temperature logger','Microlearning app','Slack bot','Daily desktop background',
'Lunch pickerDate planner','Tool to simplify your email newsletters‘','Bring your umbrella’ notifier','Collection tracker',
'Create and automatically update a data set', 'a pac-man clone'];



window.addEventListener("load", function(){
    input.focus()
    date.textContent = new Date();

})
 let count = Math.floor(Math.random() * prompts.length)
 console.log(count)

input.addEventListener("keyup", function(e){
    if (e.key === 'Enter'){
        lastInputs.push(input.value)
        let line = document.createElement("p")
          prompt.append(line)
       
        line.textContent = root + input.value;
       
        if (input.value === ''){
            let idea = document.createElement("p");
            idea.textContent = ""
             prompt.append(idea);
        }

       else if (input.value === 'prompt generate'){
          console.log(prompts[count])
          console.log(count)
           let idea = document.createElement("p");
           idea.textContent = "Design prompt: " + prompts[count].toLowerCase()
            prompt.append(idea);
            idea.classList = "indent"
            if (count < prompts.length){count++;} else {count = 0}
       }
    else if (
        input.value === 'clear'){
        line.textContent = "";
        clear.textContent = ""
        prompt.textContent = ""

       }

       else if (input.value === 'man prompt generate'){
        let idea = document.createElement("p");
        idea.textContent = "Man prompt generator goes here!"
        prompt.append(idea);
        
       }

      else {
        let idea = document.createElement("p");
        prompt.append(idea);
           idea.textContent = "Command not found: "  +input.value
           idea.classList = "indent"
           idea.style.color = "red";
           prompt.append(idea);
       }
      

       input.value = "";
    }
})


