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

### Prompt #8: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

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

### Prompt #9: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Opus 4.5 ]  
**Kontext:** [ Planovanie - Part 1: Public Search ]

**Prompt:**

```
We are going implement Part 1: Public Search, as mentioned in TECH_STACK. Think hard and analyze all the requirements and create a detailed implementation plan and save it into a new md file in docs folder. We will later go through this plan and implement it step by step. To get the correct data structure, try to call https://api.github.com/users/{username} endpoint for some username, i.e. https://api.github.com/users/tailwindlabs and get the github fetch documentation from context7. Consider how the data will be fetched (with react-query) and accessed in components (through hooks) and how it will be displayed (use shadcn-ui components). Use the existing SearchBar component. Consider using the existing icons and avatar.png image (in case user has no image uploaded) in the assets folder. Don't implement anything yet, just create the detailed plan. Here is the Figma reference: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=1-69&p=f&m=dev  Use #context7 , use #figma
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
Plan vyzera dobre, uvidime ako si s nim poradi, ci to zvladne naraz, alebo pojdeme postupne.
```

### Prompt #10: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Opus 4.5 ]  
**Kontext:** [ Implementacia - Part 1: Public Search ]

**Prompt:**

```
Implement the docs/IMPLEMENTATION_PLAN_PUBLIC_SEARCH.md step by step, make sure to follow designs in Figma: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=1-704&p=f&m=dev You may replace the content of Home page with the result. Use #context7 for docs, use #figma
[figma][context7]
```

**Výsledok:**  
[x] ⭐⭐⭐⭐ Dobré, potreboval malé úpravy

**Čo som musel upraviť / opraviť:**

```
Bolo treba povolit url pre obrazky v next.config.js
Dark mode nie je uplne podla dizajnu
Chyba No results found! sprava
```

**Poznámky / Learnings:**

```
Napriek tomu, ze niekolko veci nespravil ako mal, som velmi prijemne prekvapeny vysledkom - najma, ze som nemusel ist krok za krokom, ale Agent sam pekne odsledoval implementacny plan a usetril mi v tomto kroku 90% prace.
```

### Prompt #11: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent GPT-5.2]  
**Kontext:** [ Fix Part 1: dark mode ]

**Prompt:**

```
Some texts don't have correct color in dark mode - see the screenshot and compare to the desired dark mode design in Figma: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=5-244&m=dev Use #context7 for docs on tailwind dark mode. Use #figma
[figma][context7][screenshot]
```

**Výsledok:**  
[x] ⭐⭐⭐⭐ Dobré, potreboval malé úpravy

**Čo som musel upraviť / opraviť:**

```
trebalo este modre pismo pre user login upravit pre dark mode
```

**Poznámky / Learnings:**

```
Pravdepodobne keby som specifikoval vsetky miesta, kde treba upravit farbu, spravil by to lepsie. Ale bol som lenivy a dal som mu len screenshot a Figmu :)
Tiez som chcel zistit ako to spravi GPT-5.2 - zda sa mi pomalsi ako Claude Opus 4.5 a horsie komentuje co robi.
```

### Prompt #12: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Sonnet 4.5]  
**Kontext:** [ Fix Part 1: missing No results found message ]

**Prompt:**

```
Implement the missing "No results found!" message according to Figma: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=5-1522&m=dev Here is the dark mode version: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=6-622&m=dev Use #context7 for docs on tailwind, use #figma
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
Claude Sonnet 4.5 postacuje na zmeny mensieho rozsahu a je lacnejsi ako Claude Opus 4.5 (1 premium request vs 3 premium requesty)
```

### Prompt #13: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Sonnet 4.5]  
**Kontext:** [ Fix Part 1: missing focus styling ]

**Prompt:**

```
Some elements don't have proper focus styling according to Figma: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=5-1338&m=dev Look at the dark / light switch and clickable elements. Use #figma
[figma][context7]
```

**Výsledok:**  
[x] ⭐⭐⭐⭐ Dobré, potreboval malé úpravy

**Čo som musel upraviť / opraviť:**

```
doplnit focus styly do light/dark toggle
```

**Poznámky / Learnings:**

```
Pozor na nepouzity kod - agent upravil ModeToggle komponent, ten vsak uz nie je pouzivany, light/dark toggle je priamo v headeri, tam to agent neupravil.
```

### Prompt #14: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Sonnet 4.5]  
**Kontext:** [ Fix Part 1: refactor ]

**Prompt:**

```
Refactor this file without changing functionality - keep the UserProfileCard here a move other component into separate files, remove duplicate code
```

**Výsledok:**  
[x] ⭐⭐⭐ OK, potreboval viac úprav

**Čo som musel upraviť / opraviť:**

```
nebol odstraneny duplicitny kod
```

**Poznámky / Learnings:**

```
Refactor trebalo urobit pretoze agent podaval vsetky komponenty suvisiace s user profile do jedneho suboru, to spravil dobre, ale duplicitny kod zostal, dodatocny prompt s Claude Opus 4.5 to vyriesil (Try to refactor UserProfileCard more - there still is duplicate code for mobile and desktop layout, try to merge it into one structure and handle the different layout by tailwind styles. Here is Figma for desktop: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=1-705&m=dev Here is Figma for mobile: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=5-841&m=dev Use #context7 for docs, use #figma)
```

### Prompt #15: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Opus 4.5]  
**Kontext:** [ Plan Part 2: GitHub OAuth Dashboard ]

**Prompt:**

```
We are going to implement Part 2: GitHub OAuth Dashboard as described in TECH_STACK, the new OAuth App was created in GitHub and env variable are in .env.local file. Create a detailed implementation plan and write it into a new md file in docs folder. Do not implement anything yet, just prepare the detailed plan. Use #context7 to fetch docs.
[context7][TECH_STACK.md]
```

**Výsledok:**  
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```
nic
```

**Poznámky / Learnings:**

```
Plan vyzera dobre, uvidime ako do dopadne :)
```

### Prompt #16: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Opus 4.5]  
**Kontext:** [ Implement Part 2: GitHub OAuth Dashboard ]

**Prompt:**

```
Implement GitHub OAuth Dashboard according to the implementation plan. Use shadcn-ui components and our tailwind theme styles. There is no Figma for this, but be consistent with the existing screens and components and implement the dark mode as well and everything should be responsive to look good on both desktop and mobile. Use #context7 for docs
[context7][IMPLEMENTATION_PLAN_OAUTH_DASHBOARD.md]
```

**Výsledok:**  
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```
nic
```

**Poznámky / Learnings:**

```
Na zaklade planu Claude Opus 4.5 za par minut implementoval co by som ja robil bez AI mozno 2 dni, vysledok je funkcny a napriek chybajucim Figma podkladom vyzera konzistentne so zvyskom aplikacie. Jediny zadrhel bol, ze agent implementoval podla next-auth v15 (beta) aj ked v projekte bola v14. To vsak bola moja chyba, kedze som v TECH_STACK omylom nechal zmienku o next-auth@beta. Tento problem vsak agent vyriesil sam (nainstaloval next-auth@beta).
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
