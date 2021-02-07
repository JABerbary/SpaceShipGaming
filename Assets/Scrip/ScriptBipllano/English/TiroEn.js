#pragma strict

   
   /* public var  tiro: GameObject;*/
	public var tempo;
	public var shot: GameObject;
	public  var atirador: Transform;
	public var  fireRate=0.2;
	public var delay=0.2;
    public var atirador1 =false;
    public  var atirador2 = false;
    public var atirador3 = false;
  

	function Start()
	{


			InvokeRepeating ("tirotag", delay, fireRate);// a string no invokerepeating e o nome do metodo pego como referencia
    

	}
	function tirotag(){
		if(atirador1==true){
		if(UpgradeEn.level==1){
		Instantiate(shot, atirador.position, atirador.rotation);
		}
		}
		if(atirador2==true){
		if(UpgradeEn.level==2){
		Instantiate(shot, atirador.position, atirador.rotation);
		}
		}
		if(atirador3==true){
		if(UpgradeEn.level==3){
		Instantiate(shot, atirador.position, atirador.rotation);
		}
		}
		
	}