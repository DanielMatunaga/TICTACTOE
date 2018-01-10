#pragma strict
public var GameManager : GameObject;
public var x: GameObject;
public var o: GameObject;
public var fill = "-";

function Start(){
	fill = "-";
}

function OnMouseDown(){
	
	if((GameManager.transform.GetComponent.<GameManager>().player == "x") && (fill == "-") && (GameManager.transform.GetComponent.<GameManager>().end == false)){
		fill = "x";
		GameObject.Instantiate(x, new Vector3(this.transform.position.x, this.transform.position.y, this.transform.position.z), Quaternion.identity);
		GameManager.transform.GetComponent.<GameManager>().check();
		//GameManager.transform.GetComponent.<AI>().playRandom();
		GameManager.transform.GetComponent.<AI>().playAI();
	}
	
	if((GameManager.transform.GetComponent.<GameManager>().player == "o") && (fill == "-") && (GameManager.transform.GetComponent.<GameManager>().end == false)){
		fill = "o";
		GameObject.Instantiate(o, new Vector3(this.transform.position.x, this.transform.position.y, this.transform.position.z), Quaternion.identity);
		GameManager.transform.GetComponent.<GameManager>().check();
		//GameManager.transform.GetComponent.<AI>().playRandom();
		GameManager.transform.GetComponent.<AI>().playAI();
	}
}