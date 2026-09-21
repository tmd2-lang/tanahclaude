# Codex version

The repository root contains the existing Claude-built family association project. The Codex-built version lives in [`codex-version/`](codex-version/) so both concepts can be reviewed and developed independently.

To preview the Codex version locally:

```sh
cd codex-version
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open <http://127.0.0.1:4173/>. The Codex version uses fictional Bennett family content and sample interactions; payment, calendar, order, and form services still need to be connected for a real client launch.
