#pragma strict

public var player = " ";
public var panel: GameObject;
var squares : GameObject[];
public var canvas_x: GameObject;
public var canvas_o: GameObject;
public var canvas_TIE: GameObject;
public var end;

function Start () {
panel = GameObject.Find("Panel");
squares = new GameObject[10];
end = false;
}

function check () {
	end = false;
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
		if(squares[i].GetComponent.<Onclick>().fill != "-"){
			cont++;
		}
	}
	print(cont);
	if(cont == 9){
		canvas_TIE.SetActive(true);
		end = true;
	}
		for(var j: int = 0; j < 9; j = j + 3){
			if(squares[0 + j].GetComponent.<Onclick>().fill == "x"){
				if(squares[1 + j].GetComponent.<Onclick>().fill == "x"){
					if(squares[2 + j].GetComponent.<Onclick>().fill == "x"){
						canvas_x.SetActive(true);
						end = true;
					}
				}
			}
		}

		for(var k: int = 0; k < 9; k = k + 3){
			if(squares[0 + k].GetComponent.<Onclick>().fill == "o"){
				if(squares[1 + k].GetComponent.<Onclick>().fill == "o"){
					if(squares[2 + k].GetComponent.<Onclick>().fill == "o"){
						canvas_o.SetActive(true);
						end = true;
					}
				}
			}
		}
		
		for(var l: int = 0; l < 3; l = l + 1){
			if(squares[0 + l].GetComponent.<Onclick>().fill == "x"){
				if(squares[3 + l].GetComponent.<Onclick>().fill == "x"){
					if(squares[6 + l].GetComponent.<Onclick>().fill == "x"){
						canvas_x.SetActive(true);
						end = true;
					}
				}
			}
		}
		
		for(var m: int = 0; m < 3; m = m + 1){
			if(squares[0 + m].GetComponent.<Onclick>().fill == "o"){
				if(squares[3 + m].GetComponent.<Onclick>().fill == "o"){
					if(squares[6 + m].GetComponent.<Onclick>().fill == "o"){
						canvas_o.SetActive(true);
						end = true;
					}
				}
			}
		}
		
		if(squares[0].GetComponent.<Onclick>().fill == "o"){
			if(squares[4].GetComponent.<Onclick>().fill == "o"){
				if(squares[8].GetComponent.<Onclick>().fill == "o"){
						canvas_o.SetActive(true);
						end = true;
				}
			}
		}
			
		if(squares[0].GetComponent.<Onclick>().fill == "x"){
			if(squares[4].GetComponent.<Onclick>().fill == "x"){
				if(squares[8].GetComponent.<Onclick>().fill == "x"){
						canvas_x.SetActive(true);
						end = true;
				}
			}
		}
		
		if(squares[2].GetComponent.<Onclick>().fill == "o"){
			if(squares[4].GetComponent.<Onclick>().fill == "o"){
				if(squares[6].GetComponent.<Onclick>().fill == "o"){
						canvas_o.SetActive(true);
						end = true;
				}
			}
		}
			
		if(squares[2].GetComponent.<Onclick>().fill == "x"){
			if(squares[4].GetComponent.<Onclick>().fill == "x"){
				if(squares[6].GetComponent.<Onclick>().fill == "x"){
						canvas_x.SetActive(true);
						end = true;
				}
			}
		}
}

function x(){
player = "x";
panel.SetActive(false);
this.transform.GetComponent.<AI>().huPlayer = "x";
this.transform.GetComponent.<AI>().aiPlayer = "o";
}

function o(){
player = "o";
panel.SetActive(false);
this.transform.GetComponent.<AI>().playRandom();
this.transform.GetComponent.<AI>().huPlayer = "o";
this.transform.GetComponent.<AI>().aiPlayer = "x";
}