# Installation

```
docker-compose up
```

## Access

Open browser to http://127.0.0.1:3001/graphql

## Query

Run the following

```
{
  getAssets {
    id
    workspace {
      id
    }
  }
}
```
