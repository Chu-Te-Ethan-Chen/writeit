---
title: Recipe API (REST)
subtitle: REST API with Python, Django REST Framework and Docker using Test
  Driven Development (TDD)
category:
  - Django
author: Jordon Chen
date: 2021-06-05T01:53:02.450Z
featureImage: /uploads/screen-shot-2021-06-05-at-9.58.25-am.jpg
---
A django-based restful API to store and fetch recipes. Users can create their own recipes, ingredients, tags, and images through this API.

* This app consists of 3 components: core, recipe, and user.
* In the core components, we set up the model and test for our data, such as users, ingredients, tags, and recipes.
* In the recipe component, we created an API for manipulating our models.
* In the user components, we configured the authentication setting.
* This app is created by using [django-rest-framework](https://www.django-rest-framework.org/).
* [Docker](https://www.docker.com/) is applied to handle infra set up.
* Data is stored in [PostgreSQL](https://www.postgresql.org/).
* We used test-driven-development strategies to develop, and implemented by [django test](https://docs.djangoproject.com/en/3.2/topics/testing/overview/).
* We configured [Travis-CI](https://www.travis-ci.com/) to automate code checks.
* The API is presented in the [Swagger](https://swagger.io/resources/open-api/)/OpenAPI 2.0 format.
* [Json Web Token (JWT)](https://jwt.io/) authentication is applied to ensure users access security.
* We used [flake8](https://flake8.pycqa.org/en/latest/) to ensure the lint and code format.

Github code: [https://github.com/Jordon-Chen/recipe-app-api](https://github.com/Jordon-Chen/recipe-app-api)


## **Installation**

```bash
docker-compose up
```

## **Test & Lint**

```bash
docker-compose run --rm app sh -c "python manage.py test && flake8"
```

## **Docs**

<http://localhost:8000/swagger/>

## **Usage**

### Create a user

```bash
curl -X POST "http://localhost:8000/api/user/create/" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{  \"email\": \"user@recipe.com\",  \"password\": \"password\",  \"name\": \"user\"}"
{"email":"user@recipe.com","name":"user"}
```

### Get access token

```bash
curl -X POST "http://localhost:8000/api/user/token/" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{  \"email\": \"user@recipe.com\",  \"password\": \"password\"}"
{"token":"4037d08542ee003d9f59dac2b8e7b06f544d5817"}
```

### Post ingredient

```bash
curl -X POST "http://localhost:8000/api/recipe/ingredients/" -H  "accept: application/json" -H  "Authorization: Token 4037d08542ee003d9f59dac2b8e7b06f544d5817" -H  "Content-Type: application/json" -d "{  \"name\": \"egg\"}"
{"id":1,"name":"egg"}
```

### Post tag

```bash
curl -X POST "http://localhost:8000/api/recipe/tags/" -H  "accept: application/json" -H  "Authorization: Token 4037d08542ee003d9f59dac2b8e7b06f544d5817" -H  "Content-Type: application/json" -d "{  \"name\": \"breakfast\"}"
{"id":1,"name":"breakfast"}
```

### Post recipe

```bash
curl -X POST "http://localhost:8000/api/recipe/recipes/" -H  "accept: application/json" -H  "Authorization: Token 4037d08542ee003d9f59dac2b8e7b06f544d5817" -H  "Content-Type: application/json" -d "{  \"title\": \"Sunny-side-up egg\",  \"ingredients\": [1],  \"tags\": [1],  \"time_minutes\": 5,  \"price\": \"1.00\",  \"link\": \"https://www.cookinglight.com/recipes/pristine-sunny-side-up-eggs\"}"
{"id":1,"title":"Sunny-side-up egg","ingredients":[1],"tags":[1],"time_minutes":5,"price":"1.00","link":"https://www.cookinglight.com/recipes/pristine-sunny-side-up-eggs"}
```

### Post a image

```bash
curl -X POST "http://localhost:8000/api/recipe/recipes/1/upload-image/" -H  "Authorization: Token 4037d08542ee003d9f59dac2b8e7b06f544d5817" -H "Content-type: multipart/form-data" -F "image=@/Users/user/Downloads/sunny-egg.jpeg"
{"id":1,"image":"http://localhost:8000/media/uploads/recipe/be1738f4-5668-47b6-9868-216dfe3f14fd.jpeg"}
```

### Get recipe

```bash
curl -X GET "http://localhost:8000/api/recipe/recipes/1/" -H  "accept: application/json" -H  "Authorization: Token 4037d08542ee003d9f59dac2b8e7b06f544d5817"
{"id":1,"title":"Sunny-side-up egg","ingredients":[{"id":1,"name":"egg"}],"tags":[{"id":1,"name":"breakfast"}],"time_minutes":5,"price":"1.00","link":"https://www.cookinglight.com/recipes/pristine-sunny-side-up-eggs"}
```