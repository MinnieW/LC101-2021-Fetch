window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const container = document.getElementById("container");
            json.sort((a,b) => (a.hoursInSpace < b.hoursInSpace) ? 1 : -1)
            let astroCounter = 0;
            while (astroCounter < json.length) {
                container.innerHTML += 
                `<div class="astronaut">
                    <div class="bio">
                    <h3>${json[astroCounter].firstName} ${json[astroCounter].lastName}<h3>
                    <ul>
                        <li>Hours in space: ${json[astroCounter].hoursInSpace}</li>
                        <li id="${json[astroCounter].id}">Active: ${json[astroCounter].active}</li>
                        <li>Skills: ${json[astroCounter].skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src=${json[astroCounter].picture}>
            </div>`
            if(json[astroCounter].active === true){
                const active = document.getElementById(String(json[astroCounter].id))
                active.style.color = "green"
            }
            astroCounter +=1   
            }
            document.querySelector("body").innerHTML += `<h3>Astronaut Count: ${astroCounter}</h3>`
            
        });
        
    });
});