# hreflang repro

Minimal reproduction: `generateMetadata` returning `alternates.languages` makes the development server log

```
λ  ERROR  Invalid DOM property `%s`. Did you mean `%s`? hreflang hrefLang
```

Steps:

1. `npm install`
2. `npx expo start --web` and open http://localhost:8081
3. Watch the terminal.

`app.json` uses `"web": { "output": "static" }`, and `src/app/index.tsx` is the only route with metadata.
