using UnityEngine;

[RequireComponent(typeof(AudioSource))]
public class AudioButton : MonoBehaviour {
	public AudioClip impact;
	AudioSource audio;
	// Use this for initialization

		void start(){
			audio = GetComponent<AudioSource>();
			
	
	}
	
	// Update is called once per frame
	public void ChamarCena (string Chamacena) {
		AudioSource.PlayClipAtPoint(impact, new Vector3(0, 0, 0));
		Application.LoadLevel (Chamacena);

	}
}
