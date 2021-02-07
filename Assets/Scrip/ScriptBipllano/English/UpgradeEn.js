#pragma strict

static var level=1;
function Start () {
level = 1;
}

function Update () {
 if(GuiLabelEnglish.Scores>=10){
  level =1 ;
 }
if(GuiLabelEnglish.Scores>=100){
  level =2 ;
 }
 /*if(GuiLabel.pontos>=20){
  level =3 ;
 }*/
}