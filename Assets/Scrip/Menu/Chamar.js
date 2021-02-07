#pragma strict

public function ChamarCena ( Chamacena: String)  {
 
		Application.LoadLevel (Chamacena);
        GuiLabel.vida=3;// toda a vez que a cena sai a contagem mantem zerada por conta da condiçao que apos eu chamar fica = 0 essa condicao torna a funcao Gui=3
         GuiLabel.pontos =0;
          GuiLabelEnglish.Life =3;
            GuiLabelEnglish.Scores=0;
}
