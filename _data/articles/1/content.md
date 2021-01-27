In these release notes are detailed `motifs-js@0.4.1` new features, changes and fixes.

Work focused on **improving [WEBSITE](/motifs/website) mapping** (lighten description, most notably) and **generating a basic sitemap**.

Some time has also been spent in updating the [README](/motifs/readme) introduction, "what is ..." and "how to" section.

## WEBSITE mapping

While we didn't changed the logic behind the **provision > mapping** process, we greatly improved the way to describe mapping.

### WEBSITE_FOLDER

An abstraction has been put on [FILE](/motifs/file)/[FOLDER](/motifs/folder) with the introduction of [WEBSITE_PAGE](/motifs/website-page) and [WEBSITE_FOLDER](/motifs/website-folder).

WEBSITE_FOLDER exposes both `.shape()` and `.build()` methods.

This logical separation allows us to minimaly describe website folder's content (using `.shape(content: {})`) and to make it build in a dedicated scope (inside [`WEBSITE.build()` (see on GitHub)](https://github.com/Skaant/motifs-js/blob/master/_motifs/website/build/build.js)).

The mapping file now looks like (ex. this website) :

```javascript
export default (
  data,
  options
) => ({
  '': websitePageMotif.shape(
    homeTemplate,
    data
  ),
  'motifs': websiteFolderMotif.shape(
    data.motifs.reduce(
      (acc, motif) => ({
        ...acc,
        [motif.id]: websitePageMotif.shape(
          motifTemplate,
          {
            ...data,
            motif
          }
        )
      }),
      {}
    )
  )
})
```

For comparaison and information [on issue #46](https://github.com/Skaant/motifs-js/issues/46).

### WEBSITE_PAGE

As for WEBSITE_FOLDER, WEBSITE_PAGE has been reworked to expose `.shape(name, data)` (description) and `.build()` encapsulated in [`WEBSITE_FOLDER.build()` method (see on GitHub)](https://github.com/Skaant/motifs-js/blob/master/_motifs/website-folder/build/build.js).

Now, as shown above, path is made of nested object property name.

## FOLDER & WEBSITE build improvements

### FOLDER nested path

FOLDER `create(path: string)` now allows `path` to be nested (ex: `a/b/c`).

More information [on issue #38](https://github.com/Skaant/motifs-js/issues/38).

### WEBSITE_PAGE creates its own folder

While we'd want to add this feature on PAGE `build()` too, we started by implementing a minimal safe-path mechanism on WEBSITE_PAGE.

In mapping, WEBSITE_PAGE can now be shaped at the root of its "url" parent, instead of having to create an encapsulating FOLDER.

More information [on issue #20](https://github.com/Skaant/motifs-js/issues/38).

## Sitemap

We achieved building a `sitemap.xml` file at the root of target website.

The sitemap now only exposes `urlset > url > loc` property. But conception has been made to allow other properties to be added (ex: `lastmod`, `changefreq`), while none has been tested.

This process is included in WEBSITE `.build()` method.

## Article

Article has been previously moved from [`imrok`](https://github.com/Skaant/imrok-2) repo to core `motifs-js`.

A `.create()` method has been added to incrementaly generates article folder and file.

Content has been moved from `:id/:id.article.js` file to `:id/content.md` to benefit from Markdown hints.

Article also check for images inside src folder to copy them in dest.

## Conclusion and roadmap

This was a well deserved improvement for WEBSITE build, though we now have four instances to maintain.

Update on every repo was quite easy (just refactor the `mapping`) file, and **successfully implements atomic change.**

### Roadmap

Next steps should seek [SPEC](/motifs/spec) improvements, notably to ouput logging and notify failing tests at the end of a run.

More details [on issue #48](https://github.com/Skaant/motifs-js/issues/48).

Another axis would be to consolidate existing code base with "basics" ([GLOBAL](/motifs/global), [COMMAND](/motifs/command)) refactoring and tests.

Addition of new MOTIFS, description and for some implementation, should follow :
* FRAMEWORK,
* PROJECT,
* LOG,
* OPTIONS ...

See the full MOTIFS-todo list [on issue #35](https://github.com/Skaant/motifs-js/issues/35).

Stay tuned !