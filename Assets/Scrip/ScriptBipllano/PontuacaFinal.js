#pragma strict



/*var Menu : Texture;
var  VoltarJogo: Texture;
var SairDoJogo : Texture;*/


static var pontoFinal = 0; 


 
 function Start(){
/*GetComponent.<GUIText>().text = "Pontuaçao :" + GuiLabel.pontos.ToString();*/
//MaxRecorde = PlayerPrefs.GetInt(MaxRecordeKey );
}	

  function Update(){
            GetComponent.<GUIText>().text = "Final Score :" + pontoFinal.ToString(); 
            
     }
     
     
 /*function OnGUI() {
		var myStyle : GUIStyle = new GUIStyle();
          myStyle.fontSize = 80;
          
		GUI.Label (Rect (Screen.width/8.3,Screen.height/3.3, 160, 20), "Total de pontos: "+ pontoFinal,myStyle);
		/*if (GUI.Button(Rect(Screen.width/2-120,Screen.height/2+30,80,80),Menu)){Application.LoadLevel("Menu");}
		if (GUI.Button(Rect(Screen.width/2+40,Screen.height/2+30,80,80),VoltarJogo)){Application.LoadLevel("NaveRed1");GuiLabel.vida=3;GuiLabel.pontos =0;}
		if (GUI.Button(Rect(Screen.width/2-40,Screen.height/2+150,80,80),SairDoJogo)){Application.Quit();}
		//	Debug.Log("Clicked the button with an image")};*/