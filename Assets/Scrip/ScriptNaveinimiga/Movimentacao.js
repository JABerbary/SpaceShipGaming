
//var cloneExplosion : GameObject; 
//var explosion : GameObject;
var inicio = 13;
var fim=2;
var vel= 6;
var Ymax=-3.9;


function Start () {
//transform.position.y = 3; //  começa de novo 
 ///transform.position.z = inicio; //
   
}

function Update () {

//metas de dificuldade

transform.Translate (0,0,vel*Time.deltaTime);
		if (transform.position.z <= fim) { //ponto inicial (se ofr menort que 1 ele desaparece)
			
			transform.position.z = inicio; //  começa de novo 
			transform.position.y= Ymax;
			transform.position.x= Random.Range(3,-1); 
}}

function OnTriggerEnter(other : Collider){
   if(other.CompareTag("Player")){ 
            //comparetag utilizada para desaparecer
            transform.position.z = inicio; //  começa de novo 
            transform.position.y= Ymax;
            transform.position.x= Random.Range(3,-1); 
            GuiLabel.vida -=1;
            GuiLabelEnglish.Life -=1;
}
 if(other.CompareTag("TiroTag")){ 
            //comparetag utilizada para desaparecer
            transform.position.z = inicio; //  começa de novo 
            transform.position.y= Ymax;
            transform.position.x= Random.Range(3,-1); 
            GuiLabel.pontos += 1;
             GuiLabelEnglish.Scores +=1;
}}