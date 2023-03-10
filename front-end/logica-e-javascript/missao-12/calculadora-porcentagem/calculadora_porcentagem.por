programa
{
	
	funcao inicio()
	{
		real preco
		real porcentagem
		real valorPorcentagem
		real precoDesconto
		real precoJuros

		escreva("Informe o valor: ")
		leia(preco)

		escreva("Informe a porcentagem: ")
		leia(porcentagem)

		valorPorcentagem = preco * porcentagem / 100
		precoDesconto = preco - valorPorcentagem
		precoJuros = preco + valorPorcentagem
		
		escreva("R$" + preco + " com " + porcentagem + "% de desconto é R$" + precoDesconto + "\n")
		escreva("R$" + preco + " com " + porcentagem + "% de desconto é R$" + precoJuros)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 132; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {preco, 6, 7, 5}-{porcentagem, 7, 7, 11}-{valorPorcentagem, 8, 7, 16}-{precoDesconto, 9, 7, 13}-{precoJuros, 10, 7, 10};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */