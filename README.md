# GraphQL Prototype

The application is developed as a prototype for my master thesis in TU Chemnitz with the topic Designing a Modern Web API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```shell
node>=10.0.0
```

### Installing

```shell
npm install
```

## Running the tests

```shell
npm run tests
```

### Usage

1. Run GraphQL server `npm start`
1. Run JSON server `npm run json:server`
1. Navigate to `localhost:4000/graphql`
1. Querying data through GraphiQL in the browser

#### Query Example

Basic Query

```node
query {
  user(id: "44") {
    id
    firstName
    age
  }
}
```

Circular Query

```node
query {
  user(id:"43") {
    firstName
    age
    company {
      id
      name
      description
    }
  }
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
