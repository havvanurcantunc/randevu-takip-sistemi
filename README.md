# Randevu Takip Sistemi

## Proje Hakkında

Randevu Takip Sistemi, kullanıcıların randevularını kolay bir şekilde oluşturmasını, görüntülemesini, düzenlemesini ve silmesini sağlayan basit bir web uygulamasıdır.

Proje, randevularını düzenli bir şekilde takip etmek isteyen kullanıcılar için geliştirilmiştir. Kullanıcılar randevu tarihi, saati ve açıklamasını girerek yeni randevu oluşturabilir ve daha sonra oluşturdukları randevuları yönetebilir.

## Kullanılan Teknolojiler

- HTML
- CSS
- JavaScript
- LocalStorage
- GitHub Pages

## Proje Panosu

Projenin geliştirme sürecinde görevleri takip etmek için GitHub Projects kullanılmıştır.

**GitHub Proje Panosu:**

https://github.com/users/havvanurcantunc/projects/6/views/1

Panoda aşağıdaki sütunlar bulunmaktadır:

- Yapılacak
- Devam Ediyor
- Tamamlandı

Projede toplam 5 görev oluşturulmuş ve iki görev geliştirilerek tamamlanmıştır.

## Projeyi Çalıştırma

Projeyi çalıştırmak için:

1. GitHub deposunu açın.
2. `index.html` dosyasını açın veya GitHub Pages üzerinden yayınlanan projeye erişin.
3. Web uygulaması tarayıcıda açıldığında randevu oluşturma işlemi yapılabilir.

Proje GitHub Pages üzerinde yayınlanmıştır.

## Geliştirilen Özellikler

### 1. Randevu Ekleme

Kullanıcının tarih, saat ve açıklama bilgilerini girerek yeni bir randevu oluşturması sağlanmıştır.

Randevu ekleme özelliğinde ayrıca form doğrulaması yapılmıştır. Tarih, saat veya açıklama alanlarından herhangi biri boş bırakılırsa kullanıcıya uyarı gösterilir ve randevu oluşturulmaz.

**Kabul kriterleri:**

- Tarih ve saat bilgisi girilebilmelidir.
- Randevu Ekle butonuna basıldığında randevu listeye eklenmelidir.
- Eklenen randevu ekranda görüntülenmelidir.
- Sayfa yenilendiğinde randevu kaybolmamalıdır.

### 2. Randevu Düzenleme

Kullanıcının daha önce oluşturduğu bir randevunun tarih, saat ve açıklama bilgilerini değiştirebilmesi sağlanmıştır.

Kullanıcı listede bulunan **Düzenle** butonuna basarak randevu bilgilerini forma aktarabilir ve bilgileri güncelledikten sonra randevuyu kaydedebilir.

**Kabul kriterleri:**

- Kullanıcı mevcut bir randevuyu seçebilmelidir.
- Randevunun tarih bilgisi değiştirilebilmelidir.
- Randevunun saat bilgisi değiştirilebilmelidir.
- Randevunun açıklaması değiştirilebilmelidir.
- Kaydetme işleminden sonra güncellenen bilgiler listede görüntülenmelidir.

## Özelliklerin Nasıl Deneneceği

### Randevu Ekleme Özelliğini Deneme

1. Randevu Takip Sistemi'ni açın.
2. Tarih alanına bir tarih girin.
3. Saat alanına bir saat girin.
4. Açıklama alanına randevu açıklamasını yazın.
5. **Randevu Ekle** butonuna basın.
6. Oluşturulan randevunun **Randevularım** bölümünde görüntülendiğini kontrol edin.
7. Sayfayı yenileyerek randevunun kaybolmadığını kontrol edin.

### Boş Alan Kontrolünü Deneme

1. Tarih, saat veya açıklama alanlarından birini boş bırakın.
2. **Randevu Ekle** butonuna basın.
3. Sistem boş alan bulunduğunda kullanıcıya uyarı göstermelidir.
4. Boş bilgilerle yeni randevu oluşturulmadığı kontrol edilmelidir.

### Randevu Düzenleme Özelliğini Deneme

1. Daha önce oluşturulmuş bir randevu bulun.
2. Randevunun yanında bulunan **Düzenle** butonuna basın.
3. Tarih, saat veya açıklama bilgilerinden birini değiştirin.
4. **Randevuyu Güncelle** butonuna basın.
5. Randevunun güncellenen bilgilerle listede görüntülendiğini kontrol edin.

## Veri Saklama

Randevu bilgileri tarayıcının `LocalStorage` özelliği kullanılarak saklanmaktadır.

Bu nedenle sayfa yenilendiğinde daha önce oluşturulan randevuların korunması sağlanmaktadır.

## Proje Dosyaları

- `index.html` → Web sayfasının yapısını oluşturur.
- `style.css` → Web sayfasının görünümünü ve tasarımını düzenler.
- `script.js` → Randevu ekleme, listeleme, düzenleme, silme ve veri saklama işlemlerini gerçekleştirir.
- `README.md` → Proje hakkında bilgi ve kullanım açıklamalarını içerir.

## Geliştirme Durumu

| Görev | Durum |
|---|---|
| Randevu ekleme özelliği | Tamamlandı |
| Randevuları listeleyebilme | Yapılacak |
| Randevuları silme | Yapılacak |
| Randevu düzenleme | Tamamlandı |
| Randevu arama/filtreleme | Yapılacak |

## Proje Deposu

GitHub Repository:

https://github.com/havvanurcantunc/randevu-takip-sistemi
