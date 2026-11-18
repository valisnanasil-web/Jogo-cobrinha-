const placar =
{
pontuacao:0,
largura:800,
altura:60,
corFundo:"#ecd5f0",
corTexto:"#240229",
nomeJogo:"THE LIFE SNAKE",
desenhar()
    {
        canvasCtx.fillStyle=this.corFundo;
        canvasCtx.fillRect(0,0,this.largura,this.altura)
        canvasCtx.fillStyle=this.corTexto;
        canvasCtx.textAlign='center';
        canvasCtx.textBaseline='middle';
        canvasCtx.font="20px Fantasy";
        canvasCtx.fillText(this.nomeJogo,400,30);
        canvasCtx.font="18px Fantasy";
        canvasCtx.textAlign='left';
        canvasCtx.textBaseline='top';
        canvasCtx.fillText(this.pontuacao+' pontos',10,40);
        canvasCtx.textAlign='right';
        canvasCtx.fillText(cobra.vida+' vidas',790,40);
    }

}