# Hanya untuk belajar

Membangun web dengan reactjs

## Isi Repo

1. Implementasi sparated *logic* and *view*, yaitu memisahkan antara *logic* dengan *view*/*UI* pada satu component, sehingga sifatnya *reusable*/dapat digunakan kembali
2. Penggunaan library styled-component untuk mengganti css tradisional. disini dapat kita pelajari tentang css in js, tujuannya agar ketika komponen sudah banyak dan styling juga suda banyak maka tidak akan pusing kalau ada suatu perubahan pada struktur kode styling
3. Contoh dari penggunaan context yaitu API bawaan dari react untuk *passing*/melawatan data antara percabangan komponen atau *component tree*, bisa digunakan untuk global state (state terpusat) sehingga pertukaran data antar komponen menjadi lebih mudah

### Cara Mejalankan

#### Instalasi semua paket

Jika belum menginstall paket, atau kali pertama clone projek,

```bash
npm install
```

#### Jalankan App

```bash
npm start
```

### Melihat perubahan 

Jadi semua terpusat pada **App.js**, 

```javascript
import QualitySelector from "./pages/QualitySelector"; //spareated logic and view
import StyledComponent from "./pages/StyledComponent";
import RenderContext from "./pages/RenderContext";
```

pada kode di atas merupakan component yang dibuat berdasarkan isi repo, gunakan salah satu untuk melihat perubahan, dan terapkan pada kode di bawah ini

```javascript
return (
  <CounterContext.Provider value={{ counter, increment }}>
    <QualitySelector />
  </CounterContext.Provider>
);
```

`<QualitySelector />` pada diganti dengan **StyledComponent** atau **RenderContext**

Terimakasih sudah lihat, dan baca, apalagi dijalankan

kalau ada kekurangan dalam penulisan kode dan logic, bolehlah berbagi, saya perlu bantuan kalian, wajar masih belajar juga :)
