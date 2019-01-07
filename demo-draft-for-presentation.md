# Bullet Points

- localhost:4000/graphql
- Auto generated Docs
- User/Company

## Use Cases

1. User Type

```node
{
  user(id: "23") {
    id
    firstName
    age
    gender
    country
    email
  }
}
```

---

2. Company Type

```node
{
  company(id:"2") {
    id
    name
    description
    location
  }
}
```

---

3. User with Company

```node
{
  user(id:"23") {
    id
    firstName
    age
    gender
    country
    email
    company {
      id
      name
      description
      location
    }
  }
}
```

---

4. Company with User

```node
{
  company(id:"2") {
    id
    name
    description
    location
    users {
      firstName
      id
      age
      email
      company {
        id
      }
      gender
    }
  }
}
```

---

5. Circular Data

```node
{
  user(id: "23") {
    id
    firstName
    age
    gender
    country
    email
    company {
      id
      name
      description
      location
      users {
        firstName
        age
        gender
        country
        company {
          id
          name
          description
          location
          users {
            firstName
            age
            gender
            country
            company {
              name
              id
              location
            }
          }
        }
      }
    }
  }
}
```
