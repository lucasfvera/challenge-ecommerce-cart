## Server vs. Client Dropdown

Compare build times and size of the filter dropdown with a RSC(server) and a RCC(client)


### Server Component

Build:
Route (app)                              Size     First Load JS
┌ ƒ /                                    3.83 kB        98.6 kB
├ ○ /_not-found                          871 B            88 kB
├ ƒ /api/games                           0 B                0 B
└ ○ /cart                                2.44 kB         104 kB
+ First Load JS shared by all            87.1 kB
  ├ chunks/23-6fcdb8e899b81941.js        31.5 kB
  ├ chunks/fd9d1056-74229c330a3e0d73.js  53.6 kB
  └ other shared chunks (total)          1.95 kB

JS to the client: 364 kb


### Client-side Component

Build:
Route (app)                              Size     First Load JS
┌ ƒ /                                    4.02 kB        98.8 kB
├ ○ /_not-found                          871 B            88 kB
├ ƒ /api/games                           0 B                0 B
└ ○ /cart                                2.44 kB         104 kB
+ First Load JS shared by all            87.1 kB
  ├ chunks/23-6fcdb8e899b81941.js        31.5 kB
  ├ chunks/fd9d1056-74229c330a3e0d73.js  53.6 kB
  └ other shared chunks (total)          1.95 kB

JS to the client: 365 kb

