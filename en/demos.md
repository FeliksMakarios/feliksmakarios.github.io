---
layout: default
permalink: /en/demos/
lang: en
slug: demos
title: Demos
subtitle: "Interactive prototypes from research, teaching, and outreach"
---

<p class="lead">
Working prototypes split into three categories: <strong>My Project</strong> for demos
I built around my own research and side projects, <strong>Student Project</strong> for
demos from thesis or course capstones I supervised, and <strong>Outreach</strong> for
demos used at open-house events with high-school students.
</p>

<div class="demo-tabs" role="group" aria-label="Demo categories">
  <button data-tab="my-project" class="active" type="button">My Project</button>
  <button data-tab="student-project" type="button">Student Project</button>
  <button data-tab="outreach" type="button">Outreach</button>
</div>

<section id="my-project" class="demo-section">

<div class="card-demo">
  <div class="thumb" aria-hidden="true">📄</div>
  <div>
    <h3>BESKlus: BERT Extractive Summarization with K-Means Clustering</h3>
    <p class="meta">My M.Kom. thesis project · 2022 · Hugging Face Space</p>
    <p>Extractive summarization model for scientific papers, combining BERT embeddings with K-Means clustering to pick representative sentences. Paste an abstract or paragraph and see the extracted summary.</p>
    <p><a href="https://huggingface.co/spaces/makarios19/BESKlus" target="_blank" rel="noopener external">Launch demo →</a></p>
  </div>
</div>

<div class="card-demo">
  <div class="thumb" aria-hidden="true">🧾</div>
  <div>
    <h3>Paper Extractor</h3>
    <p class="meta">Side project · Hugging Face Space</p>
    <p>A small utility that pulls structured fields (title, authors, abstract, keywords) from PDF papers. Built as a personal tool that turned into a fun demo.</p>
    <p><a href="https://huggingface.co/spaces/makarios19/paperExtractor?logs=container" target="_blank" rel="noopener external">Launch demo →</a></p>
  </div>
</div>

</section>

<section id="student-project" class="demo-section" hidden>

<div class="card-demo">
  <div class="thumb" aria-hidden="true">📖</div>
  <div>
    <h3>Indonesian Qur'an Semantic Search</h3>
    <p class="meta">By Erwiyono Yusuf · Thesis 2026 · Hugging Face Space</p>
    <p>Semantic search system for Indonesian Qur'an translation, built on a fine-tuned transformer model. Query by meaning rather than keyword matching.</p>
    <p><a href="https://huggingface.co/spaces/erwiyonoyusuf/Semantic-Search-Alquran-terjemahan-Indonesia" target="_blank" rel="noopener external">Launch demo →</a></p>
  </div>
</div>

<div class="card-demo">
  <div class="thumb" aria-hidden="true">📝</div>
  <div>
    <h3>Abstractive News Summarization with Flan-T5</h3>
    <p class="meta">By Audrey Roselian · Thesis 2024 · Streamlit</p>
    <p>Comparative abstractive and extractive summarization on Indonesian news text using Flan-T5. Paste any news article and see both approaches side by side.</p>
    <p><a href="https://abstractivesumm-audreyy.streamlit.app/" target="_blank" rel="noopener external">Launch demo →</a></p>
  </div>
</div>

<div class="card-demo">
  <div class="thumb" aria-hidden="true">🛍️</div>
  <div>
    <h3>IndoBERT Retail Semantic Search</h3>
    <p class="meta">By Christian Folma Dio · Thesis 2026 · Hugging Face Space</p>
    <p>IndoBERT-based semantic search prototype for Indonesian retail products. Type a product description in natural language and retrieve relevant matches.</p>
    <p><a href="https://huggingface.co/spaces/Folma/IndoBERT-Retail-Search" target="_blank" rel="noopener external">Launch demo →</a></p>
  </div>
</div>

</section>

<section id="outreach" class="demo-section" hidden>

<p>
Hands-on demos I've built for UPH Informatics open-house events and school visits.
Designed to introduce machine learning concepts to high-school students in under five
minutes, using their webcams as input. All prototyped in
<a href="https://teachablemachine.withgoogle.com/">Teachable Machine</a>.
</p>

<div class="card-demo">
  <div class="thumb" aria-hidden="true">🦸</div>
  <div>
    <h3>Superhero Classifier</h3>
    <p class="meta">Image classification · Teachable Machine · Target: high-school audience</p>
    <p>Recognizes several superhero costumes from a webcam feed. Used at open house to spark conversations about training data, class imbalance, and what "learning" actually means for a model.</p>
    <p><a href="/demos/superheroes/">Launch demo →</a></p>
  </div>
</div>

<div class="card-demo">
  <div class="thumb" aria-hidden="true">💇</div>
  <div>
    <h3>Hair Type Classifier</h3>
    <p class="meta">Image classification · Teachable Machine · Target: high-school audience</p>
    <p>Classifies hair types from a webcam feed. A deliberately relatable example to show how ML models generalize (and fail) on real-world visual variation.</p>
    <p><a href="/demos/hairtype/">Launch demo →</a></p>
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
