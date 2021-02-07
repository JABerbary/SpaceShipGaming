using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class SairCliqueEvento : MonoBehaviour {


	public Button sairB;

	// Use this for initialization
	void Start () {
		sairB.onClick.AddListener (()=> {Application.Quit();});

	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
