const textarray = ["Welcome, you are at NP Chess SIG","Welcome, you are at NP Chinese Chess SIG", "Welcome, you are at NP XiangQi SIG"]
const index = Math.floor(Math.random() * 3);
const text = textarray[list];
for (let x = 0; x < text.length; x++){
    document.querySelector('.maintext'),textcontent += text[x];
}