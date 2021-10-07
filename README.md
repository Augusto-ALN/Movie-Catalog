# Direct Movies
Uma página que lista os filmes mais populares do momento baseado nos dados do TMDB e demonstra dados detalhados de cada filme.

## Pré requisitos
- [NodeJS](https://nodejs.org/en/)
- [Chave de API TMDB](https://www.youtube.com/watch?v=mbImkkJFxBs)

## Instalação
##### Clone o repositório
```
$ git clone https://github.com/Augusto-ALN/Movie-Catalog.git
```

##### Instale as dependências na pasta do projeto
```
$ npm install
```

##### Inicie o back-end do projeto
Crie um arquivo `.env` a partir de `.env.example` fornecendo a **`API_KEY`**
``` 
$ npm start 
```

##### Inicie o front-end do projeto
```
$ npm run frontend
```

## Rotas da API
- `/movies/popular` - Retorna uma lista de filmes mais populares baseada no TMDB
```json
[
  {
    "id": 550988,
    "release_date": "2021-08-11",
    "title": "Free Guy",
    "poster_path": "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg"
  },
  {
    "id": 580489,
    "release_date": "2021-09-30",
    "title": "Venom: Let There Be Carnage",
    "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg"
  },
]
```

- `/movies/details/:id` - Retorna detalhes de um filme baseada no TMDB

```json
{
  "title": "Free Guy",
  "poster_path": "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
  "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
  "vote_average": 7.9,
  "release_date": "2021-08-11",
  "genres": [
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    }
  ]
}
```