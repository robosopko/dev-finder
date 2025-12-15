# AI Workflow Dokumentácia

**Meno:**
Robert Sopko

**Dátum začiatku:**
12.12.2025

**Dátum dokončenia:**
15.12.2025

**Zadanie:** Frontend

---

## 1. Použité AI Nástroje

Vyplň približný čas strávený s každým nástrojom:

- [ ] **Cursor IDE:** **\_** hodín
- [ ] **Claude Code:** **\_** hodín
- [x] **GitHub Copilot:** **5** hodín
- [ ] **ChatGPT:** **0.5** hodín
- [ ] **Claude.ai:** **\_** hodín
- [ ] **Iné:**

**Celkový čas vývoja (priližne):** **6** hodín

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

### Prompt #17: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Nástroj:** [ Copilot Agent Claude Opus 4.5]  
**Kontext:** [ Uprava Readme ]

**Prompt:**

```
Update the README to match the actual project setup for local development, according to TECH_STACK. Mention that dev needs to create .env.local file (copy from .env.example), also mention that working demo can be found here: https://dev-finder-tau.vercel.app
[TECH_STACK.md]
```

**Výsledok:**  
[x] ✅ Fungoval perfektne (first try)

**Čo som musel upraviť / opraviť:**

```
AI spomenul next.js verziu 15 aj ked pouzivame 16.
```

**Poznámky / Learnings:**

```
Je velmi dolezite co je napisane v zakladnych docs ako TECH_STACK / copilot-instructions / AGENTS.md, podla toho agent funguje, napr. aj do readme nespravne napisal verziu Next.js podla toho ako to mal uvedene v TECH_STACK.md (15) namiesto spravnej aka je v package.json (16)
```

## 3. Problémy a Riešenia

> 💡 **Tip:** Problémy sú cenné! Ukazujú ako riešiš problémy s AI.

### Problém #1: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Čo sa stalo:**

```
Pri Prompte #3 som požiadal agenta, aby stiahol logo a ikony z Figmy a nastavil svgr.
Agent úspešne stiahol väčšinu ikon, ale logo a ikona slnka neboli správne importnuté -
musel som ich stiahnuť a pridať manuálne.
```

**Prečo to vzniklo:**

```
Figma MCP má občas problémy so sťahovaním niektorých typov assetov,
pravdepodobne kvôli spôsobu akým sú v Figme organizované alebo pomenované.
Agent nedokázal detekovať, že tieto dva assety chýbajú.
```

**Ako som to vyriešil:**

```
1. Skontroloval som vygenerovaný assets/icons folder
2. Identifikoval som chýbajúce assety porovnaním s Figmou
3. Manuálne stiahol logo.svg a sun.svg z Figmy
4. Pridal ich do správneho priečinka a aktualizoval index.ts
```

**Čo som sa naučil:**

```
Po každom automatickom importe assetov z Figmy treba manuálne
skontrolovať či boli všetky assety správne stiahnuté a importované.
Nikdy neveriť naslepo, že AI urobila všetko správne.
```

---

### Problém #2: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Čo sa stalo:**

```
Pri Prompte #13 som požiadal agenta, aby opravil focus styling pre dark/light switch.
Agent úspešne opravil styling v ModeToggle komponente, avšak tento komponent
už nebol v aplikácii používaný - skutočný toggle bol priamo v Header komponente,
kde styling ostal nezmenený.
```

**Prečo:**

```
V projekte existoval starý, nepoužívaný ModeToggle komponent, ktorý agent našiel
pri vyhľadávaní. Agent neoverił, či je tento komponent skutočne používaný v aplikácii.
Chýbalo mu pochopenie kontextu toho, ktorý kód je aktívny a ktorý nie.
```

**Riešenie:**

```
1. Testovaním som zistil, že zmeny sa neprejavili
2. Vymazal som nepoužívaný ModeToggle komponent aby sa to neopakovalo
```

**Learning:**

```
Po refaktoringu vždy vymazať nepoužívaný kód aby nezmiatol AI.
Pri zadávaní promptu konkrétne špecifikovať súbor/komponent ak je to možné.
Vždy testovať výsledok v prehliadači, nie len kód reviewovať.
```

---

### Problém #3: **\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***

**Čo sa stalo:**

```
Pri Prompte #16 agent implementoval OAuth dashboard používajúc next-auth@beta (v15),
aj keď v projekte bola stabilná verzia (v14).
Pri Prompte #17 agent spomenul v README Next.js verziu 15 namiesto správnej verzie 16.
```

**Prečo:**

```
V TECH_STACK.md dokumentácii som omylom nechal zmienku o "next-auth@beta".
AI sa riadi primárne podľa dokumentácie, ktorú dostane v kontexte - ak je tam
zastaraná alebo nesprávna informácia, agent ju použije namiesto toho,
čo je skutočne v package.json.
```

**Riešenie:**

```
1. Agent sám rozpoznal konfklikt a nainstaloval next-auth@beta
2. Všimol som si problém a aktualizoval TECH_STACK.md na správne verzie
3. Pri README chybe som dodatočne agentovi dal správnu verziu
4. Naučil som sa kontrolovať všetky "source of truth" dokumenty pred použitím
```

**Learning:**

```
Dokumentácia ako TECH_STACK, copilot-instructions, README sú "single source of truth"
pre AI - ak tam je chyba, AI ju zopakuje vo všetkých implementáciách.
Je kriticky dôležité udržiavať tieto dokumenty aktuálne a presné.
Pri začiatku projektu overiť všetky verzie v package.json a zosynchronizovať s docs.
```

## 4. Kľúčové Poznatky

### 4.1 Čo fungovalo výborne

**1.**

```
Vytvorenie planu implementacie a nasledna implementacia podla planu s Claude Opus 4.5
```

**2.**

```
Claude Opus 4.5 and Sonnet 4.5 Agent vyborne pouzival context7 na dotiahnutie najnovsej dokumentacie
```

**3.**

```
Claude Opus 4.5 velmi dobre pracoval s Figmou, pocas celeho vyvoja som manualne nemusel takmer nic menit
```

**[ Pridaj viac ak chceš ]**

---

### 4.2 Čo bolo náročné

**1.**

```
Na moje prekvapenie zle importol niektore svg assety z Figmy (slnko, link, logo), bolo treba skontrolovat a importnut manualne
```

**2.**

```
Pri mnozstve kodu, ktoru vygenerovalo AI bolo narocne robit code review - vynegerovany kod nebol vzdy optimalny (duplicitny kod, zle rozdelenie do suborov), AI niekedy zabuda zmazat uz nepouzivany kod, co sposobuje problemy neskor
```

**3.**

```
Udrziavat dokumenty, ktore AI povazuje za svoj zdroj pravdy, aby boli aktualne - AI mi do hlavy nevidi a riadi sa nie tym co chcem, ale tym co ma napisane
```

---

### 4.3 Best Practices ktoré som objavil

**1.**

```
Nepustit sa hned do pisania promptu, ale vytvorit si vzdy najprv implementacny plan pre danu feature
```

**2.**

```
Velku pozornost venovat zakladnym dokumentom, ktore davaju AI kontext, ako tech stack, copilot instructions, agent.md ... Treba ich po vygenerovani poriadne zrevidovat (pozor aj na cisla verzii kniznic) a udrziavat aktualne.
```

**3.**

```
Pouzit Claude Opus 4.5 na vytvorenie planu implementacia a realizaciu komplikovanejsieho planu. Pouzit Claude Sonnet 4.5 na jednoduchsie zmeny (refactoring / upravy vramci jedneho suboru).
```

**4.**

```
Vzdy dat pristup agentovi ku aktualnej dokumentacii cez context7 (az na trivialne zmeny) a zaroven spomenut kniznice, ktore v danej ulohe bude potrebovat (react-query, next-auth, tailwind ...) Verzie vsetkych dolezitych kniznic v projekte maju byt uvedene v dokumente, ktory je vzdy v kontexte (copilot-instructions alebo agents.md)
```

**5.**

```
Neuspokojit za, ze vygenerovany kod funguje, spravit poriadne code review, zrefaktorovat co sa da.
```

---

### 4.4 Moje Top 3 Tipy Pre Ostatných

**Tip #1:**

```
Pouzivaj context7 MCP tool pre dokumentaciu a Figma MCP tool pre napojenie na Figmu. S tymito dvoma si vacsinou vystacis (prilis vela toolov zahlcuje kontext).
```

**Tip #2:**

```
Pre ficury si najprv vygeneruj implementacny plan, ktory az po zrevivani a pripadnej uprave nechaj AI implementovat. Pre planovanie pouzi silnejsi (a drahsi) model ako napr. Claude Opus 4.5, pre implementaciu mensich veci staci lacnejsi, napr. Claude Sonnet 4.5
```

**Tip #3:**

```
Vytvor si dobry tech stack dokument so zakladnymi instrukciami pre AI agenta, ktory ma vzdy v kontexte. Tento dokument udrziavaj, nech je vzdy aktualny.
```

---

## 6. Reflexia a Závery

### 6.1 Efektivita AI nástrojov

**Ktorý nástroj bol najužitočnejší?** **\*\***\*\*\*\***\*\***Claude Opus 4.5 (copilot agent)**\*\***\*\*\*\***\*\***

**Prečo?**

```
Vie vyborne pracovat s toolmi pre dokumentaciu a Figmu, dokaze vytvorit podrobny plan implementacie a nasledne cely plan krok za krokom aj implementovat. Velmi dobre komentuje co robi, co developerovi pomaha lepsie rozumiet vygenerovanemu kodu a celemu projektu. Tento model je tiez dostatocne rychly a stabilny.
```

**Ktorý nástroj bol najmenej užitočný?** **\*\***\*\*\*\***\*\***GPT-5.2**\*\***\*\*\*\***\*\***

**Prečo?**

```
Je pomalsi ako Claude Opus 4.5 a nekomentuje poriadne co robi - developer musi stravit viac casu pri code review
```

---

### 6.2 Najväčšie prekvapenie

```
Claude Opus 4.5 dokazal celu GitHub OAuth Dashboard feature naprogramovat sam s pomocou dvoch promptov (jeden na naplanovanie a druhy na implementaciu) za cca 10 minut, teda menej ako mi trvalo napisanie tych promptov :)
```

---

### 6.3 Najväčšia frustrácia

```
Zistenie, ze svg assety, ktore AI importla z Figmy su niektore zle a teda ze musim vsetky skontrolovat a importnut este raz manualne.
```

---

### 6.4 Najväčší "AHA!" moment

```
Ked som zabudol updatnut tech stack dokument a potom sa cudoval, preco AI chce pouzit inu verziu next-auth ako je v projekte nainstalovana
```

---

### 6.5 Čo by som urobil inak

```
Vacsiu pozornost dal vygenerovanym source-of-truth kontextovym dokumentom, aby boli tip-top. Nasledne aj prvu feature by som skusil nechat AI agenta implementovat celu v dvoch krokoch - planovanie -> implementacia. Tam som viac casu stravil pripravou jednotlivych komponentov v samostatnych promptoch, co zabralo viac casu.
```

### 6.6 Hlavný odkaz pre ostatných

```
With great power comes great responsibility. AI ti usetri mnozstvo casu, ak nebudes lenivy nastavit kontext, pisat dobre prompty a rozumiet co od AI chces aj vsetkemu co vygeneruje. Naopak, v rukach leniveho programatora je AI uzasnym nastrojom skazy na rychle generovanie mnozstva nekvalitneho kodu, ktorym bude frustrovat svojich kolegov.
```
