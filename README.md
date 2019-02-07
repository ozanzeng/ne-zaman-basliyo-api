# ne-zaman-basliyo-api
Node.JS - nezamanbasliyo.com API

# Schedules

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/schedules | `GET` | Empty | List all schedules. |
| /api/schedules | `POST` | {'title':'foo', 'category':'bar', 'country':'Turkey', year:1990, director:"id", imdb_score: 9.7 } | Create a new movie. |
| /api/schedules/:movie_id | `GET` | Empty | Get a movie. |
| /api/schedules/:movie_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a movie with new info. |
| /api/schedules/:movie_id | `DELETE` | Empty | Delete a movie. |
| /api/schedules/top10 | `GET` | Empty | Get the top 10 schedules. |
| /api/schedules/between/:start_year/:end_year | `GET` | Empty | Movies between two dates. |

# Index

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /register | `POST` | { username: 'foo', password:'1234' } | Create a new user. |
| /authenticate | `POST` | { username: 'foo', password:'1234' } | Generate a token. |

enjoy!