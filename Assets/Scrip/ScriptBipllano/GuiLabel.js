#pragma strict

static var vida = 3;
public static var pontos = 0;
 


var MaxRecordeKey= "MaxRecordeK";
//var PontofinalKey= "PontofinalK";


/* function OnGUI () {
         var myStyle : GUIStyle = new GUIStyle();
         myStyle.fontSize= 80;
        
         GUI.Label (new Rect (Screen.width/2.1, Screen.height/1.1,0,0), "Vida: " +vida,myStyle); //cria um label via codigo 
		 GUI.Label (new Rect (Screen.width/10.6, Screen.height/1.1,0,0), "Pontos: "+pontos,myStyle);}*/
		 

		 
		 		 		 
		 
function Update () {	
	if(vida == 0){
	//FimDojogo.pontoFinal = pontos;
    FimDojogo.MaxRecorde = PlayerPrefs.GetInt(MaxRecordeKey);
    PontuacaFinal.pontoFinal =pontos;
	 Application.LoadLevel("Recordes");
	}
	
	
	}
	
	
	function OnDisable(){
         
         
         if(pontos > FimDojogo.MaxRecorde){
             PlayerPrefs.SetInt(MaxRecordeKey, pontos );
             PlayerPrefs.Save();
         }
         
          
         }
	