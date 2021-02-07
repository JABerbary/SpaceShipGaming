#pragma strict

var Menu : Texture;
var  VoltarJogo: Texture;
var SairDoJogo : Texture;
static var finalPoints= 0; 
 static var MaxRecorde = 0;
 
  function Update(){
            GetComponent.<GUIText>().text = "Best Score :" + MaxRecorde.ToString(); 
          
     }
	/*function OnGUI() {
		var myStyle : GUIStyle = new GUIStyle();
          myStyle.fontSize = 30;
		GUI.Label (Rect (Screen.width/2-90,Screen.height/2.4, 160, 20), "TotalPoints: "+ TotalPoints,myStyle);
		if (GUI.Button(Rect(Screen.width/2-120,Screen.height/2+30,80,80),Menu)){Application.LoadLevel("Mn");}
		if (GUI.Button(Rect(Screen.width/2+40,Screen.height/2+30,80,80),VoltarJogo)){Application.LoadLevel("NaveRedEnglish1");GuiLabelEnglish.Life=3;GuiLabelEnglish.Scores =0;}
		if (GUI.Button(Rect(Screen.width/2-40,Screen.height/2+150,80,80),SairDoJogo)){Application.Quit();}
		//	Debug.Log("Clicked the button with an image");
		
	}*/