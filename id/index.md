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
  <img src="/assets/img/feliks.jpg" width="600" height="600" alt="Feliks Samosir" class="hero-photo"
       onerror="this.style.display='none'">
  <div class="hero-text">
    <h1>Feliks Victor Parningotan Samosir</h1>
    <p class="hero-role">
      Dosen Tetap Informatika<br>
      Fakultas AI dan Data Science, Universitas Pelita Harapan
    </p>
    {% include hero-links.html %}
  </div>
</section>

## Tentang saya

<p class="lead">Saya dosen tetap di Fakultas AI dan Data Science, Universitas Pelita Harapan (UPH), Tangerang. Riset saya mempelajari apa yang patah ketika sistem NLP dan machine learning mainstream bertemu dengan konteks Indonesia yang kurang terwakili, terutama bahasa lokal low-resource seperti Batak Toba. Saat ini saya memimpin riset Batak Toba tahap kedua yang didanai hibah internal UPH.</p>

<dl class="about-facts">
  <dt>Riset</dt>
  <dd>Empat area: NLP spesifik domain untuk teks Indonesia khusus, bahasa-bahasa lokal Indonesia low-resource, bias dan fairness pada dataset serta model NLP Indonesia, dan applied machine learning untuk data dunia nyata. Riset Batak Toba tahap pertama membangun <a href="https://github.com/FeliksMakarios/batak-toba-korpus">korpus multi-domain Batak Toba</a>; tahap kedua yang sedang berjalan menyusun pedoman anotasi Universal Dependencies untuk Batak Toba. Pada 2026 saya mengikuti program SEACrowd Apprentice dan ikut mengembangkan <a href="https://github.com/cppmai1103/CoRaL">CoRaL</a>, framework kurasi data multi-dimensi untuk korpus pelatihan bahasa low-resource, bersama kolaborator di <a href="https://seacrowd.org/apprenticeship">SEACrowd</a>. Rinciannya ada di halaman <a href="/id/research/">Riset</a>.</dd>

  <dt>Pengajaran</dt>
  <dd>Semester ini saya mengampu Kecerdasan Komputasional, Pengantar Pemelajaran Mesin, dan Pemrosesan Bahasa Alami. Sejak 2023 saya mengampu mata kuliah lintas kurikulum Informatika S1. RPS dan materi kuliahnya dapat dilihat di halaman <a href="/id/teaching/">Pengajaran</a>.
    <details class="about-more"><summary>Semua mata kuliah sejak 2023</summary>
      <p><strong>Mata kuliah dasar:</strong> Pengantar Informatika &amp; Komputasi, Organisasi &amp; Arsitektur Komputer, Pemodelan Berorientasi Objek, Sistem Basis Data, dan Pengembangan Piranti Lunak.</p>
      <p><strong>Data science dan kecerdasan buatan:</strong> Pengantar Data Science, Pengantar Kecerdasan Buatan, Pengantar Pemelajaran Mesin, Pemelajaran Mesin Lanjut, Studio Pengembangan Aplikasi Data Science, dan Pemrosesan Bahasa Alami.</p>
    </details>
  </dd>

  <dt>Bimbingan</dt>
  <dd>Saya membimbing riset S1 dengan fokus utama NLP, ditambah sebagian kecil proyek applied machine learning. Topik skripsi terkini mulai dari analisis sentimen berbasis aspek pada e-commerce Indonesia, pencarian semantik untuk korpus teologi, audit bias dataset, automatic speech recognition untuk Bahasa Jawa, sampai metode ensemble berbasis tree untuk data lingkungan. Daftar lengkapnya ada di halaman <a href="/id/students/">Mahasiswa</a>.</dd>

  <dt>Pendidikan</dt>
  <dd><strong>M.Kom.</strong>, <a href="https://www.maranatha.edu/">Universitas Kristen Maranatha</a>, Bandung, 2022. Tesis tentang BESKlus, model extractive summarization berbasis BERT dengan K-Means clustering untuk artikel ilmiah, dengan bimbingan <a href="https://smartech.maranatha.edu/dosen/hapnes-toba/" target="_blank" rel="noopener">Hapnes Toba</a> dan <a href="https://smartech.maranatha.edu/dosen/mewati-ayub/" target="_blank" rel="noopener">Mewati Ayub</a>.<br>
  <strong>S.Pd. Teknik Informatika</strong>, <a href="https://um.ac.id/">Universitas Negeri Malang</a>, 2018, dengan bimbingan <a href="https://pakar.um.ac.id/Data/Peneliti/u=7acd40b9-08f6-42ad-b72c-89b05c5dd868" target="_blank" rel="noopener">Heru Wahyu Herwanto</a> dan <a href="https://pakar.um.ac.id/Data/Peneliti/u=7aa0937c-a5bd-4d63-9320-02680342670a" target="_blank" rel="noopener">Muhammad Jauharul Fuady</a>.</dd>

  <dt>Jabatan</dt>
  <dd>Ketua Program Studi S1 Informatika UPH, April 2024 sampai Juli 2026.</dd>
</dl>

## Kabar terbaru

{% comment %}
  date_str is "YYYY-MM" or "YYYY-MM-DD". A full date saved without quotes is read
  by YAML as a date object, so turn every value into text (append: "") before
  sorting; mixing dates and strings in `sort` would break the build.
{% endcomment %}
{% assign news_by_date = site.news | group_by_exp: "item", "item.date_str | append: ''" | sort: "name" | reverse %}
{% assign news = "" | split: "" %}
{% for date_group in news_by_date %}{% assign news = news | concat: date_group.items %}{% endfor %}
{% if news.size > 0 %}
{% assign latest_year = news_by_date[0].name | slice: 0, 4 %}
{% assign news_by_year = news | group_by_exp: "item", "item.date_str | append: '' | slice: 0, 4" %}

<div class="news-timeline">
{% for year_group in news_by_year %}{% if year_group.name == latest_year %}<details class="year-group" open>{% else %}<details class="year-group">{% endif %}<summary class="year-summary"><span class="year-label">{{ year_group.name }}</span><span class="year-count">{{ year_group.items.size }} entri</span></summary><ul class="news-list">{% for item in year_group.items %}<li class="news-item"><span class="news-date">{% include date-label.html date=item.date_str lang="id" %}</span><div class="news-body"><strong>{{ item.title.id }}</strong><p>{{ item.text.id }}</p></div></li>{% endfor %}</ul></details>{% endfor %}
</div>
{% else %}
<p class="muted-note">Belum ada kabar terbaru.</p>
{% endif %}

## Mencari dosen pembimbing TA?

Kalau kamu mahasiswa Informatika UPH yang tertarik di NLP atau applied ML, silakan lihat <a href="/id/research/">bidang riset saya</a>.
Tiap halaman detail bidang mencantumkan topik TA yang terbuka; silakan email saya untuk diskusi ide.

{% assign open_topics = 0 %}{% for a in site.data.research.areas %}{% assign o = a.open_topics | where: "status", "open" %}{% assign open_topics = open_topics | plus: o.size %}{% endfor %}
<div class="callout">
  <p><strong>Sedang terbuka untuk:</strong> bimbingan skripsi di keempat bidang riset saya, dengan
  {{ open_topics }} topik yang masih terbuka saat ini. Contohnya NLP untuk bahasa low-resource apa pun, termasuk
  bahasa daerah Indonesia seperti Batak Toba, Jawa, atau Sunda (misalnya anotasi Universal Dependencies, evaluasi LLM,
  dan transfer lintas bahasa), NLP ucapan dan multimodal, bias pada model bahasa Indonesia,
  serta machine learning untuk data kesehatan dan lingkungan. Dasar Python dan Hugging Face Transformers akan
  sangat membantu.</p>
</div>
