export default ({ article, articles, index }) =>

`<li>
  <a href="/releases/${ articles.length - index }">
    <b>${ article.title }</b></a>
  <span class="badge badge-pill bg-fresh">
    ${ article.date }</span>
  ${
    article.tags.map(tag => `
    <span class="badge badge-pill bg-fresh">
      ${ tag }</span>`
    )
      .join('')
  }
</li>`