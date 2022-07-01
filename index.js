//x or 0
//change x and 0
//check won

let player ='X';
let gameOver = false;

const changePlayer = () => {
    return player ==='X'? "0" : "X";
}

const checkWon = () => {
    let boxTexts = document.getElementsByClassName("boxText");
    let winPos =[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    winPos.forEach(ele=>{
        if(boxTexts[ele[0]].innerText==boxTexts[ele[1]].innerText &&
            boxTexts[ele[1]].innerText==boxTexts[ele[2]].innerText&&
            boxTexts[ele[0]].innerText!==""){
                document.getElementById("result").innerText = 
                boxTexts[ele[0]].innerText + "  WON";
                gameOver = true;
                document.querySelector("img").style.width="100px"
            } 
    })
}
     //if(boxTexts[ele[0]].innerText==='X'|| boxTexts[ele[0]].innerText==='0'&&
       //     boxTexts[ele[1]].innerText==='X'||boxTexts[ele[1]].innerText==='0'&&
         //   boxTexts[ele[2]].innerText==='X'||boxTexts[ele[2]].innerText==='0'&&
           // boxTexts[ele[3]].innerText==='X'||boxTexts[ele[3]].innerText==='0'&&
            //boxTexts[ele[4]].innerText==='X'||boxTexts[ele[4]].innerText==='0'&&
       //     boxTexts[ele[5]].innerText==='X'||boxTexts[ele[5]].innerText==='0'&&
         //   boxTexts[ele[6]].innerText==='X'||boxTexts[ele[6]].innerText==='0'&&
           // boxTexts[ele[7]].innerText==='X'||boxTexts[ele[7]].innerText==='0'&&
            //boxTexts[ele[8]].innerText==='X'||boxTexts[ele[8]].innerText==='0') {
            //document.getElementById('result').innerText = "  Match Tie";
            //}

let boxes = document.getElementsByClassName("box");
//console.log(boxes);
Array.from(boxes).forEach(box=>{
    let boxText = box.querySelector(".boxText");

    box.addEventListener("click", ()=>{
        if(boxText.innerText ==="" && !gameOver) {
        boxText.innerText = player;
        player = changePlayer();
        checkWon();
            document.getElementsByClassName("player")[0].innerText = player;
    }
    });
});

//reset button
let reset = document.getElementsByClassName("reset")[0];
//console.log(reset);
reset.addEventListener("click",()=>{
    let boxTexts = document.querySelectorAll(".boxText");
    boxTexts.forEach((boxText)=>{
        boxText.innerText="";
    });
    player = "X";
    gameOver = false;
    document.querySelector("img").style.width="0px"
});


//implement draw
//vanish the gif when start is pressed
//https://github.com/thProfessor/KataCircle