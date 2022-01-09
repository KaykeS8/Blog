# Blog

Como o nome do arquivo já diz, são apenas sugestões :)

-------------------------------------------------------------------------------------------------------------------------------------------------------------

## 1º No pacote ZIP temos um arquivo chamado 'variaveis.css'. Para usar variáveis CSS é simples:

<code>
p{
 color: var(--title);
}
</code>

<img src="blog - home.png" alt="imagem do projeto">

<p>
    Dessa forma nossa tag 'p' terá a cor #313131.
    Por que usar variáveis? Se for uma aplicação grande, será chato ficar procurando todos os títulos da página para mudar de cor.
    Com a variável é só mudar o valor dela e assim será aplicada em toda aplicação!
</p>

<p>
    Qualquer dúvida leia esse post que fiz sobre como declarar variáveis no CSS
    Post sobre variáveis no CSS => <a href="https://www.instagram.com/p/CO6F8r4gXVw/">https://www.instagram.com/p/CO6F8r4gXVw/</a>
</p>

<p>
    Caso você não entenda sobre cores, também fiz um post sobre
    Post sobre cores => <a href="https://www.instagram.com/p/CMqGBTmj2KW/">https://www.instagram.com/p/CMqGBTmj2KW/</a>
</p>

-------------------------------------------------------------------------------------------------------------------------------------------------------------

## 2º A estrutura toda do desafio pode ser feita usando Flexbox, assim fica melhor na hora de fazer a responsividade.

<p>Essas propriedades Flexbox já são o suficiente:</p>

<code>
    #nomeDiv{
     display: flex;
     align-items: center;
     justify-content: space-between;
    }
</code>

<p>Post sobre justify-content => <a href="https://www.instagram.com/p/CMQNUOjA_nM/">https://www.instagram.com/p/CMQNUOjA_nM/</a></p>
<p>Post sobre align-items => <a href="https://www.instagram.com/p/CMVUmSHAWZx/">https://www.instagram.com/p/CMVUmSHAWZx/</a></p>

-------------------------------------------------------------------------------------------------------------------------------------------------------------

## 3º Lembre-se: antes de começar a fazer o estilo da estrutura faça um reset no navegador.
<code>
    
    * {
     box-sizing: boder-box;
     padding: 0;
     margin: 0;
    }
</code>

-------------------------------------------------------------------------------------------------------------------------------------------------------------

<p>
    4º Na hora de criar o container do post, deixe o height em auto. Como temos vários tipos de tamanhos na descrição não é bom criar altura fixa em todos.
    Use também width: 100% no mesmo container, assim fica melhor na hora de fazer a responsividade.
</p>

-------------------------------------------------------------------------------------------------------------------------------------------------------------

<p>
BOA SORTE! 
By iuricode
</p>
