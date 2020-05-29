# Coronavirus, summarised.

This is a site I made for a school assignment submission.

You may use the source code in adhereance to the license, provided [here](https://coronavirus-summarised.naka.to/copyright).
Thank you.

**-- [Dylan Kok](https://kakumei.naka.to) (Harukuni/@Kataharu)**

# コロナ、かいつまんでいた。
このサイトは私の学校の宿題です。

サイトのソースコードは誰が使えてもいいです。だって、利用規約がしたがってください。利用規約のページは[ここ](https://coronavirus-summarised.naka.to/copyright)です。
ありがとうございます。

**-- [春国](https://kakumei.naka.to)（ハルクニ）**

*すみません！下に情報は英語でだけ。*



Requirements
---

1. Webserver **(of any kind)**
2. **For the love of my sanity and life**, please __do not simply open the site locally__ (aka double-click .html files). **Do not make bug reports because of this.**

バカ (Idiotic) Issues
---

1. The numbers aren't working!

   [Stop it, get some help](https://www.youtube.com/watch?v=9Deg7VrpHbM). **Use a webserver for the love of this world.**
   *Ever heard of [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)? Yeah. That's the reason why it doesn't work.*

2. The page just breaks. There's no formatting! Help!

   *You have issues*. You seriously have issues. 
   **USE A WEBSERVER! or change everything to relative path.**

*Hello, if you use relative paths, just know, its bad practice. Especially on webservers. (I guess its okay for local .html)*

P.S. This is a joke, don't take it seriously.

Feature List (For Tutor) - Not for Public Use.
---

**General**

> 1. **Using JSON API:** Via [COVID-19 API](covid19api.com), homepage values are updated using JQuery JSON API. Death, active cases & recovered numbers are updated automatically everyday.
> 2. **FontAwesome 5 Icon Library** used for all icons.
> 3. **Server-less, Backend-less & Database-less** which means the site only requires a webserver. (Not even PHP CLI or any processor)
> 4. **JQuery** used for 80%~ of all Javascript functions.
> 5. **Navigation bar** changes colour when pages scroll.
> 6. **Custom Bulma installation** (forked from hiyamashuX) used.
>
> ```
> .
> ├── LICENSE
> ├── README.md
> ├── copyright.html
> ├── datasources.html
> ├── feedback.html
> ├── frontliners.html
> ├── index.html
> ├── static
> │   ├── coronavirus-strand.jpg
> │   ├── doctor.jpeg
> │   ├── earth.png
> │   ├── frontliners
> │   │   ├── hero-1.jpg
> │   │   ├── hero-2.jpg
> │   │   ├── hero-3.jpg
> │   │   ├── hero-4.jpg
> │   │   ├── hero-5.jpg
> │   │   ├── hero-6.jpg
> │   │   ├── hero-7.jpg
> │   │   └── hero-8.jpg
> │   └── hero-bg.png
> ├── stats.html
> ├── symptomschecker.html
> ├── timeline.html
> └── vendor
>     ├── bulma
>     │   ├── bulma.css
>     │   ├── navbar.js
>     │   └── timeline.css
>     ├── chartjs
>     │   ├── Chart.min.css
>     │   └── Chart.min.js
>     ├── dylankok
>     │   ├── all.css
>     │   ├── feedback
>     │   │   ├── feedback.css
>     │   │   └── feedback.js
>     │   ├── frontliners
>     │   │   ├── frontliners.css
>     │   │   └── frontliners.js
>     │   ├── index
>     │   │   ├── index.css
>     │   │   └── index.js
>     │   ├── stats
>     │   │   ├── stats.css
>     │   │   └── stats.js
>     │   ├── symptomschecker
>     │   │   ├── symptomschecker.css
>     │   │   └── symptomschecker.js
>     │   └── timeline
>     │       ├── timeline.css
>     │       └── timeline.js
>     ├── jquery
>     │   └── jquery.js
>     └── momentjs
>         └── moment.js
> ```

**Homepage - `/index.html`**

> 1. **`<video>`** of Coronavirus strand in first section. (Next to summary. Provided by my own CDN)
>    1. Fallback present. If `.webm` format is not supported, `.mp4` will be used, else `.png` will display
> 2. **Javascript & CSS** for "To all the Frontliners" & "Unsure of whether you caught COVID-19?" section to animate arrow (on right) and background image.
> 3. **CSS `:hover`** used for symptom cards.
>
> ```
> /index.html
> /vendor/dylankok/index/index.css
> /vendor/dylankok/index/index.js
> 
> ## Hiyamashū Government CDN (https://government.hiy.naka.to/)
> https://static.go.hiy.naka.to/coronavirus-summarised/coronavirus-strand.webm
> https://static.go.hiy.naka.to/coronavirus-summarised/coronavirus-strand.mp4
> ## Provided locally
> /static/coronavirus-strand.jpg
> ```

**Frontliners -`/frontliners.html`**

> 1. **Slideshow using Javascript** in hero header.
> 2. **`<iframe>`** embed of YouTube video on right.
> 3. **JQuery**; Smily face changes colour when clicked. (Bottom of page)
>
> ```
> /frontliners.html
> /vendor/dylankok/frontliners/frontliners.css
> /vendor/dylankok/frontliners/frontliners.js
> ```

**Statistics - `/stats.html`**

>1. **Chart.JS** for chart of coronavirus for past 31 days.
>2. **JQuery JSON API & AJAX API** used for API requests for charts and table.
>   1. You may select and see **data on chart of any country** (This excludes autonomous regions & states).
>   2. Flag and Country name dynamically update above chart. (See section `<h1 class="title">`)
>   3. Error message displayed if data is not available (For example for *Hong Kong* or *Macau*).
>   4. Data on both table and chart automatically updates as the API updates. (All API requests done on frontend).
>   5. Chart is hidden on mobile devices and notification displayed to inform user that the chart is not supported on mobile since mobile devices' screens are too small.
>3. **Moment.JS** to generate dynamically, the dates on the table (x-axis)
>4. **Flag-icon.css** used for flag icons on table.
>
>```
>/stats.html
>/vendor/dylankok/stats/stats.css
>/vendor/dylankok/stats/stats.js
>```

**Timeline of Events - `/timeline.html`**

> 1. Timeline **manually programmed** in till April 2020.
> 2. **Side Menu** brings you to respective anchor points.
> 3. **Scroll to top button** appears only when page is scrolled and hides when page scroll is (0, 0).
>
> ```
> /timeline.html
> /vendor/dylankok/timeline/timeline.css
> /vendor/dylankok/timeline/timeline.js
> ```

**Symptom Checker - `/symptomschecker.html`**

> 1. **100% custom programmed** form handler using JQuery.
> 2. Based off WHO (World Health Organisation) recommendations and advice.
>
> ```
> /symptomschecker.html
> /vendor/dylankok/symptomschecker/symptomschecker.css
> /vendor/dylankok/symptomschecker/symptomschecker.js
> ```

**Feedback - `feedback.html`** (Via Footer)

> 1. **Netlify Form API** to handle form storage.
> 2. **Zappier** to handle sending of Emails after submission.
> 3. **Anti-bot spam** using Re-Captcha & Hidden Honey-pot Field
>
> ```
> /feedback.html
> /vendor/dylankok/feedback/feedback.css
> /vendor/dylankok/feedback/feedback.js
> ```

**Copyright - `/license.html`** (Via Footer)

> 1. **Close tab button** at top left.
> 2. Small detail but clicking on the bottom footer link to `license.html` (the same page) will bring you to top instead of loading a new page.
>
> ```
> /license.html
> # No external CSS & JS
> ```

**Data Sources - `/datasources.html`** (Via Footer)

> 1. **Close tab button** at top left.
> 2. Small detail but clicking on the bottom footer link to `datasources.html` (the same page) will bring you to top instead of loading a new page.
>
> ```
> /license.html
> # No external CSS & JS
> ```



