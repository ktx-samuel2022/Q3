function add(){
    var nome1 = document.getElementById("inputNome1").value;
    var nome2 = document.getElementById("inputNome2").value;
    localStorage.setItem("player1", nome1);
    localStorage.setItem("player2", nome2);
    window.location="game.html";
}
function send(){
     number1 = document.getElementById("number1").value;
     number2 = document.getElementById("number2").value;
    actual_awser = parseInt(number1)*parseInt(number2)
    question_number = "<h4>"+number1+'X'+number2+"</h4>";
    input_box = "<br>Resposta: <input type='number' id='input_check_box'>"
    check_button = "<br><br><button class='btn btn-info'onclick='check()'>Checar</button>"
    row=question_number+input_box+check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}