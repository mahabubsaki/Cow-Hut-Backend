# Live Link: [https://l2-a3.vercel.app/](https://l2-a3.vercel.app/)

## Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/64b4ccb59097e27093f2366f (Single GET)
- api/v1/users/64b4ccb59097e27093f2366f (PATCH)
- api/v1/users/64b4ccb59097e27093f2366f (DELETE)

#### Cows

- api/v1/cows (POST)
- api/v1/cows (GET)
- api/v1/cows/<id>
- api/v1/cows/<id>
- api/v1/cows/<id>

### Pagination and Filtering routes of Cows

- api/v1/cows?pag=1&limit=10
- api/v1/cows?sortBy=price&sortOrder=asc
- api/v1/cows?minPrice=20000&maxPrice=70000
- api/v1/cows?location=Chattogram
- api/v1/cows?searchTerm=Cha

#### Orders

- api/v1/orders (POST)
- api/v1/orders (GET)
