#pragma strict

static var finalPoints = 0; 


 
 function Start(){
/*GetComponent.<GUIText>().text = "Pontuaçao :" + GuiLabel.pontos.ToString();*/
//MaxRecorde = PlayerPrefs.GetInt(MaxRecordeKey );
}	

  function Update(){
            GetComponent.<GUIText>().text = "FinalPoints :" + finalPoints.ToString(); 
            
     }