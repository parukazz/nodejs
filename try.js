// Synchronus
// const getUserSync = (id) => {
//   const name = id === 1 ? "Paruk" : "Azhari";
//   return { id, name };
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = "Hello World!";
// console.log(halo)

// Asynchronus
const getUser = (id, callback) => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const name = id === 1 ? "Paruk" : "Azhari";
    callback({ id, name });
  }, time);
};

const userSatu = getUser(1, (hasil) => {
  console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
  console.log(hasil);
});

const halo = "Hello World";
console.log("selesai");
