class Orang {
  // Pembuatan cunstructor yg akan dijalankan otomatis ketika objek diinisialisasi
  constructor(name) {
    this.nama = name;
    console.log("Object has been created");
  }
  //Membuat fungsi yg nantinya akan menempel pada objek
  //penulisan fungsi pada class tidak perlu menggunakan kata "function"
  makan() {
    console.log("sedang makan");
  }
  //membuat static method
  //method ini menempel pada class
  //diawali dengan keyword static
  static jalan() {
    console.log("Ayo jalan");
  }
} // contoh pembuatan class

const a = new Orang(); // contoh pembuatan objek
//membuat properti (variabel) yang menempel pada objek
// a.umur = 13;
// a.lapar = function () {
//   console.log("Silahkan Makan");
// };
// console.log(a.makan());
// console.log(a.umur);
// console.log(a.lapar());

//cunstructor tidak dapat dipanggi diluar seperti method
//a.constructor()//maka tidak akan tampil apa apa

//memanggil fungsi static langsung dengan nama class
//Orang.jalan(); // benar
//jika dipanggil dengan menggunakan objek maka tidak akan muncul apa apa
//a.jalan(); // salah

//membuat class inheritance dari class Orang
class Pekerjaan extends Orang {
  constructor(name) {
    //kita dapat menggunakan properti nama dari class utama tanpa harus menginisialisasinya
    // menggunakan keyword "super"
    super(name);
  }
}

const programer = new Pekerjaan("Jeffrey");
console.log(programer.nama);
//class inheritance juga dapat menggunakan method dari class utama
console.log(programer.makan());
