---
layout: default
permalink: /en/students/
lang: en
slug: students
title: Students
subtitle: "Current mentees and alumni"
---

<p class="lead">
Undergraduate thesis students I have supervised or am currently supervising. The data
below is a placeholder — actual names and current roles will be filled in over time.
If you are a past student and want to be listed (or corrected), please email me.
</p>

<h2>Current mentees</h2>

{% assign current = site.data.students.current %}
{% if current and current.size > 0 %}
<ul class="student-list">
  {% for s in current %}
    <li class="student-item">
      <div class="student-header">
        <span class="student-name">{{ s.name }}</span>
        <span class="student-cohort">Cohort {{ s.cohort }}</span>
      </div>
      <p class="student-title">{{ s.title.en }}</p>
      <div class="student-meta">
        <span class="tag tag-area">{{ s.area | replace: '-', ' ' | capitalize }}</span>
        <span class="tag tag-{{ s.status }}">{{ s.status | capitalize }}</span>
      </div>
    </li>
  {% endfor %}
</ul>
{% else %}
<p class="muted-note">No current mentees listed.</p>
{% endif %}

<h2>Alumni</h2>

{% assign alumni = site.data.students.alumni | sort: "year_graduated" | reverse %}
{% if alumni and alumni.size > 0 %}
<div class="alumni-timeline">
{% assign last_year = 0 %}
{% for s in alumni %}{% if s.year_graduated != last_year %}{% unless forloop.first %}</ul>{% endunless %}<h3 class="student-year-header">Class of {{ s.year_graduated }}</h3><ul class="student-list">{% assign last_year = s.year_graduated %}{% endif %}<li class="student-item"><div class="student-header"><span class="student-name">{{ s.name }}</span></div><p class="student-title">{{ s.title.en }}</p><div class="student-meta"><span class="tag tag-area">{{ s.area | replace: '-', ' ' | capitalize }}</span>{% if s.publication %}{% assign pub = site.data.publications | where: "id", s.publication | first %}{% if pub %}<span class="tag tag-pub">Published · {{ pub.year }}</span>{% endif %}{% endif %}</div>{% if s.current_role %}<p class="student-role"><em>Now:</em> {{ s.current_role }}</p>{% endif %}</li>{% if forloop.last %}</ul>{% endif %}{% endfor %}
</div>
{% else %}
<p class="muted-note">No alumni listed yet.</p>
{% endif %}
