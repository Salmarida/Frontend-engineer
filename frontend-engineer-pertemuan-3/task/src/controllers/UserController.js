/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
import users from "../models/users";

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
function formatUser(usernames) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const formattedUsers = users.map((user) => {
          return `nama. ${user}`;
        });
        resolve(formattedUsers);
      }, 3000); 
    });
  }

  formatUser(usernames)
  .then((result) => {
    console.log("Nama-nama pengguna yang diformat:");
    console.log(result);
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = (name) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const cariNama = users.find (user => user.name == name)
            resolve(cariNama);
        }, 2000);
    })
};
/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const filterByMajor = (major) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            const filterJurusan = users.filter (user => user.major == major)
            resolve(filterJurusan);
        }, 4000);
    })
};

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE
export {formatUser, findByName, filterByMajor};
