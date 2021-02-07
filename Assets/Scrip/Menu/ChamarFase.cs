using UnityEngine;
using System.Collections;

public class ChamarFase : MonoBehaviour {

	public void ChamarCena (string Chamacena) {
		Application.LoadLevel (Chamacena);
		
	}


}