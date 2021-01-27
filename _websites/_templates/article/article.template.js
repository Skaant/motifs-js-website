import layoutFragment from "../_fragments/layout/layout.fragment.js";
import showdown from 'showdown'

export default data => layoutFragment(
  data,
  {
    title: data.article.title
      + ' | Release ' + data.article.index
      + ' | ' + data.title,
    description: data.article.description
      || data.article.content
        .split('\n\n')[0]
        .replace(/"/g, '\"')
        .slice(0, 150),
    content: `<div class="container bg-white shadow py-5 px-md-5">
      <div class="row position-relative bg-blue align-content-center justify-content-center">
        <h1 class="main col-12">
          ${ data.article.title }</h1>
        <p class="mt-2 mb-5 col-12">
          published by
          <a href="mailto:romaric.ruga@gmail.com"
              class="text-golden font-weight-bold">
            rimarok</a>
          on
          <span class="badge badge-pill bg-fresh">
            ${ data.article.date }</span>
          ${
            data.article.tags.map(tag => `
            <span class="badge badge-pill bg-fresh">
              ${ tag }</span>`
            )
              .join('')
          }
        </p>
      </div>
      <div class="container py-5">
        ${
          (new showdown.Converter({
            simpleLineBreaks: true
          }))
            .makeHtml(data.article.content)
        }
      </div>
      <div class="row bg-blue">
        <p class="col-12">
          Retour
          <a href="/releases">Releases</a>
          /
          <a href="/">Accueil</a>
        </p>
      </div>
    </div>`
  })