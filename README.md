# Local development
## Docker Build (with docker-compose)
```
# build
$ docker compose build --no-cache

# start
$ docker-compose up -d
```

## Local server

```
# enter container ex)dive to app container
$ docker compose exec dev-app bash

# start server
$ npm run dev
```

## Access localhost
http://localhost
