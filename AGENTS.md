<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the consultancy conversion experience on the index route, with in-page section navigation and direct WhatsApp links; no account or stored lead is needed.
- Define consultancy visual styles in src/styles.css and expose CTA styles through Button variants to keep presentation consistent.
- Serve original PDF-extracted media through asset pointer imports to keep binary files outside source control.
- Keep one index-page section per original presentation topic, in source order, with original composite graphics preserved as extracted media so no source content is omitted.
- Use a shared background wrapper for consecutive topics with a continuous gradient, keeping each topic in its own section to preserve presentation order.
- Render final contact symbols through ContactIcon so their transparent backgrounds and equal sizing stay consistent across services.
- Crop only the decorative sides of the wide top composite on mobile, preserving embedded text and centering the separate full-size WhatsApp CTA to retain readability and conversion visibility.
- Enlarge the starting-point diagram inside an overflow wrapper that trims only blank side margins, preserving original media and all labels without page overflow.
