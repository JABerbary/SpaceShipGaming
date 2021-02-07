using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System.Collections;

[System.Serializable]
public class Limitacao
{
	public float XMin,XMax,ZMin,ZMax;
}
public class player : MonoBehaviour {

	public AudioClip Tiroteio;
	AudioSource audio;

	public GameObject explosao;
    public GameObject cloneExplosion;
	public GameObject explosion2;
	public GameObject playerExplosion;
	public GameObject cloneExplosion3;
	public GameObject explosao3;

	public Rigidbody rb;// cria uma variavel rigibody como referencia 
	public float velocidade;
	public float deslocamento;
	public Limitacao limitacao;
	public GameObject Bala;
	public Transform RetornoTiro;
	public float fireRate;

	//public ToqueArea area;
	public float nextFire;
	private Quaternion calibrationQuaternion;



	void Start() {
		rb = GetComponent<Rigidbody>();// pega um componente 
		audio = GetComponent<AudioSource>();
	}


	/*	void Update(){
		//Instantiate(Bala, RetornoTiro.position, RetornoTiro.rotation); // Instantiate(object, position, rotation); elemntos que contem no transform: position(vetor)/rotaçao(quartenion)

		if (area.podeAtirar() && Time.time > nextFire)
		{
			nextFire = Time.time + fireRate;
			Instantiate(Bala, RetornoTiro.position, RetornoTiro.rotation);
			audio.PlayOneShot(Tiroteio, 0.7F);
		}

		//Instantiate(Bala, RetornoTiro.position, RetornoTiro.rotation); // Instantiate(object, position, rotation); elemntos que contem no transform: position(vetor)/rotaçao(quartenion)

}*/

		void Update() {
			/*if (Input.touchCount ==1 && Input.GetTouch(0).phase == TouchPhase.Moved) {
				Vector2 touchDeltaPosition = Input.GetTouch(0).deltaPosition;
				transform.Translate(-touchDeltaPosition.x * velocidade, -touchDeltaPosition.y * velocidade, 0);
			}
		if(Input.touchCount > 1){ 
			transform.Translate(Input.touches[0].deltaPosition.x *velocidade, 
			                    Input.touches[0].deltaPosition.y *velocidade,0); }*/
	}



	void CalibrateAccelerometer(){
	
		Vector3 aceleracaoinstantanea = Input.acceleration;
		//Vector3 aceleracao = FixAcceleration (AceleracaoFixa);
		Quaternion rotateQuaternion = Quaternion.FromToRotation (new Vector3 (0.0f, 0.0f, -0.5f), aceleracaoinstantanea);
		calibrationQuaternion = Quaternion.Inverse(rotateQuaternion);
	}
	    Vector3 FixAcceleration(Vector3 acceleration){
		Vector3 AceleracaoFixa = calibrationQuaternion * acceleration; 
		return AceleracaoFixa;
	}

     void FixedUpdate () {

		/*float MHorizontal = Input.GetAxis ("Horizontal")*velocidade;//pega a referencia no teclado movimentando pra horizontal
		float MVertical = Input.GetAxis ("Vertical")*velocidade;//pega a referencia no teclado
		rb.velocity = new Vector3 (MHorizontal, 0.0f, MVertical);//Vector3 movement = new Vector3(x,y,z)
		Vector3 aceleracao = Input.acceleration;




		Vector2 direcao = toque.PeagrDirecao ();
		Vector3 movimento = new Vector3 (direcao.x, 0.0f, direcao.y);
		rb.velocity = movimento * velocidade;*/


		Vector3 aceleracao = Input.acceleration*velocidade;
		Vector3 movimento = new Vector3 (aceleracao.x, 0.0f, aceleracao.y);
		rb.velocity = movimento * velocidade;

	    rb.position = new Vector3 
		(
				Mathf.Clamp (rb.position.x,limitacao.XMin,limitacao.XMax),
				3.0f,
				Mathf.Clamp(rb.position.z,limitacao.ZMin,limitacao.ZMax)

		);
		rb.rotation = Quaternion.Euler (0.0f, 0.0f, rb.velocity.x * - deslocamento);

	}// Mathf.clamp e o tamanho de caracteres que uma variavel tipo float pode armazenar , no vetor3(1,2,3) 

	void OnTriggerEnter(Collider other){
	if(other.CompareTag("BombaBomba")){


			cloneExplosion = (GameObject)Instantiate(explosao,transform.position,transform.rotation);
			Destroy(cloneExplosion,1);
			//Instantiate(explosao,transform.position,transform.rotation);

			}
		if(other.CompareTag("InimigoA")){
			
			
			cloneExplosion3 = (GameObject)Instantiate(explosao3,transform.position,transform.rotation);
			Destroy(cloneExplosion3,1);
			//Instantiate(explosao,transform.position,transform.rotation);
			
		}
		if(other.CompareTag("TiroInimigo")){
			
			
			cloneExplosion3 = (GameObject)Instantiate(explosao3,transform.position,transform.rotation);
			Destroy(cloneExplosion3,1);
			//Instantiate(explosao,transform.position,transform.rotation);
			
		}
	
	}



} 