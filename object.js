// <-------> introduction <-------->

//object contoh
var namasiswa = {
    nama : 'bambang',
    umur : '19',
    no : [1,2,3,4,5],
    job : 'bambang',
    sapa : {
        first : 'halo',
        second : 'assalamualaikum'
    }
}// ==> cara memanggil <==
// console.log(namasiswa.nama);
// console.log(namasiswa.umur);
// console.log(namasiswa.sapa.first);
// console.log(namasiswa.no[0]);

// <-------> membuat object <-------->
/*membuat object ada beberapa cara :
    1.object literal
    2.function declaration
    3.constructor function (keyword New)
    4.object.create()
*/

// 1. object literal
var ns1 = 
{
    nama : 'bambang',
    umur : '19',
    no : [1,2,3,4,5],
    job : 'dev-ops',
    sapa : {
        first : 'halo',
        second : 'assalamualaikum'
    }
}
var ns2 = 
{
    nama : 'herdianto',
    umur : '20',
    no : [1,2,3,4,5],
    job : 'back-end dev',
    sapa : {
        first : 'halo',
        second : 'assalamualaikum'
    }
}
// ==> cara memanggil <==
// console.log(namasiswa.nama);
// console.log(namasiswa.umur);
// console.log(namasiswa.sapa.first);
// console.log(namasiswa.no[0]);


// 2.function declaration

function dataNamaSiswa(nama,umur,job) 
{
    var ns = {};
    ns.nama = nama ;
    ns.umur = umur;
    ns.job = job;
    return ns;
}
var ns3 = dataNamaSiswa('ardi supardi','21','Tech-lead')
// console.log(ns3);
// console.log(ns3.nama);
// console.log(ns3.umur);
// console.log(ns3.job);

/*nb : data harus urut dengan function*/

// 3.constructor function (keyword New)
function Namasiswa (nama,umur,job)
{
    this.nama  = nama;
    this.umur  = umur;
    this.job   = job ;
}

var ns4 = new Namasiswa('zulfiandi','24','cyber security')
// console.log(ns4);
/* harus menggunakan new*/
