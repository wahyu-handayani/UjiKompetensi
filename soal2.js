parkir = (waktu_masuk, waktu_keluar) => {
    let inn=waktu_masuk,out=waktu_keluar,
    biaya = 3500, plus = 1500, next = 2000, selisih = out - inn, jam=18.00, batasMenit=0.59, batasJam=23.59,batasWaktu=2.30,menit=0.30, waktu=2.00,
    akhir, harga_akhir, awal, harga_awal, total,temp,temp2
    if (inn < jam && out < jam && inn - Math.floor(inn) < batasMenit && out - Math.floor(out) < batasMenit) {
        if (selisih < batasWaktu && selisih > 0) {
            total = biaya
            return total
        }
        else if (selisih > 0 && (Math.floor(selisih) > waktu && selisih - Math.floor(selisih) > menit)) {
            total = biaya + (plus * (Math.floor(selisih) - waktu)) + plus
            return total
        }
        else if (selisih > 0 && (Math.floor(selisih) > waktu || selisih - Math.floor(selisih) > menit)) {
            if(Math.floor(selisih)==2) total = biaya + plus
            else total=biaya+(plus * (Math.floor(selisih) - waktu))
            return total
        } else return 'waktu yang anda masukkan salah'
    }
    else if (((inn > jam && inn < batasJam) || (out > jam && out < batasJam)) && inn - Math.floor(inn) < batasMenit && out - Math.floor(out) < batasMenit) {
        if (selisih < batasWaktu && selisih > 0) {
            total = biaya
            return total
        }
        else if (selisih > 0 && Math.floor(selisih) > waktu && selisih - Math.floor(selisih) > menit) {
            akhir=Math.floor(out-inn)
            temp=Math.floor(inn+2)
            console.log(temp)
            temp2=Math.floor(out)-temp
            console.log(temp2)
            if(temp>18.00 && temp2>=1) total=biaya+(temp2*next)+next
            // else if(temp>18.00 && temp2==1) {total=biaya+next
            // console.log(total)}
            else if(temp<18.00){
                akhir=Math.floor(out)-jam
                harga_akhir=akhir*next
                awal=jam-(Math.floor(inn)+2)
                harga_awal=awal*plus
                total = biaya + harga_awal + harga_akhir +next
                
            }
            console.log(total)
            return total
        }
        else if (selisih > 0 && (Math.floor(selisih) > waktu || selisih - Math.floor(selisih) > menit)) {
            akhir=Math.floor(out-inn)
            temp=Math.floor(inn+2)
            temp2=Math.floor(out)-temp
            console.log(temp)
            if(temp>18.00 && temp2>1) total=biaya+(temp2*next)
            else if(temp>18.00 && temp2<=1) total=biaya+next
            else if(temp<18.00){
                akhir=Math.floor(out)-jam
                harga_akhir=akhir*next
                awal=jam-(Math.floor(inn)+2)
                harga_awal=awal*plus
                total = biaya + harga_awal + harga_akhir 
                console.log(total)
            }
            console.log(total)
            return total
        } else return 'waktu yang anda masukkan salah'
    } else return 'waktu yang anda masukkan salah'
}

console.log(parkir(10.20,15.40))
// dengan rincian: 15.40-10.20=5.20
// 2 jam pertama=3500
// 3 jam berikutnya=3*1500=4500
// total= 3500 + 4500 = 8000

// Ketentuan:
// Biaya Parkir 2 Jam Pertama Sebesar Rp. 3.500
// Untuk 1 Jam Berikutnya dikenakan Biaya Rp. 1.500
// Jika Waktu Diatas Jam 18.00, Maka Tarif Jam Berikutnya Adalah Rp. 2.000
// Jika Menit Sudah Diatas Menit 30, Maka Dihitung Beda Jam (menit > 0.3)