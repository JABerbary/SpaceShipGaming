using UnityEngine;
using System.Collections;

public class TiroInimigo : MonoBehaviour {


	
	public float vel = 50;


	
	
	void Update () {
		
		transform.Translate(0,vel*Time.deltaTime,0); //velocidade do gameobjectbala
		
		if(transform.position.z <=-1){  //determinaçao da desttruiçaoda bala a partir do ponto Y
			Destroy(gameObject);

		}

	
	}
	}
	
		
		

	

