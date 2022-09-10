## BACKEND API EXPRESS
# Express Mysql CRUD
# SOURCE I LEARN THIS PROJECT
## IDStack
## https://www.youtube.com/c/IDStack 

pertama tama instal express vue cli kemudia atur depedency, buat file server.js, buat folder app, buat folder config dalam folder app, buat file db.config.js dalam folder config, buat folder models di dalam folder app, buat file index.js dalam folder models, buat file post.model.js dalam folder, buat folder routes, buat file post.route.js di dalam folder routes

kedua, file server.js untuk mengatur url encode yang di akses misal localhost:8000, file db.config.js untuk mengatur database server misal .env, file index.js untuk mengatur koneksi database yang sudah di buat di db.config.js yang menggunakan sequilize, post.model.js untuk table di database sekaligus model yang akan di gunakan di controller, post.controller.js untuk controller yang akan di routekan endpoint

episode 2 menit 9:20an migrate:fresh

agar model berjalan dia menggunakan perintah node server.js di cmd
setelah membuat suatu perintah harus kembali aktifkan server ulang ctrl+c dan masukan node server.js