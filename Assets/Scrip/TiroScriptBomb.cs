using UnityEngine;
using System.Collections;
[RequireComponent(typeof(AudioSource))]
public class TiroScriptBomb : MonoBehaviour {

	public GameObject cloneExplosion2;
	public GameObject explosion2;
	public GameObject cloneExplosionInimigo;
	public GameObject explosioninimigo;
	public AudioClip impact;
	AudioSource audio;
	void start(){
		audio = GetComponent<AudioSource>();

	}

	void OnTriggerEnter(Collider other){

	if(other.CompareTag("BombaBomba")){
		
		

		cloneExplosion2 = (GameObject)Instantiate(explosion2,transform.position,transform.rotation);
		Destroy(cloneExplosion2,1);
		//Instantiate(explosao,transform.position,transform.rotation);
			AudioSource.PlayClipAtPoint(impact, new Vector3(0, 0, 0));//playclipatpoin e usado em ontriggerenter para nao destruir o audio apenas o objeto

		}
		if(other.CompareTag("InimigoA")){
			
			
			
			cloneExplosionInimigo= (GameObject)Instantiate(explosioninimigo,transform.position,transform.rotation);
			Destroy(cloneExplosionInimigo,1);
			//Instantiate(explosao,transform.position,transform.rotation);
			AudioSource.PlayClipAtPoint(impact, new Vector3(0, 0, 0));
		}
	


	}}
