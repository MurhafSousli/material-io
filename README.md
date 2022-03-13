# What is Metabook

Metabook is a simple implementation of [Material.io](https://material.io)

**The project is still WIP**

### Usage

1. Create a new markdown file in `assets/docs`, e.g. `example-title.md`
2. Generate a component inside `components-examples` directory and export it inside examples `components-examples.module`, e.g. `example-title-component`
3. Export it in `index.ts` in the same directory

To show the component and its code inside the markdown, use the following syntax:

```md
The `<example-title>` component is bla bla bla.

#### Example

<!-- example(ExampleTitleComponent) -->
```

Add a demo example including its source code inside your markdown using the comment syntax `<!-- example(YourComponentClassName) -->`

> Note that inside the braces of the comment should contain the component class name.

4. Run the task `npm run compodoc:build` to generate the documentation of the newly added component (this will generate a file `assets/docs/documentation.json`).

> Whenever you update the examples components, you need to re-run `npm run compodoc:build` to update the source code in the documentation.


5. Update the components list of your `MetabookModule` in `AppModule`

```ts
/**
 * List of routes for each component page
 */
const metabookRoutes: StoryRoute[] = [
  {
    title: 'Example Title',
    path: 'example-title'
  },
  {
    title: 'Example Paragraph',
    path: 'example-paragraph'
  }
];

@NgModule({
  imports: [
    MetabookModule.forRoot({
      routes: metabookRoutes,
      components: [
        ExampleTitleComponent
      ]
    })
  ]
})
export class AppModule {
}
```

You can override the documentation directory using the config of `MetabookModule`

```ts
MetabookModule.forRoot({
  routes: metabookRoutes,
  markdownDirPath: 'assets/docs',
  documentationPath: 'assets/docs/documentation.json',
  components: [
    ExampleTitleComponent
  ]
})
```

#### Contribution

Feel free to join the discussion and send PRs to the repo, I would love hear your input!
