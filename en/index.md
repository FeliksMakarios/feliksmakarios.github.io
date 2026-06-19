---
layout: default
permalink: /en/
lang: en
slug:
title:
show_title: false
description: "Feliks Samosir — Lecturer and researcher in Natural Language Processing at Universitas Pelita Harapan."
---

<section class="hero">
  <img src="/assets/img/feliks.jpg" alt="Feliks Samosir" class="hero-photo"
       onerror="this.style.display='none'">
  <div class="hero-text">
    <h1>Feliks Victor Parningotan Samosir</h1>
    <p class="hero-role">
      Department Chair of Informatics<br>
      Faculty of AI and Data Science, Universitas Pelita Harapan
    </p>
    <div class="hero-links">
      <a href="mailto:feliksmakarios19@gmail.com">Email</a>
      <a href="https://scholar.google.com/citations?user=JGC7RIoAAAAJ&hl">Google Scholar</a>
      <a href="https://github.com/FeliksMakarios">GitHub</a>
      <a href="https://linkedin.com/in/feliksmakarios">LinkedIn</a>
    </div>
  </div>
</section>

## About

I am a lecturer in Informatics and the Department Chair at the Faculty of AI and Data Science, Universitas Pelita Harapan (UPH), Tangerang, Indonesia. I teach courses across the undergraduate Informatics curriculum, including Introduction to Informatics and Computing, Object-Oriented Modeling, Database Systems, Introduction to Data Science, Advanced Machine Learning, Natural Language Processing, and Data Science Application Development Studio.

My research investigates what fails when mainstream NLP and machine learning systems encounter underrepresented Indonesian contexts. The work is organized around four areas: domain-specific NLP for specialized Indonesian text, low-resource Indonesian local languages, bias and fairness in Indonesian NLP datasets and models, and applied machine learning for Indonesian data. I lead a UPH-funded project building a multi-domain Batak Toba language corpus, and I am part of the SEACrowd Apprentice 2026 program co-developing CoRaL, a multi-dimensional data curation framework for low-resource language training corpora, with collaborators at <a href="https://seacrowd.org/apprenticeship">SEACrowd</a>.

I supervise undergraduate research primarily in NLP, with a steady minority of projects in applied machine learning. Recent thesis topics range from aspect-based sentiment analysis on Indonesian e-commerce to semantic search for theological corpora, dataset bias auditing, automatic speech recognition for Javanese, and tree-based ensemble methods for environmental data. The full list lives on the <a href="/en/students/">Students</a> page.

I earned my M.Kom. from <a href="https://www.maranatha.edu/">Universitas Kristen Maranatha</a> (Bandung) in 2022, advised by <a href="https://smartech.maranatha.edu/dosen/hapnes-toba/" target="_blank" rel="noopener">Hapnes Toba</a> and <a href="https://smartech.maranatha.edu/dosen/mewati-ayub/" target="_blank" rel="noopener">Mewati Ayub</a>. My thesis introduced BESKlus, a BERT-based extractive summarization model with K-Means clustering for scientific papers. Before that I earned my S.Pd. in Informatics Engineering from <a href="https://um.ac.id/">Universitas Negeri Malang</a> in 2018, advised by <a href="https://pakar.um.ac.id/Data/Peneliti/u=7acd40b9-08f6-42ad-b72c-89b05c5dd868" target="_blank" rel="noopener">Heru Wahyu Herwanto</a> and <a href="https://pakar.um.ac.id/Data/Peneliti/u=7aa0937c-a5bd-4d63-9320-02680342670a" target="_blank" rel="noopener">Muhammad Jauharul Fuady</a>.

## Recent news

{% assign news = site.data.news | sort: "date" | reverse %}
{% if news and news.size > 0 %}
{% assign first_news = news[0] %}
{% assign latest_year = first_news.date | slice: 0, 4 %}
{% assign news_by_year = news | group_by_exp: "item", "item.date | slice: 0, 4" %}

<div class="news-timeline">
{% for year_group in news_by_year %}{% if year_group.name == latest_year %}<details class="year-group" open>{% else %}<details class="year-group">{% endif %}<summary class="year-summary"><span class="year-label">{{ year_group.name }}</span><span class="year-count">{{ year_group.items.size }} {% if year_group.items.size == 1 %}entry{% else %}entries{% endif %}</span></summary><ul class="news-list">{% for item in year_group.items %}<li class="news-item"><span class="news-date">{{ item.date }}</span><div class="news-body"><strong>{{ item.title.en }}</strong><p>{{ item.body.en }}</p></div></li>{% endfor %}</ul></details>{% endfor %}
</div>
{% else %}
<p class="muted-note">No recent news.</p>
{% endif %}

## Looking for a thesis supervisor?

If you are a UPH Informatics student interested in NLP or applied ML, take a look at my <a href="/en/research/">research areas</a>.
Each area's detail page lists open thesis topics; feel free to email me to discuss ideas.

<div class="callout">
  <p><strong>Currently open for:</strong> undergraduate thesis mentees in low-resource NLP (Batak Toba),
  Indonesian sentiment analysis, fairness audits, and applied computer vision. Basic familiarity with
  Python and Hugging Face Transformers is helpful.</p>
</div>
