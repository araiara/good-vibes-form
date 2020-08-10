function retrieve(event) {
    event.preventDefault();

    var username = document.getElementById('name').value;
    var userEmail = document.getElementById('email').value;
    var rateNum = document.getElementById('number').value;
    var userExperience = document.getElementById('description').value;
    var excited = document.getElementById('excited');
    var humbled = document.getElementById('humbled');
    var elated = document.getElementById('elated');
    var loved = document.getElementById('loved');
    var enthusiastic = document.getElementById('enthusiastic');

    if (username === "") {
        alert("Please enter your name.");
    }
    
    else if (userEmail === "") {
        alert("Please enter your email.");
    }
    
    else if (rateNum === "") {
        alert("Please enter the number.");
    }
    
    else if (userExperience === "") {
        alert("Please enter your experience.");
    }

    else {
        if (excited.checked || humbled.checked || elated.checked || loved.checked || enthusiastic.checked ) {
            var info = {
                name: username,
                email: userEmail,
                number: rateNum,
                location: getComboChoice(),
                time: getRadioTime(),
                emotions: getCheckEmotions(),
                experience: userExperience
            }
            console.log(info);
            alert("Your details have been submitted successfully.");
            clear();
        } 
        else {
            alert("Please select atleast one emotion.");
        }     
    }
}

function clear() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('number').value = "";
    document.getElementById('description').value = "";
    document.getElementById('home').selected = true;
    document.getElementById('morning').checked = true;
    document.getElementById('excited').checked = false;
    document.getElementById('humbled').checked = false;
    document.getElementById('elated').checked = false;
    document.getElementById('loved').checked = false;
    document.getElementById('enthusiastic').checked = false;
}

function getComboChoice() {
    var choice = document.getElementById('choice');
    var index = choice.selectedIndex;
    return choice[index].value;
    //console.log("Choice: ", result)
}

function getRadioTime() {
    var time = document.getElementsByName('time');

    for (let i = 0; i < time.length; i++) {      
        if (time[i].checked) {
            //console.log("Time: ", time[i].value)
            return time[i].value;
        }
    }
}

function getCheckEmotions() {
    var emotionList = [];
    var emotions = document.getElementsByName('emotions');

    for (let i = 0; i < emotions.length; i++) {      
        if (emotions[i].checked) {
            //console.log("Emotions: ", emotions[i].value)
            emotionList.push(emotions[i].value)
        }
    }

    return emotionList;
}