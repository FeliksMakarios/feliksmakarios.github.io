---
layout: default
permalink: /en/teaching/
lang: en
slug: teaching
title: Teaching
subtitle: "Courses at UPH Informatics"
---

{% comment %} Course cards link to /en/teaching/<slug>/ (layout: course). {% endcomment %}

<h2 id="courses">Courses</h2>

<p>Each course has its own page, organised by semester: syllabus (RPS), lecture slides, quizzes and exams, student assignments and projects, and photos.</p>

{% for group in site.data.teaching.groups %}
<h3>{{ group.label.en }}</h3>
<div class="area-grid">
{% for course in group.courses %}
  {% include course-card.html course=course group=group lang="en" %}
{% endfor %}
</div>
{% endfor %}

<h2 id="supervision">Supervision</h2>

{{ site.data.teaching.supervision.en }}
