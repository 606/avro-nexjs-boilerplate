# FAQ

## How is this deployed?

Deployment is handled by GitHub Actions and published to GitHub Pages.

## Can I add more pages?

Yes. Create a new markdown file under `content/` and a matching route under `app/(docs)/`.

```bash
# example
content/advanced-topics.md
app/(docs)/advanced-topics/page.tsx
```
