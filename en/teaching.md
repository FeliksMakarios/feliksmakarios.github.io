---
layout: default
permalink: /en/teaching/
lang: en
slug: teaching
title: Teaching
subtitle: "Courses at UPH Informatics"
---

{{ site.data.teaching.intro.en }}

{% comment %} Course cards link to /en/teaching/<slug>/ (layout: course). {% endcomment %}

<h2 id="now">Teaching this semester</h2>

<div class="area-grid">
{% for group in site.data.teaching.groups %}{% for course in group.courses %}{% if course.teaching_now %}
  {% include course-card.html course=course group=group lang="en" %}
{% endif %}{% endfor %}{% endfor %}
</div>

<h2 id="courses">Courses</h2>

<p>Each course has its own page with the syllabus (RPS), lecture slides, assignments, quizzes and exams, references, and a per-semester archive.</p>

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
