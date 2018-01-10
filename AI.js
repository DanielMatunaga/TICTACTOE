
var squares : GameObject[];
var plays : GameObject[];
public var x: GameObject;
public var o: GameObject;
public var huPlayer = " ";
public var aiPlayer = " ";

function playRandom(){
squares = new GameObject[9];
plays = new GameObject[9];
squares[0] = GameObject.Find("00");
squares[1] = GameObject.Find("01");
squares[2] = GameObject.Find("02");
squares[3] = GameObject.Find("10");
squares[4] = GameObject.Find("11");
squares[5] = GameObject.Find("12");
squares[6] = GameObject.Find("20");
squares[7] = GameObject.Find("21");
squares[8] = GameObject.Find("22");

var cont = 0;
for(var i: int = 0; i < squares.Length - 1; i ++){
	if(squares[i].GetComponent.<Onclick>().fill == "-"){
		plays[cont] = squares[i];
		cont++;
	}
}

	if((cont > 0) && (this.transform.GetComponent.<GameManager>().end == false)){
	var rand = Random.Range(0,cont);

		if(this.transform.GetComponent.<GameManager>().player == "x"){
			GameObject.Instantiate(o, new Vector3(plays[rand].transform.position.x, plays[rand].transform.position.y, plays[rand].transform.position.z), Quaternion.identity);
			plays[rand].GetComponent.<Onclick>().fill = "o";
			this.transform.GetComponent.<GameManager>().check();
		} else{
			GameObject.Instantiate(x, new Vector3(plays[rand].transform.position.x, plays[rand].transform.position.y, plays[rand].transform.position.z), Quaternion.identity);
			plays[rand].GetComponent.<Onclick>().fill = "x";
			this.transform.GetComponent.<GameManager>().check();
		}
	}
}

function playAI(){

squares = new GameObject[9];
squares[0] = GameObject.Find("00");
squares[1] = GameObject.Find("01");
squares[2] = GameObject.Find("02");
squares[3] = GameObject.Find("10");
squares[4] = GameObject.Find("11");
squares[5] = GameObject.Find("12");
squares[6] = GameObject.Find("20");
squares[7] = GameObject.Find("21");
squares[8] = GameObject.Find("22");

var board = array();
var ret = minimax(board,aiPlayer);
if(emptyIndexies(board).length != 0){
var pos = ret.index;

		if(this.transform.GetComponent.<GameManager>().player == "x"){
			GameObject.Instantiate(o, new Vector3(squares[pos].transform.position.x, squares[pos].transform.position.y, squares[pos].transform.position.z), Quaternion.identity);
			squares[pos].GetComponent.<Onclick>().fill = "o";
			this.transform.GetComponent.<GameManager>().check();
		} else{
			GameObject.Instantiate(x, new Vector3(squares[pos].transform.position.x, squares[pos].transform.position.y, squares[pos].transform.position.z), Quaternion.identity);
			squares[pos].GetComponent.<Onclick>().fill = "x";
			this.transform.GetComponent.<GameManager>().check();
		}
}
}

function array(){
squares = new GameObject[9];
squares[0] = GameObject.Find("00");
squares[1] = GameObject.Find("01");
squares[2] = GameObject.Find("02");
squares[3] = GameObject.Find("10");
squares[4] = GameObject.Find("11");
squares[5] = GameObject.Find("12");
squares[6] = GameObject.Find("20");
squares[7] = GameObject.Find("21");
squares[8] = GameObject.Find("22");

var board = new Array();

	for(var i: int = 0; i < squares.Length; i ++){
		if(squares[i].GetComponent.<Onclick>().fill == "-"){
			board.push(i);
		}
		if(squares[i].GetComponent.<Onclick>().fill == "x"){
			board.push("x");
		}
		if(squares[i].GetComponent.<Onclick>().fill == "o"){
			board.push("o");
		}
	}
	return board;
	
}


function emptyIndexies(board){
	var empty = new Array();
	for(var i: int = 0; i < board.length; i ++){
		if((board[i] != "x") && (board[i] != "o")){
			empty.push(i);
		}
	}
	return empty;
}



function winning(board, player){
 if (
 (board[0] == player && board[1] == player && board[2] == player) ||
 (board[3] == player && board[4] == player && board[5] == player) ||
 (board[6] == player && board[7] == player && board[8] == player) ||
 (board[0] == player && board[3] == player && board[6] == player) ||
 (board[1] == player && board[4] == player && board[7] == player) ||
 (board[2] == player && board[5] == player && board[8] == player) ||
 (board[0] == player && board[4] == player && board[8] == player) ||
 (board[2] == player && board[4] == player && board[6] == player)
 ) {
 return true;
 } else {
 return false;
 }
}

public class move{
	public var index:int;
	public var score:int;
}

function minimax(newBoard, player): Object{
  
  var availSpots = emptyIndexies(newBoard);
  var ret = new move();

  if (winning(newBoard, huPlayer)){
  	 ret.score = -10;
     return ret;
  }
	else if (winning(newBoard, aiPlayer)){
	ret.score = 10;
    return ret;
	}
  else if (availSpots.length == 0){
  	ret.score = 0;
  	return ret;
  }
  
  var moves = new Array();

  for (var i = 0; i < availSpots.length; i++){

	var move = new move();
  	move.index = newBoard[availSpots[i]];

    newBoard[availSpots[i]] = player;	

    if (player == aiPlayer){
      var g = minimax(newBoard,huPlayer);
      move.score = g.score;
    }
    else{
      var h = minimax(newBoard,aiPlayer);
      move.score = h.score;
    }

	newBoard[availSpots[i]] = move.index;
	moves.push(move);
  }

  var bestMove = 0;
  var bestScore = 0;
  if(player === aiPlayer){
    bestScore = -10000;
    for(var j = 0; j < moves.length; j++){
      if(moves[j].score > bestScore){
        bestScore = moves[j].score;
        bestMove = j;
      }
    }
  }else{


    bestScore = 10000;
    for(var k = 0; k < moves.length; k++){
      if(moves[k].score < bestScore){
        bestScore = moves[k].score;
        bestMove = k;
      }
    }
  }

  return moves[bestMove];
}