# Bundled 3D fonts

- `NanumGothic-Regular.ttf`: unchanged original from Google Fonts, https://github.com/google/fonts/tree/main/ofl/nanumgothic . SIL Open Font License 1.1 in `NanumGothic-OFL.txt`; NHN Corporation (2010).
- `OptimerBold.json`: unchanged from Three.js r184 `examples/fonts/optimer_bold.typeface.json`. MAGENTA font license in `Optimer-LICENSE.txt`.
- `DroidSansMono.json`: unchanged typeface JSON from Three.js r184 `examples/fonts/droid/droid_sans_mono_regular.typeface.json`. Apache 2.0 and copyright notices in `Droid-NOTICE.txt`.

The browser parses the original Nanum TTF with Three's TTFLoader. Missing Nanum glyphs (including É) fall back to the bundled Droid Mono glyphs at the same 1000-unit resolution. Unknown characters produce a visible error and block export; they are never silently replaced with question marks. No user text is sent to a font service.
