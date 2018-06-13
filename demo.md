- localhost:4000/graphql
- Auto generated Docs 
- User/Company

=======================================================

1. User Type 

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

=======================================================

2. Company Type

{
  company(id:"2") {
    id
    name
    description
    location
  }
}

=======================================================

3. User with Company 

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

=======================================================

4. Company with User

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

=======================================================

5. Circular Data

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
