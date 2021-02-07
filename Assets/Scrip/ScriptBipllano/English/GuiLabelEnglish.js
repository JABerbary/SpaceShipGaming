#pragma strict

static var Life = 3;
public static var Scores = 0;
var MaxRecordeKey= "MaxRecordeK";

/*function OnGUI () {
         var myStyle : GUIStyle = new GUIStyle();
          myStyle.fontSize = 30;
		GUI.Label (Rect (Screen.width/2-160, Screen.height/1.1, 120, 55), "Life: " +Life,myStyle); //cria um label via codigo 
		 GUI.Label (Rect (Screen.width/2-40, Screen.height/1.1,150, 75), "Scores: "+Scores,myStyle);
		 
		
	}*/
	
function Update () {	
	if(Life == 0){
	//FimDoJogoEN.TotalPoints = Scores;
	
	FimDoJogoEN.MaxRecorde = PlayerPrefs.GetInt(MaxRecordeKey);
	FinalPoints.finalPoints=Scores;
	Application.LoadLevel("RecordEnglishVersion");
	}
	
	}
	function OnDisable(){
         
         
         if(Scores > FimDoJogoEN.MaxRecorde){
             PlayerPrefs.SetInt(MaxRecordeKey, Scores );
             PlayerPrefs.Save();
         }
         }
	