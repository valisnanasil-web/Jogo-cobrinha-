const cobra = 
{
    cor:"#493449",
    tamanho:12,
    direcao:"direita",
    x:0,
    y:260,
    vida:3,
    desenhar()
    {
        canvasCtx.fillStyle=this.cor;
        canvasCtx.fillRect(this.x,this.y,this.tamanho,this.tamanho)
    },
    mover(){
        if (this.direcao == 'direita') this.x++;
        if (this.direcao == 'esquerda') this.x--;
        if (this.direcao == 'cima') this.y--;
        if (this.direcao == 'baixo') this.y++;

        //A Cobra morre quando:
        if (this.x < 0) this.morrer();
        if (this.x > 800 - this.tamanho) this.morrer();
        if (this.y < 60) this.morrer();
        if (this.y > 460 - this.tamanho) this.morrer();
    },
    morrer()
    {
        this.vida--;
        this.x=400;
        this.y=260;
        if(this.vida ==2 ) this.cor = "#9750ba";
        if(this.vida ==1 ) this.cor = "#5f416e";
   
    }
    }

