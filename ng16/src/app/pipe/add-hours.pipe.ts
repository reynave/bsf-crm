import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'addHours'
})
export class AddHoursPipe implements PipeTransform {

  transform(value: string | Date): string {
    let h :any = environment.hour ?? 0;
    h = parseInt(h);
    // Pastikan nilai yang diterima adalah Date, jika string maka convert
    const date = new Date(value);
    
    // Tambahkan jumlah jam yang diinginkan
    date.setHours(date.getHours() + h);
     // Ambil bagian dari tanggal
     const day = date.getDate();
     const month = date.toLocaleString('default', { month: 'short' }); // Bulan singkat (Sep, Jan, dll.)
     const year = date.getFullYear();
 
     // Ambil bagian dari waktu
     const hours = this.padZero(date.getHours());
     const minutes = this.padZero(date.getMinutes());
 
     // Format akhir seperti yang diminta: d M, Y H:i
     return `${month} ${day} ${year},  ${hours}:${minutes}`;
   
  }
  padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}