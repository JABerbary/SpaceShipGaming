using UnityEngine;
using System.Collections;


[RequireComponent(typeof(AudioSource))]
public class Tiro : MonoBehaviour {
	public GameObject tiro;
	public double tempo;
	public GameObject shot;
	public Transform atirador;
	public float  fireRate;
	public float delay;


	//public AudioClip impact;
	//AudioSource audio;

	// Use this for initialization
	/*void Start () {

		audio = GetComponent<AudioSource>();
	}*/
	
	// Update is called once per frame
	private AudioSource audioSource;

	void Start()
	{

			InvokeRepeating ("tirotag", delay, fireRate);// a string no invokerepeating e o nome do metodo pego como referencia


	}
	void tirotag(){
		
		Instantiate(shot, atirador.position, atirador.rotation);
	}
		/*void Update () {
		if (Input.GetKeyDown("z")||ToqueTiro.Btiro==true) {
			tempo-= Time.deltaTime;
			if(tempo <= 0 ){
			Instantiate(tiro,transform.position,transform.rotation);
				tempo=0.2;
			}
			//audio.PlayOneShot(impact, 0.1F);
		}

	}*/
}
