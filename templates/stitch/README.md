# Stitch page templates

HTML exports from the ConsultancyPro / Aspyre Stitch design system. Each file is a full standalone document; the Next.js app loads only the `<main>` region when rendering inside `SiteLayout`.

| File | ID | Use for |
|------|-----|---------|
| `content.html` | `content` | General content / service detail |
| `team.html` | `team` | Team & leadership |
| `projects.html` | `projects` | Portfolio & testimonials |
| `contact.html` | `contact` | Contact & locations |
| `blog.html` | `blog` | Blog / insights index |
| `faq.html` | `faq` | FAQ |

## Using a template on a page

```tsx
import { StitchTemplatePage } from "@/components/stitch-template-page";

export default function ExamplePage() {
  return <StitchTemplatePage templateId="content" />;
}
```

Preview all templates (dev): `/dev/stitch-templates`

## Notes

- Source files live here, not in `public/`, so they are not served as static assets.
- `public/CONTACT.txt` was corrupted (angle brackets stripped); `contact.html` was rebuilt from that content.
- Templates with modals/accordions include inline scripts; enable `enableScripts` only for previews until converted to React.
