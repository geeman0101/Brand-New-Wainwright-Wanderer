let playerName = ""; let score = 0; // Wainwright data with height and parking options const wainwrights = [ { name: "Helvellyn", height: "950m", parking: ["Swirls Car Park", "Glenridding Car Park"] }, { name: "Scafell Pike", height: "978m", parking: ["Wasdale Head Car Park", "Seathwaite Parking"] }, { name: "Catbells", height: "451m", parking: ["Hawse End Car Park", "Keswick Parking"] }, { name: "Blencathra", height: "868m", parking: ["Threlkeld Village Parking", "Blencathra Field Centre"] } ]; // Weather conditions const weatherConditions = ["Sunny", "Rainy", "Foggy", "Snowy", "Windy"]; function startGame() { playerName = document.getElementById("player-name").value; if (playerName.trim() === "") { alert("Please enter your name!"); return; } document.getElementById("start-screen").style.display = "none"; document.getElementById("game-screen").style.display = "block"; document.getElementById("welcome-message").innerText = `Welcome, ${playerName}! What would you like to do?`; } function chooseHike() { const chosenFell = wainwrights[Math.floor(Math.random() * wainwrights.length)]; const currentWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)]; document.getElementById("game-content").innerHTML = ` <p>You decide to hike <strong>${chosenFell.name}</strong>!</p> <p>Height: <strong>${chosenFell.height}</strong></p> <p>Nearby parking: <strong>${chosenFell.parking.join(", ")}</strong></p> <p>The weather today is <strong>${currentWeather}</strong>.</p> <button onclick="askQuestion()">Continue</button> `; } function askQuestion() { const questions = [ { question: "What should you pack for a rainy hike?", correct: "Waterproofs" }, { question: "Which is the highest Wainwright?", correct: "Scafell Pike" }, { question: "What's the best way to navigate in fog?", correct: "Map and compass" } ]; const randomQuestion = questions[Math.floor(Math.random() * questions.length)]; const userAnswer = prompt(randomQuestion.question); if (userAnswer && userAnswer.toLowerCase() === randomQuestion.correct.toLowerCase()) { score += 10; alert("Correct! You earn 10 points."); } else { alert("Wrong answer! No points this time."); } document.getElementById("game-content").innerHTML = ` <p>Your current score: <strong>${score}</strong></p> <button onclick="chooseHike()">Hike Again</button> <button onclick="rest()">Rest</button> `; } function rest() { score += 5; document.getElementById("game-content").innerHTML = ` <p>You take a break and gain 5 points.</p> <p>Your current score: <strong>${score}</strong></p> <button onclick="chooseHike()">Hike Again</button> `; }