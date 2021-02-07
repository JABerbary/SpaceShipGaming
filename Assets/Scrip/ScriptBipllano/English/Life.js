#pragma strict

static var MaxRecorde = 0;
static var Life = 0; 


 
 function Start(){
/*GetComponent.<GUIText>().text = "Pontuaçao :" + GuiLabel.pontos.ToString();*/
//MaxRecorde = PlayerPrefs.GetInt(MaxRecordeKey );
}	

  function Update(){
            GetComponent.<GUIText>().text = "Life :" + GuiLabelEnglish.Life; 
            
     }