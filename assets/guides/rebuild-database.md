To update your heroku database to be the same as what is on your local database you can run `heroku pg:reset` and then `heroku pg:push localdbname HEROKU_DATABASE_NAME --app app_name`

- `heroku pg:reset --app ship-camp-staging`
- `heroku pg:reset --app ship-camp`
- `heroku pg:push shipcamp_db DATABASE_URL --app ship-camp-staging`
- `heroku pg:push shipcamp_db DATABASE_URL --app ship-camp`
