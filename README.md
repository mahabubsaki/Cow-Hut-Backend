# Live Link: [https://l2-a3.vercel.app/](https://l2-a3.vercel.app/)

## Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/64fd10cff5581e10aaa2135f (Single GET)
- api/v1/users/64fd10cff5581e10aaa2135f (PATCH)
- api/v1/users/64fd10cff5581e10aaa2135f (DELETE)

#### Cows

- api/v1/cows (POST)
- api/v1/cows (GET)
- api/v1/cows/64fd5dbaff646d15a9c66847 (Single GET)
- api/v1/cows/64fd5dbaff646d15a9c66847 (PATCH)
- api/v1/cows/64fd5dbaff646d15a9c66847 (DELETE)

### Pagination and Filtering routes of Cows

- api/v1/cows?pag=1&limit=10
- api/v1/cows?sortBy=price&sortOrder=asc
- api/v1/cows?minPrice=20000&maxPrice=70000
- api/v1/cows?location=Chattogram
- api/v1/cows?query=Brahman

#### Orders

- api/v1/orders (POST)
- api/v1/orders (GET)
