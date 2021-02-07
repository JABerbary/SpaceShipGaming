#pragma strict

var vel = 100;



function Update () {

  transform.Translate(0,vel*Time.deltaTime,0); //velocidade do gameobjectbala
 
 if(transform.position.z >=10){  //determinaçao da desttruiçaoda bala a partir do ponto Y
   Destroy(gameObject);
 }


}
