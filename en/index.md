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

<p class="lead">
I'm a lecturer in Informatics at Universitas Pelita Harapan, Tangerang. My research focuses on NLP and machine learning for underrepresented Indonesian contexts — local languages, specialized domains, and fairness concerns that mainstream systems often overlook.
</p>

<p class="lead">
Current projects include building a Batak Toba language corpus, analyzing bias in Indonesian QA datasets, and co-developing CoRaL — a multi-dimensional data curation framework for low-resource languages — with collaborators at VinUniversity, MBZUAI, and Universitas Indonesia.
</p>

## About

Before UPH, I worked as an IT support specialist at Sekolah Tinggi Alkitab Tiranus (Bandung), as a product development staff at Kapanlagi Youniverse (Malang), and as an elementary-school computer teacher. I hold an M.Kom. from Universitas Kristen Maranatha (Bandung) and an S.Pd. in Informatics Engineering from Universitas Negeri Malang.

My work spans low-resource language resources, bias and fairness in Indonesian NLP, domain-specific language technology (theological, educational, e-commerce), and applied machine learning for Indonesian data. I have led three UPH internal research grants as principal investigator, and I actively mentor undergraduate research projects that bridge modern NLP and ML methods with real-world applications — particularly for underrepresented languages, domains, and communities.

## Recent news

<ul class="news-list">
  {% assign news = site.data.news | sort: "date" | reverse %}
  {% for item in news limit:5 %}
    <li class="news-item">
      <span class="news-date">{{ item.date }}</span>
      <div class="news-body">
        <strong>{{ item.title.en }}</strong>
        <p>{{ item.body.en }}</p>
      </div>
    </li>
  {% endfor %}
</ul>

## Looking for a thesis supervisor?

If you are a UPH Informatics student interested in NLP or applied ML, take a look at my <a href="/en/research/">research areas</a>.
Each area's detail page lists open thesis topics; feel free to email me to discuss ideas.

<div class="callout">
  <p><strong>Currently open for:</strong> undergraduate thesis mentees in low-resource NLP (Batak Toba),
  Indonesian sentiment analysis, fairness audits, and applied computer vision. Basic familiarity with
  Python and Hugging Face Transformers is helpful.</p>
</div>
