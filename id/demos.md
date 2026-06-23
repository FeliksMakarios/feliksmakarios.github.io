---
layout: default
permalink: /id/demos/
lang: id
slug: demos
title: Demo
subtitle: "Prototipe interaktif dari riset, pengajaran, dan outreach"
---

<p class="lead">
Prototipe yang bisa dijalankan, dibagi tiga kategori: <strong>My Project</strong>
untuk demo yang saya bangun dari riset saya sendiri dan side project,
<strong>Student Project</strong> dari skripsi atau capstone matkul yang saya bimbing, dan
<strong>Outreach</strong> dari kegiatan open house untuk siswa SMA.
</p>

<div class="demo-tabs" role="group" aria-label="Kategori demo">
  <button data-tab="my-project" class="active" type="button">My Project</button>
  <button data-tab="student-project" type="button">Student Project</button>
  <button data-tab="outreach" type="button">Outreach</button>
</div>

<section id="my-project" class="demo-section">

<div class="card-demo">
  <div class="thumb" aria-hidden="true">🧩</div>
  <div>
    <h3>Visualisasi Interaktif Mata Kuliah NLP</h3>
    <p class="meta">Pelengkap pengajaran · Galeri visualisasi seluruh mata kuliah</p>
    <p>Galeri interaktif konsep-konsep NLP yang saya bangun sebagai pendamping mata kuliah Natural Language Processing. Mencakup tokenisasi, embedding, attention, komputasi sekuensial dan paralel, computational graph, serta beberapa ide inti lain dalam visualisasi yang berjalan di browser.</p>
    <p><a href="/demos/visualisasi-interaktif-nlp/" target="_blank" rel="noopener">Jalankan demo →</a></p>
  </div>
</div>

<div class="card-demo">
  <div class="thumb" aria-hidden="true">📄</div>
  <div>
    <h3>BESKlus: BERT Extractive Summarization with K-Means Clustering</h3>
    <p class="meta">Proyek tesis M.Kom. saya · 2022 · Hugging Face Space</p>
    <p>Model extractive summarization untuk artikel ilmiah, menggabungkan embedding BERT dan K-Means clustering untuk memilih kalimat representatif. Tempelkan abstrak atau paragraf dan lihat hasil ringkasannya.</p>
    <p><a href="https://huggingface.co/spaces/makarios19/BESKlus" target="_blank" rel="noopener external">Jalankan demo →</a></p>
  </div>
</div>

<div class="card-demo">
  <div class="thumb" aria-hidden="true">🧾</div>
  <div>
    <h3>Paper Extractor</h3>
    <p class="meta">Side project · Hugging Face Space</p>
    <p>Utilitas kecil untuk menarik field terstruktur (judul, penulis, abstrak, kata kunci) dari makalah PDF. Dibangun sebagai tool pribadi yang berkembang jadi demo iseng.</p>
    <p><a href="https://huggingface.co/spaces/makarios19/paperExtractor?logs=container" target="_blank" rel="noopener external">Jalankan demo →</a></p>
  </div>
</div>

</section>

<section id="student-project" class="demo-section" hidden>

<div class="card-demo">
  <div class="thumb" aria-hidden="true">📖</div>
  <div>
    <h3>Pencarian Semantik Al-Qur'an Bahasa Indonesia</h3>
    <p class="meta">Oleh Erwiyono Yusuf · Skripsi 2026 · Hugging Face Space</p>
    <p>Sistem pencarian semantik untuk terjemahan Al-Qur'an Bahasa Indonesia, dibangun dari model transformer hasil fine-tuning. Cari berdasarkan makna, bukan keyword.</p>
    <p><a href="https://huggingface.co/spaces/erwiyonoyusuf/Semantic-Search-Alquran-terjemahan-Indonesia" target="_blank" rel="noopener external">Jalankan demo →</a></p>
  </div>
</div>

<div class="card-demo">
  <div class="thumb" aria-hidden="true">📝</div>
  <div>
    <h3>Peringkasan Berita Abstraktif dengan Flan-T5</h3>
    <p class="meta">Oleh Audrey Roselian · Skripsi 2024 · Streamlit</p>
    <p>Perbandingan peringkasan abstraktif dan ekstraktif pada teks berita Indonesia menggunakan Flan-T5. Tempelkan artikel apa saja dan lihat kedua pendekatan berdampingan.</p>
    <p><a href="https://abstractivesumm-audreyy.streamlit.app/" target="_blank" rel="noopener external">Jalankan demo →</a></p>
  </div>
</div>

<div class="card-demo">
  <div class="thumb" aria-hidden="true">🛍️</div>
  <div>
    <h3>Pencarian Semantik Ritel dengan IndoBERT</h3>
    <p class="meta">Oleh Christian Folma Dio · Skripsi 2026 · Hugging Face Space</p>
    <p>Prototipe pencarian semantik berbasis IndoBERT untuk produk ritel Indonesia. Ketik deskripsi produk dengan bahasa natural dan temukan match yang relevan.</p>
    <p><a href="https://huggingface.co/spaces/Folma/IndoBERT-Retail-Search" target="_blank" rel="noopener external">Jalankan demo →</a></p>
  </div>
</div>

</section>

<section id="outreach" class="demo-section" hidden>

<p>
Demo langsung yang saya bangun untuk acara open house Informatika UPH dan kunjungan
sekolah. Dirancang untuk mengenalkan konsep machine learning ke siswa SMA dalam waktu
kurang dari lima menit menggunakan webcam mereka. Semua di-prototype di
<a href="https://teachablemachine.withgoogle.com/">Teachable Machine</a>.
</p>

<div class="card-demo">
  <div class="thumb" aria-hidden="true">🦸</div>
  <div>
    <h3>Superhero Classifier</h3>
    <p class="meta">Klasifikasi citra · Teachable Machine · Target: siswa SMA</p>
    <p>Mengenali beberapa kostum superhero dari feed webcam. Dipakai di open house untuk memantik diskusi tentang data pelatihan, ketidakseimbangan kelas, dan apa arti "belajar" untuk sebuah model.</p>
    <p><a href="/demos/superheroes/">Jalankan demo →</a></p>
  </div>
</div>

<div class="card-demo">
  <div class="thumb" aria-hidden="true">💇</div>
  <div>
    <h3>Hair Type Classifier</h3>
    <p class="meta">Klasifikasi citra · Teachable Machine · Target: siswa SMA</p>
    <p>Mengklasifikasikan jenis rambut dari feed webcam. Contoh yang sengaja dipilih agar relatable, untuk menunjukkan bagaimana model ML bergeneralisasi (dan gagal) pada variasi visual dunia nyata.</p>
    <p><a href="/demos/hairtype/">Jalankan demo →</a></p>
  </div>
</div>

</section>

<script>
  (function() {
    var buttons = document.querySelectorAll('.demo-tabs button');
    var sections = document.querySelectorAll('.demo-section');
    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var tab = btn.getAttribute('data-tab');
        buttons.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        sections.forEach(function(s) {
          s.hidden = (s.id !== tab);
        });
      });
    });
  })();
</script>
