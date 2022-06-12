const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (respon) => {
  try {
    const dataJumlahFilm = (await promiseTheaterIXX()).concat((await promiseTheaterVGC()));
    return dataJumlahFilm.filter(items => (items.hasil === respon)).length;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  promiseOutput,
};
