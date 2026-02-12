---
layout: site
title: James Burgess
theme: panorama
---

<main class="site-content">
  {% include intro_block.html %}
  
  <section class="publications featured">
    <h2>Selected Publications</h2>
    <div class="publications-list">
      {% for p in site.data.papers %}
        {% include paper_row.html
          title=p.title
          venue=p.venue
          authors_html=p.authors_html
          image=p.image
          links=p.links
          note=p.note
          description=p.description
        %}
      {% endfor %}
    </div>
  </section>
  
  <section class="publications other">
    <h2>Other Publications</h2>
    <div class="publications-list">
      {% for p in site.data.other_papers %}
        {% include paper_text.html
          title=p.title
          venue=p.venue
          authors_html=p.authors_html
          links=p.links
          note=p.note
          description=p.description
        %}
      {% endfor %}
    </div>
  </section>
  
  <section class="teaching">
    <h2>Teaching & Service</h2>
    <div class="teaching-list">
      {% for course in site.data.teaching.courses %}
        <div class="course">{{ course.description }}</div>
      {% endfor %}
      {% for item in site.data.teaching.service %}
        <div class="course">{{ item.description }}</div>
      {% endfor %}
    </div>
  </section>
  
  <footer class="site-footer">
    <p>{{ site.data.footer.attribution }}</p>
  </footer>
</main> 