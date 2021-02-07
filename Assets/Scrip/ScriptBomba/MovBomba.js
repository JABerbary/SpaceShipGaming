#pragma strict

//var cloneExplosion : GameObject; 
//var explosion : GameObject;
var inicio = 13;
var fim=2;
var vel= 1;
//var impact : AudioClip ;

//var audio :AudioSource;


function Start () {
//transform.position.y = 3; //  começa de novo 
 //transform.position.z = inicio; //

}

function Update () {

//metas de dificuldade
 if(GuiLabel.pontos>=50){
  vel =5 ;
 }
 
if(GuiLabel.pontos>=100){
  vel = 7;
 }
 
 

transform.Translate (0,0,vel*Time.deltaTime);
		if (transform.position.z <= fim) { //ponto inicial (se ofr menort que 1 ele desaparece)
			
			transform.position.z = inicio; //  começa de novo 
		//	transform.position.x= Random.Range(4,-2); // queda do cometa de forma randomica 
}}

function OnTriggerEnter(other : Collider){
   if(other.CompareTag("Player")){ 
            //comparetag utilizada para desaparecer
            transform.position.z = inicio; //  começa de novo 
           // transform.position.x=Random.Range(4,-2); // queda do cometa de forma randomica 
            GuiLabel.vida -=1;
            GuiLabelEnglish.Life -=1;
}
 if(other.CompareTag("TiroTag")){ 
            //comparetag utilizada para desaparecer
            transform.position.z = inicio; //  começa de novo 
         //   transform.position.x= Random.Range(4,-1);// queda do cometa de forma randomica 
            GuiLabel.pontos += 1;
             GuiLabelEnglish.Scores +=1;

}}
         
