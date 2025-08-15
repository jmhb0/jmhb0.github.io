---
layout: site
title: James Burgess
theme: panorama
---

<table style="width:100%;max-width:918px;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr style="padding:0px">
      <td style="padding:0px">
        {% include intro_block.html %}
        <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tbody>
            <tr>
              <td style="padding:20px;width:100%;vertical-align:middle">
                <h2>Selected Publications</h2>
              </td>
            </tr>
          </tbody>
        </table>
        <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tbody>
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
          </tbody>
        </table>
        <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tbody>
            <tr>
              <td style="padding:20px;width:100%;vertical-align:middle">
                <h2>Other Publications</h2>
              </td>
            </tr>
          </tbody>
        </table>
        <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tbody>
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
          </tbody>
        </table>
        <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tbody>
            <tr>
              <td style="padding:20px;width:100%;vertical-align:middle">
                <h2>Teaching</h2>
                <br>
                Lecturer and teaching assistant, <a href="https://web.stanford.edu/class/biods276/">CS286/BIODS276</a> <em>Advanced Topics in Computer Vision and Biomedicine</em>, Stanford 2024.
                <br><br>
                Teaching assistant, <a href="https://biods220.stanford.edu/">CS271/BIODS220</a>, <em>Artificial Intelligence in Healthcare</em>, Stanford 2022.
              </td>
            </tr>
          </tbody>
        </table>
        <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tbody>
            <tr>
              <td style="padding:0px">
                <br>
                <p style="text-align:left;font-size:small;">
                  I stole this website template from <a href="https://jonbarron.info/">Jon Barron</a> who published his source code <a href="https://github.com/jonbarron/jonbarron_website">here</a>.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table> 