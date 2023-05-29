# holy-mary

## Sumário

- [holy-mary](#holy-mary)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este aplicativo é uma bíblia digital que oferece acesso a diversas versões da Bíblia em português. Com a integração da API ABíbliaDigital, é possível buscar por passagens específicas, visualizar capítulos completos e até mesmo salvar versículos favoritos. O app é fácil de usar e oferece uma grande quantidade de recursos para os usuários interessados em estudar conteúdo bíblico. Ao utilizar a ABíbliaDigital neste projeto, os usuários poderão desfrutar de uma experiência completa de leitura e estudo da Bíblia dentro do aplicativo.

Este foi o quinto repositório de código apresentado no [Curso Superior de TSI](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) do IFMS como requisito para obtenção da nota parcial das atividades da unidade curricular Programação para Dispositivos Móveis I.

| [&larr; Repositório anterior](https://github.com/mdccg/weather-app) | [Próximo repositório &rarr;](https://github.com/mdccg/chart-plotting-demo-app) |
|-|-|

## Pilha de tecnologia

| Papel | Tecnologia |
|-|-|
| [Prototipagem](https://figma.fun/U3r0LD) | [Figma](https://figma.com/) |
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Plataforma | [Expo](https://expo.dev/) | 
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Front-end | [React Native](https://reactnative.dev/) |
| Base de dados | [ABíbliaDigital](https://www.abibliadigital.com.br/pt) |

Os créditos pelas mídias disponibilizadas estão disponíveis [aqui](./assets/README.md).

<!-- Adicionar galeria aqui -->

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional);
- Dispositivo móvel:
  - [Expo Go](https://expo.dev/client).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);
   
3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Execute o seguinte comando para iniciar o app:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```

5. Uma vez iniciado, aparecerá um QR Code. Você deve escaneá-lo com o aplicativo [Expo Go](https://expo.dev/client), disponível para Android e iOS;

6. Como alternativa, você pode executar o app no seu navegador, pressionando o atalho `w`. Entretanto, alguns módulos podem não funcionar na versão web do app.
