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

<p class="lead">
Saya dosen Informatika di Universitas Pelita Harapan, Tangerang. Riset saya berfokus pada NLP dan machine learning untuk konteks Indonesia yang kurang terwakili — bahasa lokal, domain khusus, dan isu fairness yang sering terabaikan oleh sistem mainstream.
</p>

<p class="lead">
Proyek terkini mencakup pembangunan korpus bahasa Batak Toba, analisis bias pada dataset QA Indonesia, dan pengembangan bersama CoRaL — framework kurasi data multi-dimensi untuk bahasa low-resource — bersama kolaborator di VinUniversity, MBZUAI, dan Universitas Indonesia.
</p>

## Tentang saya

Sebelum di UPH, saya pernah bekerja sebagai IT support di Sekolah Tinggi Alkitab Tiranus (Bandung), product development di Kapanlagi Youniverse (Malang), dan guru komputer SD. Saya meraih gelar M.Kom. dari Universitas Kristen Maranatha (Bandung) dan S.Pd. Teknik Informatika dari Universitas Negeri Malang.

Kerja saya mencakup sumber daya bahasa low-resource, bias dan fairness pada NLP Indonesia, teknologi bahasa spesifik domain (teologi, pendidikan, e-commerce), dan applied machine learning untuk data Indonesia. Saya telah memimpin tiga hibah riset internal UPH sebagai ketua peneliti, dan aktif membimbing riset mahasiswa S1 yang menjembatani metode NLP dan ML modern dengan aplikasi nyata — khususnya untuk bahasa, domain, dan komunitas yang kurang terwakili.

## Kabar terbaru

<ul class="news-list">
  {% assign news = site.data.news | sort: "date" | reverse %}
  {% for item in news limit:5 %}
    <li class="news-item">
      <span class="news-date">{{ item.date }}</span>
      <div class="news-body">
        <strong>{{ item.title.id }}</strong>
        <p>{{ item.body.id }}</p>
      </div>
    </li>
  {% endfor %}
</ul>

## Mencari dosen pembimbing TA?

Kalau kamu mahasiswa Informatika UPH yang tertarik di NLP atau applied ML, silakan lihat <a href="/id/research/">bidang riset saya</a>.
Tiap halaman detail bidang mencantumkan topik TA yang terbuka; silakan email saya untuk diskusi ide.

<div class="callout">
  <p><strong>Sedang terbuka untuk:</strong> bimbingan skripsi di bidang NLP low-resource
  (Batak Toba), sentiment analysis Indonesia, audit fairness, dan applied computer vision.
  Dasar Python dan Hugging Face Transformers akan sangat membantu.</p>
</div>
