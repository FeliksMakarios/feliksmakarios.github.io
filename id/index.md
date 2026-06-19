---
layout: default
permalink: /id/
lang: id
slug:
title:
show_title: false
description: "Feliks Samosir — Dosen dan peneliti Natural Language Processing di Universitas Pelita Harapan."
---

<section class="hero">
  <img src="/assets/img/feliks.jpg" alt="Feliks Samosir" class="hero-photo"
       onerror="this.style.display='none'">
  <div class="hero-text">
    <h1>Feliks Victor Parningotan Samosir</h1>
    <p class="hero-role">
      Ketua Program Studi Informatika<br>
      Fakultas AI dan Data Science, Universitas Pelita Harapan
    </p>
    <div class="hero-links">
      <a href="mailto:feliksmakarios19@gmail.com">Email</a>
      <a href="https://scholar.google.com/citations?user=JGC7RIoAAAAJ&hl">Google Scholar</a>
      <a href="https://github.com/FeliksMakarios">GitHub</a>
      <a href="https://linkedin.com/in/feliksmakarios">LinkedIn</a>
    </div>
  </div>
</section>

## Tentang saya

Saya dosen Informatika sekaligus Ketua Program Studi Informatika di Fakultas AI dan Data Science, Universitas Pelita Harapan (UPH), Tangerang. Saya mengajar mata kuliah lintas kurikulum Informatika S1, antara lain Introduction to Informatics and Computing, Object-Oriented Modeling, Database Systems, Introduction to Data Science, Advanced Machine Learning, Natural Language Processing, dan Data Science Application Development Studio.

Riset saya mempelajari apa yang patah ketika sistem NLP dan machine learning mainstream bertemu dengan konteks Indonesia yang kurang terwakili. Pekerjaan ini terbagi dalam empat area: NLP spesifik domain untuk teks Indonesia khusus, bahasa-bahasa lokal Indonesia low-resource, bias dan fairness pada dataset serta model NLP Indonesia, dan applied machine learning untuk data Indonesia. Saya memimpin proyek pendanaan UPH untuk membangun korpus multi-domain Bahasa Batak Toba, dan saya juga bagian dari program SEACrowd Apprentice 2026 yang sedang mengembangkan CoRaL, framework kurasi data multi-dimensi untuk korpus pelatihan bahasa low-resource, bersama kolaborator di <a href="https://seacrowd.org/apprenticeship">SEACrowd</a>.

Saya membimbing riset S1 dengan fokus utama NLP, ditambah sebagian kecil proyek applied machine learning. Topik skripsi terkini mencakup analisis sentimen berbasis aspek pada e-commerce Indonesia, pencarian semantik untuk korpus teologi, audit bias dataset, automatic speech recognition untuk Bahasa Jawa, sampai metode ensemble berbasis tree untuk data lingkungan. Daftar lengkapnya ada di halaman <a href="/id/students/">Mahasiswa</a>.

Saya meraih gelar M.Kom. dari <a href="https://www.maranatha.edu/">Universitas Kristen Maranatha</a> (Bandung) tahun 2022, dibimbing oleh <a href="https://smartech.maranatha.edu/dosen/hapnes-toba/" target="_blank" rel="noopener">Hapnes Toba</a> dan <a href="https://smartech.maranatha.edu/dosen/mewati-ayub/" target="_blank" rel="noopener">Mewati Ayub</a>. Tesis saya memperkenalkan BESKlus, model extractive summarization berbasis BERT dengan K-Means clustering untuk artikel ilmiah. Sebelumnya saya menempuh pendidikan S.Pd. Teknik Informatika di <a href="https://um.ac.id/">Universitas Negeri Malang</a> tahun 2018, dibimbing oleh <a href="https://pakar.um.ac.id/Data/Peneliti/u=7acd40b9-08f6-42ad-b72c-89b05c5dd868" target="_blank" rel="noopener">Heru Wahyu Herwanto</a> dan <a href="https://pakar.um.ac.id/Data/Peneliti/u=7aa0937c-a5bd-4d63-9320-02680342670a" target="_blank" rel="noopener">Muhammad Jauharul Fuady</a>.

## Kabar terbaru

{% assign news = site.data.news | sort: "date" | reverse %}
{% if news and news.size > 0 %}
{% assign first_news = news[0] %}
{% assign latest_year = first_news.date | slice: 0, 4 %}
{% assign news_by_year = news | group_by_exp: "item", "item.date | slice: 0, 4" %}

<div class="news-timeline">
{% for year_group in news_by_year %}{% if year_group.name == latest_year %}<details class="year-group" open>{% else %}<details class="year-group">{% endif %}<summary class="year-summary"><span class="year-label">{{ year_group.name }}</span><span class="year-count">{{ year_group.items.size }} entri</span></summary><ul class="news-list">{% for item in year_group.items %}<li class="news-item"><span class="news-date">{{ item.date }}</span><div class="news-body"><strong>{{ item.title.id }}</strong><p>{{ item.body.id }}</p></div></li>{% endfor %}</ul></details>{% endfor %}
</div>
{% else %}
<p class="muted-note">Belum ada kabar terbaru.</p>
{% endif %}

## Mencari dosen pembimbing TA?

Kalau kamu mahasiswa Informatika UPH yang tertarik di NLP atau applied ML, silakan lihat <a href="/id/research/">bidang riset saya</a>.
Tiap halaman detail bidang mencantumkan topik TA yang terbuka; silakan email saya untuk diskusi ide.

<div class="callout">
  <p><strong>Sedang terbuka untuk:</strong> bimbingan skripsi di bidang NLP low-resource
  (Batak Toba), sentiment analysis Indonesia, audit fairness, dan applied computer vision.
  Dasar Python dan Hugging Face Transformers akan sangat membantu.</p>
</div>
