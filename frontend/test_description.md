# Considerações Iniciais

O projeto foi construido seguindo os princípios do SOLID, porém sem o "L" do "Liskov substitution principle" já que não trabalhei com herança.

Utilizei o Revealing Module Pattern para construir o Javascript para encapsular os métodos e evitar manipulação externa do módulo.

Para os testes foi utilizado o Jasmine, que pode ser instalado sem dependencias externas. 

Utilizei Javascript puro durante todo o desenvolvimento pois não queria criar dependência de nenhuma lib externa. Muitas vezes vemos projetos que estão associados com libs como JQuery, que apesar de sua grande importância ao longo dos anos, podem gerar uma alta dependência no futuro.

Não me preocupei muito com o CSS da aplicação, pois entendi que a preocupação do teste estava relacionada com a consistência do código, e nao com a aparência da aplicação. Mas coloquei elementos do Material Design da Google para demonstrar que estou sim preocupado com a experiência do usuário. O Material Design segue princípios da Gestalt e quer aproximar elementos do mundo físico ao virtual. 

Tive a preocupação também de evitar que textos longos, ou palavras muito longas gerassem interferência ou quebrassem os elementos na tela. Qualquer mensagem muito longa ou palavra muito longa terá um "width" do elemento determinado, evitando que o elemento atravesse a fronteira do elemento pai.

# O que aprendi com o desafio?

Inicialmente eu cheguei no resultado final de inserir listas de mensagens na tela de maneira muito rápida, porém sem muita consistência de código, não seguindo o proposto: "O objetivo é avaliar sua experiênica em escrever código de fácil manutenção, baixo acoplamento, e alta coesão.". Estava somente querendo analisar a dificuldade da atividade. Porém logo notei que a dificuldade do teste não estava em chegar no resultado final, e sim em COMO chegar no resultado final.

Entendi que o que o time da Creditas queria era um código que seguisse os princípios do livro Design Patterns: Elements of Reusable Object-Oriented Software e tentei ao máximo aplicar os princípios para atingir o resultado proposto.

Encontrei um BUG no Google-Chrome ao realizar o teste. A barra de rolagem não funciona caso o desenvolvedor tente aplicar Flexbox com "flex-direction: column-reverse". Simplismente a "scrollbar" nao aparece quando os elementos extrapolam o limite imposto. Existe um bug reportado ja para o Firefox e Chrome mas ainda nao foi resolvido.

# Como foi feito o desafio

Atualmente os navegadores em sua maioria não suportam o ES2015 - ES2018 sendo ainda necessário um "Babel" como transpilador para transformar o código em Javascript que o navegador entenda. Entendi que o teste estava relacionado somente ao que foi proposto, não necessitando de um NodeJS com depência de "Babel" com Webpack ou qualquer outras tecnologias externas. Portanto foquei em realizar o teste de maneira simples e sem dependências externas. 

Como não tinha o ES2015 ou posterior, não pude utilizar o conceito de classe dessa nova tecnologia. Utilizei portanto o Revealing Module Pattern que é uma evolução do Module Pattern e que também emula o conceito de classes. Portanto criei 2 módulos, o ChatEvents.js e o Message.js. 

- ChatEvents.js : o módulo foi criado para lidar com o comportamento na tela. Ele rastreia os cliques ou o evento de apertar o "Enter". É responsável também por acionar o módulo Message.js para que esse lide com as mensagens. Outro comportamento que o módulo resolve é apagar a mensagem do "input" após o envio. 

- Message.js : o módulo foi criado para lidar com o envio e recebimento de mensagens. O módulo é responsável também por criar o elemento do DOM que imprime a mensagem na tela, com a respectiva classe de CSS para recebimento ou envio de mensagem, como num chat como "Whatsapp".

O módulo FakeServer.js foi criado somente para demonstrar o baixo acoplamento e para retornar uma mensagem aleatória simulando um servidor.  

## Testes

Os testes foram feitos visando trabalhar o comportamento do chat na tela e paralelamente testando os métodos dos módulos. Inseri o teste na página do chat para testar os comportamentos, nao utilizando o SpecRunner.html padrão do Jasmine.

- ChatEventsSpec.js: testa os comportamentos como click e enter, bem como evitar que mensagens vazias sejam enviadas.

- MessageSpec.js: testa se a mensagem que é mostrada é a mesma que a inserida no campo. Testa se o elemento criado é uma "li" (lista). Testa também se a mensagem trata-se de uma mensagem enviada ou recebida. Outra preocupação foi testar a questão da quebra do HTML quando temos uma mensagem muito longa ou uma palavra muito grande.  

