export default (
  data,
  {
    title,
    description,
    content
  }) => `<!DOCTYPE html>
<html lang=${ data.lang }>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="${ description }">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>${ title }</title>
    <link rel="icon" type="image/svg+xml" href="/assets/logo.svg">
    <link href="/assets/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/style.css" rel="stylesheet" type="text/css">
  </head>
  <body class='bg-fresh'>
    <nav class="navbar position-absolute d-flex justify-content-between align-items-center w-100 pt-4">
      <a class="navbar-brand mr-3 text-white font-epic bg-fresh px-2" href="/">
        motifs-js</a>
      
      <div>
        <ul class="navbar-nav mr-auto w-100 justify-content-end text-right">
          <li class="nav-item active">
            <a href="/releases"
                class="nav-link text-white bg-fresh px-2">
              Releases</a>
          </li>
        </ul>
      </div>
    </nav>
    ${ content }
  </body>
</html>`