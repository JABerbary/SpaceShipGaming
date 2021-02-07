#pragma strict

var explosionTiro :GameObject; 
var explosionT : GameObject;

function OnTriggerEnter (other : Collider) {
if(other.CompareTag("TiroInimigo")){
		
		explosionTiro  = Instantiate(explosionT,transform.position,transform.rotation)as GameObject;
		Destroy(explosionTiro);
			
				 
		}
	
		
}

