# AI Workflow Dokumentácia

**Meno:**
Robert Sopko

**Dátum začiatku:**
12.12.2025

**Dátum dokončenia:**

**Zadanie:** Frontend

---

## 1. Použité AI Nástroje

Vyplň približný čas strávený s každým nástrojom:

- [ ] **Cursor IDE:** **\_** hodín
- [ ] **Claude Code:** **\_** hodín
- [x] **GitHub Copilot:** **\_** hodín
- [ ] **ChatGPT:** **\_** hodín
- [ ] **Claude.ai:** **\_** hodín
- [ ] **Iné:**

**Celkový čas vývoja (priližne):** **\_** hodín

---

## 2. Zbierka Promptov

> 💡 **Tip:** Kopíruj presný text promptu! Priebežne dopĺňaj po každej feature.

### Prompt #1: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Opus 4.5 ]  
**Kontext:** [ Setup projektu ]

**Prompt:**

```
We are going to build a GitHub Dashboard app according to the md document. We want to build it as a next.js app, which will be built as a static site for simple hosting. We want to use the latest next.js with typescript, tailwind, shadcn-ui components, react-query to handle API. Study the assignment in the md file and create an MD file describing the tech stack used and all script commands to run to build the boilerplate for this project. Use #context7 for docs.
[priloha-a-frontend.md][context7]
```

**Výsledok:**  
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```
npm install next-auth@beta
som zmenil na
npm install next-auth
pretoze som chcel stabilnu verziu a nie beta

instrukcie k static export som odignoroval, kedze som si uvedomil ze napojenie na GitHub OAuth nebude fungovat s cisto staticky generovanou strankou
```

**Poznámky / Learnings:**

```
Fungoval dobre, lebo som specifikoval technologie, ktore chcem pouzit, dal som mu ako kontext zadanie a pristup k aktualnej dokumentacii cez context7
```

### Prompt #2: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Opus 4.5 ]  
**Kontext:** [ Setup projektu ]

**Prompt:**

```
Study the Figma designs here: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=1-69&p=f&m=dev and create a plan to update the tailwind theme and settings according to the style guide - colors, typography, spacing and radius. Use #context7 for docs, use #figma to access Figma. Write the plan into a md file which will be your blueprint for execution later.
[figma][context7]
```

**Výsledok:**  
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```
nic
```

**Poznámky / Learnings:**

```
Fungoval dobre, lebo mu dal MCP pristup k Figme aj ku context7, aby mal k dispozicii najnovsiu tailwind dokumentaciu
```

### Prompt #3: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Opus 4.5 ]  
**Kontext:** [ Setup projektu ]

**Prompt:**

```
We will use svgs in the project. Onboard svgr to the project to work with svg files in React conveniently, update the TECH_STACK document a save the svg files in a proper place in project. Logo: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=3-993&m=dev Icons: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=5-134&m=dev Use #context7 for docs on svgr and next.js. Use #figma
[figma][context7]
```

**Výsledok:**  
[x] ⭐⭐⭐⭐ Dobré, potreboval malé úpravy

**Čo som musel upraviť / opraviť:**

```
logo a slnko neboli spravne importnute, trebalo importnut manualne
```

**Poznámky / Learnings:**

```
Fungoval fajn, vsetky assety az na logo a slnko importol z Figmy spravne. Poucenie - treba pre istotu vzdy skontrolovat vsetko co spravi.
```

### Prompt #4: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Opus 4.5 ]  
**Kontext:** [ Zakladne komponenty ]

**Prompt:**

```
Implement the Search button inside components folder according to Figma: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=5-172&m=dev Make sure to implement all states - default, hover, focus. Implement it as a pure component which will be used inside other components. Use the shadcn-ui button from components/ui as base. Use #context7 for docs, use #figma
[figma][context7]
```

**Výsledok:**  
[x] ⭐⭐⭐⭐ Dobré, potreboval malé úpravy

**Čo som musel upraviť / opraviť:**

```
Focus state nebol spravne implementovany, vyriesene dodatocnym promtom
```

**Poznámky / Learnings:**

```
Zlozitejsie stylovanie nie vzdy zvladne na 1x
```

### Prompt #5: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Opus 4.5 ]  
**Kontext:** [ Zakladne komponenty ]

**Prompt:**

```
The Focus state is not according to Figma, see https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=5-177&m=dev, maybe its overriden by the base shadcn-ui styling, Use #context7 for docs on shadcn-ui and tailwind and fix the focus state styling according to Figma. Use #figma
[figma][context7][screenshot]
```

**Výsledok:**  
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```
nic
```

**Poznámky / Learnings:**

```
Pri detailnom zamerani na problem a dostatocnom kontexte ho zvacsa vie AI vyriesit
```

### Prompt #6: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Opus 4.5 ]  
**Kontext:** [ Zakladne nastavenie ]

**Prompt:**

```
Generate the copilot instructions file - mention the techstack and a few simple rules:
- we have custom tailwind theme classed defined according to Figma style guide, use them
- when defining new React components, use const, not function definition
- don't assume you have the latest knowledge on libraries in this project, you have access to context7 tool, which provides the latest docs, use it
[TECH_STACK.md][TAILWIND_THEME_PLAN.md]
```

**Výsledok:**  
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```
nic
```

**Poznámky / Learnings:**

```
Vygeneroval fajn copilot-instructions subor kde bolo vsetko co som chcel, pomohli mu najma uz predtym vytvorene tech stack dokumenty, ktore dostal v kontexte.
```

### Prompt #7: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Opus 4.5 ]  
**Kontext:** [ Zakladne komponenty ]

**Prompt:**

```
Create a SearchBar component based on Figma: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=5-351&m=dev Make sure to implement all the states as mentioned in Figma - Default, Hover, Active, Error, Focus. Start with Default, the other states are slight variations of Default. Use existing SearchButton and other shadcn-ui components, use existing search.svg icon from assets/icons. Use #context7 for docs, use #figma
[figma][context7]
```

**Výsledok:**  
[ ] ⭐⭐⭐⭐ Dobré, potreboval malé úpravy

**Čo som musel upraviť / opraviť:**

```
trebalo doplnit "use client", kedze pouziva interny state
```

**Poznámky / Learnings:**

```
Doplnil som mu instrukcie do copilot-instruction ohladom pouzitia "use client" (update the copilot-instructions: mention that this is a next.js project, so all components that have internal state or use hooks need to be marked with "use client")
```

### Prompt #7: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Opus 4.5 ]  
**Kontext:** [ Zakladne komponenty ]

**Prompt:**

```
Update the styling of SearchBar for the dark variant according to Figma: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=5-587&m=dev Use #context7 for docs on tailwind dark mode. Use #figma
[figma][context7]
```

**Výsledok:**  
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```
nic
```

**Poznámky / Learnings:**

```
na moje prekvapenie velmi dobre implementoval aj dark/light mode toggle len s jednoduchym doplnkovym promptom (add a switch for dark mode, see this docs: https://ui.shadcn.com/docs/dark-mode/next)
```

## 3. Problémy a Riešenia

> 💡 **Tip:** Problémy sú cenné! Ukazujú ako riešiš problémy s AI.

### Problém #1: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Čo sa stalo:**

```
[Detailný popis problému - čo nefungovalo? Aká bola chyba?]
```

**Prečo to vzniklo:**

```
[Tvoja analýza - prečo AI toto vygeneroval? Čo bolo v prompte zlé?]
```

**Ako som to vyriešil:**

```
[Krok za krokom - čo si urobil? Upravil prompt? Prepísal kód? Použil iný nástroj?]
```

**Čo som sa naučil:**

```
[Konkrétny learning pre budúcnosť - čo budeš robiť inak?]
```

**Screenshot / Kód:** [ ] Priložený

---

### Problém #2: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Čo sa stalo:**

```

```

**Prečo:**

```

```

**Riešenie:**

```

```

**Learning:**

```

```

## 4. Kľúčové Poznatky

### 4.1 Čo fungovalo výborne

**1.**

```
[Príklad: Claude Code pre OAuth - fungoval first try, zero problémov]
```

**2.**

```

```

**3.**

```

```

**[ Pridaj viac ak chceš ]**

---

### 4.2 Čo bolo náročné

**1.**

```
[Príklad: Figma MCP spacing - často o 4-8px vedľa, musel som manuálne opravovať]
```

**2.**

```

```

**3.**

```

```

---

### 4.3 Best Practices ktoré som objavil

**1.**

```
[Príklad: Vždy špecifikuj verziu knižnice v prompte - "NextAuth.js v5"]
```

**2.**

```

```

**3.**

```

```

**4.**

```

```

**5.**

```

```

---

### 4.4 Moje Top 3 Tipy Pre Ostatných

**Tip #1:**

```
[Konkrétny, actionable tip]
```

**Tip #2:**

```

```

**Tip #3:**

```

```

---

## 6. Reflexia a Závery

### 6.1 Efektivita AI nástrojov

**Ktorý nástroj bol najužitočnejší?** **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Prečo?**

```

```

**Ktorý nástroj bol najmenej užitočný?** **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Prečo?**

```

```

---

### 6.2 Najväčšie prekvapenie

```
[Čo ťa najviac prekvapilo pri práci s AI?]
```

---

### 6.3 Najväčšia frustrácia

```
[Čo bolo najfrustrujúcejšie?]
```

---

### 6.4 Najväčší "AHA!" moment

```
[Kedy ti došlo niečo dôležité o AI alebo o developmente?]
```

---

### 6.5 Čo by som urobil inak

```
[Keby si začínal znova, čo by si zmenil?]
```

### 6.6 Hlavný odkaz pre ostatných

```
[Keby si mal povedať jednu vec kolegom o AI development, čo by to bylo?]
```
