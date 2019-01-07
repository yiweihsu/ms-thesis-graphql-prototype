import axios from 'axios';

describe('user resolvers', () => {
	test('aUser', async () => {
		const response = await axios.post('http://localhost:4000/graphql', {
			query: `
      query {
        user(id: "40") {
          id
          firstName
          age
        }
      }
      `,
		});

		const { data } = response;
		expect(data).toMatchObject({
			data: {
				user: {
					id: '40',
					firstName: 'Alex',
					age: 40,
				},
			},
		});
	});

	test('aCompany', async () => {
		const response = await axios.post('http://localhost:4000/graphql', {
			query: `
      query {
        company(id: "1") {
          id
          name
          description
        }
      }
      `,
		});

		const { data } = response;
		expect(data).toMatchObject({
			data: {
				company: {
					id: '1',
					name: 'Apple',
					description: 'iphone',
				},
			},
		});
	});

	test('aUserWithCompany', async () => {
		const response = await axios.post('http://localhost:4000/graphql', {
			query: `
      query {
        user(id:"40") {
          firstName
          age
          company {
            id
            name
            description
          }
        }
      }
      `,
		});

		const { data } = response;
		expect(data).toMatchObject({
			data: {
				user: {
					firstName: 'Alex',
					age: 40,
					company: {
						id: '2',
						name: 'Google',
						description: 'search',
					},
				},
			},
		});
	});
});
