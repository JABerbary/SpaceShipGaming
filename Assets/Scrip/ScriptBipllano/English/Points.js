#pragma strict

 static var MaxRecorde = 0;
static var TotalPoints = 0; 


 
 function Start(){
/*GetComponent.<GUIText>().text = "Pontuaçao :" + GuiLabel.pontos.ToString();*/
//MaxRecorde = PlayerPrefs.GetInt(MaxRecordeKey );
}	

  function Update(){
            GetComponent.<GUIText>().text = "Points :" + GuiLabelEnglish.Scores; 
            
     }