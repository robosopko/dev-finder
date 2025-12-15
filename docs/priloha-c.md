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
pretože som chcel stabilnú verziu a nie beta

inštrukcie k static export som odignoroval, keďže som si uvedomil že napojenie na GitHub OAuth nebude fungovať s čisto staticky generovanou stránkou
```

**Poznámky / Learnings:**

```
Fungoval dobre, lebo som špecifikoval technológie, ktoré chcem použiť, dal som mu ako kontext zadanie a prístup k aktuálnej dokumentácii cez context7
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
Fungoval dobre, lebo mu dal MCP prístup k Figme aj ku context7, aby mal k dispozícii najnovšiu tailwind dokumentáciu
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
logo a slnko neboli správne importnuté, trebalo importnúť manuálne
```

**Poznámky / Learnings:**

```
Fungoval fajn, všetky assety až na logo a slnko importol z Figmy správne. Poučenie - treba pre istotu vždy skontrolovať všetko čo spraví.
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
Focus state nebol správne implementovaný, vyriešené dodatočným promptom
```

**Poznámky / Learnings:**

```
Zložitejšie štýlovanie nie vždy zvládne na 1x
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
Pri detailnom zameraní na problém a dostatočnom kontexte ho zväčša vie AI vyriešiť
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
Vygeneroval fajn copilot-instructions súbor kde bolo všetko čo som chcel, pomohli mu najmä už predtým vytvorené tech stack dokumenty, ktoré dostal v kontexte.
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
trebalo doplniť "use client", keďže používa interný state
```

**Poznámky / Learnings:**

```
Doplnil som mu inštrukcie do copilot-instruction ohľadom použitia "use client" (update the copilot-instructions: mention that this is a next.js project, so all components that have internal state or use hooks need to be marked with "use client")
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
na moje prekvapenie veľmi dobre implementoval aj dark/light mode toggle len s jednoduchým doplnkovým promptom (add a switch for dark mode, see this docs: https://ui.shadcn.com/docs/dark-mode/next)
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
Plán vyzerá dobre, uvidíme ako si s ním poradí, či to zvládne naraz, alebo pôjdeme postupne.
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
Bolo treba povoliť url pre obrázky v next.config.js
Dark mode nie je úplne podľa dizajnu
Chýba No results found! správa
```

**Poznámky / Learnings:**

```
Napriek tomu, že niekoľko vecí nespravil ako mal, som veľmi príjemne prekvapený výsledkom - najmä, že som nemusel ísť krok za krokom, ale Agent sám pekne odsledoval implementačný plán a ušetril mi v tomto kroku 90% práce.
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
trebalo ešte modré písmo pre user login upraviť pre dark mode
```

**Poznámky / Learnings:**

```
Pravdepodobne keby som špecifikoval všetky miesta, kde treba upraviť farbu, spravil by to lepšie. Ale bol som lenivý a dal som mu len screenshot a Figmu :)
Tiež som chcel zistiť ako to spraví GPT-5.2 - zdá sa mi pomalší ako Claude Opus 4.5 a horšie komentuje čo robí.
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
Claude Sonnet 4.5 postačuje na zmeny menšieho rozsahu a je lacnejší ako Claude Opus 4.5 (1 premium request vs 3 premium requesty)
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
doplniť focus štýly do light/dark toggle
```

**Poznámky / Learnings:**

```
Pozor na nepoužitý kód - agent upravil ModeToggle komponent, ten však už nie je používaný, light/dark toggle je priamo v headeri, tam to agent neupravil.
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
nebol odstránený duplicitný kód
```

**Poznámky / Learnings:**

```
Refactor trebalo urobiť pretože agent podával všetky komponenty súvisiace s user profile do jedného súboru, to spravil dobre, ale duplicitný kód zostal, dodatočný prompt s Claude Opus 4.5 to vyriešil (Try to refactor UserProfileCard more - there still is duplicate code for mobile and desktop layout, try to merge it into one structure and handle the different layout by tailwind styles. Here is Figma for desktop: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=1-705&m=dev Here is Figma for mobile: https://www.figma.com/design/CSKrPZ4ETBC5JY5zjRoTXn/github-user-search-app?node-id=5-841&m=dev Use #context7 for docs, use #figma)
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
Plán vyzerá dobre, uvidíme ako to dopadne :)
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
Na základe plánu Claude Opus 4.5 za pár minút implementoval čo by som ja robil bez AI možno 2 dni, výsledok je funkčný a napriek chýbajúcim Figma podkladom vyzerá konzistentne so zvyškom aplikácie. Jediný zádrhel bol, že agent implementoval podľa next-auth v15 (beta) aj keď v projekte bola v14. To však bola moja chyba, keďže som v TECH_STACK omylom nechal zmienku o next-auth@beta. Tento problém však agent vyriešil sám (nainštaloval next-auth@beta).
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
AI spomenul next.js verziu 15 aj keď používame 16.
```

**Poznámky / Learnings:**

```
Je veľmi dôležité čo je napísané v základných docs ako TECH_STACK / copilot-instructions / AGENTS.md, podľa toho agent funguje, napr. aj do readme nesprávne napísal verziu Next.js podľa toho ako to mal uvedené v TECH_STACK.md (15) namiesto správnej aká je v package.json (16)
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
pri vyhľadávaní. Agent neoveril, či je tento komponent skutočne používaný v aplikácii.
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
1. Agent sám rozpoznal konflikt a nainštaloval next-auth@beta
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
Vytvorenie plánu implementácie a následná implementácia podľa plánu s Claude Opus 4.5
```

**2.**

```
Claude Opus 4.5 and Sonnet 4.5 Agent výborne používal context7 na dotiahnutie najnovšej dokumentácie
```

**3.**

```
Claude Opus 4.5 veľmi dobre pracoval s Figmou, počas celého vývoja som manuálne nemusel takmer nič meniť
```

**[ Pridaj viac ak chceš ]**

---

### 4.2 Čo bolo náročné

**1.**

```
Na moje prekvapenie zle importol niektoré svg assety z Figmy (slnko, link, logo), bolo treba skontrolovať a importnúť manuálne
```

**2.**

```
Pri množstve kódu, ktorú vygenerovalo AI bolo náročné robiť code review - vygenerovaný kód nebol vždy optimálny (duplicitný kód, zle rozdelenie do súborov), AI niekedy zabúda zmazať už nepoužívaný kód, čo spôsobuje problémy neskôr
```

**3.**

```
Udržiavať dokumenty, ktoré AI považuje za svoj zdroj pravdy, aby boli aktuálne - AI mi do hlavy nevidí a riadi sa nie tým čo chcem, ale tým čo má napísané
```

---

### 4.3 Best Practices ktoré som objavil

**1.**

```
Nepustiť sa hneď do písania promptu, ale vytvoriť si vždy najprv implementačný plán pre danú feature
```

**2.**

```
Veľkú pozornosť venovať základným dokumentom, ktoré dávajú AI kontext, ako tech stack, copilot instructions, agent.md ... Treba ich po vygenerovaní poriadne zrevidovať (pozor aj na čísla verzií knižníc) a udržiavať aktuálne.
```

**3.**

```
Použiť Claude Opus 4.5 na vytvorenie plánu implementácie a realizáciu komplikovanejšieho plánu. Použiť Claude Sonnet 4.5 na jednoduchšie zmeny (refactoring / úpravy vrámci jedného súboru).
```

**4.**

```
Vždy dať prístup agentovi ku aktuálnej dokumentácii cez context7 (až na triviálne zmeny) a zároveň spomenúť knižnice, ktoré v danej úlohe bude potrebovať (react-query, next-auth, tailwind ...) Verzie všetkých dôležitých knižníc v projekte majú byť uvedené v dokumente, ktorý je vždy v kontexte (copilot-instructions alebo agents.md)
```

**5.**

```
Neuspokojiť sa, že vygenerovaný kód funguje, spraviť poriadne code review, zrefaktorovať čo sa dá.
```

---

### 4.4 Moje Top 3 Tipy Pre Ostatných

**Tip #1:**

```
Používaj context7 MCP tool pre dokumentáciu a Figma MCP tool pre napojenie na Figmu. S týmito dvoma si väčšinou vystačíš (príliš veľa toolov zahľcuje kontext).
```

**Tip #2:**

```
Pre featury si najprv vygeneruj implementačný plán, ktorý až po zrevidovaní a prípadnej úprave nechaj AI implementovať. Pre plánovanie použi silnejší (a drahší) model ako napr. Claude Opus 4.5, pre implementáciu menších vecí stačí lacnejší, napr. Claude Sonnet 4.5
```

**Tip #3:**

```
Vytvor si dobrý tech stack dokument so základnými inštrukciami pre AI agenta, ktorý má vždy v kontexte. Tento dokument udržiavaj, nech je vždy aktuálny.
```

---

## 6. Reflexia a Závery

### 6.1 Efektivita AI nástrojov

**Ktorý nástroj bol najužitočnejší?** **\*\***\*\*\*\***\*\***Claude Opus 4.5 (copilot agent)**\*\***\*\*\*\***\*\***

**Prečo?**

```
Vie výborne pracovať s toolmi pre dokumentáciu a Figmu, dokáže vytvoriť podrobný plán implementácie a následne celý plán krok za krokom aj implementovať. Veľmi dobre komentuje čo robí, čo developerovi pomáha lepšie rozumieť vygenerovanému kódu a celému projektu. Tento model je tiež dostatočne rýchly a stabilný.
```

**Ktorý nástroj bol najmenej užitočný?** **\*\***\*\*\*\***\*\***GPT-5.2**\*\***\*\*\*\***\*\***

**Prečo?**

```
Je pomalší ako Claude Opus 4.5 a nekomentuje poriadne čo robí - developer musí stráviť viac času pri code review
```

---

### 6.2 Najväčšie prekvapenie

```
Claude Opus 4.5 dokázal celú GitHub OAuth Dashboard feature naprogramovať sám s pomocou dvoch promptov (jeden na naplánovanie a druhý na implementáciu) za cca 10 minút, teda menej ako mi trvalo napísanie tých promptov :)
```

---

### 6.3 Najväčšia frustrácia

```
Zistenie, že svg assety, ktoré AI importla z Figmy sú niektoré zle a teda že musím všetky skontrolovať a importnúť ešte raz manuálne.
```

---

### 6.4 Najväčší "AHA!" moment

```
Keď som zabudol updatnúť tech stack dokument a potom sa čudoval, prečo AI chce použiť inú verziu next-auth ako je v projekte nainštalovaná
```

---

### 6.5 Čo by som urobil inak

```
Väčšiu pozornosť dal vygenerovaným source-of-truth kontextovým dokumentom, aby boli tip-top. Následne aj prvú feature by som skúsil nechať AI agenta implementovať celú v dvoch krokoch - plánovanie -> implementácia. Tam som viac času strávil prípravou jednotlivých komponentov v samostatných promptoch, čo zabralo viac času.
```

### 6.6 Hlavný odkaz pre ostatných

```
With great power comes great responsibility. AI ti ušetrí množstvo času, ak nebudeš lenivý nastaviť kontext, písať dobre prompty a rozumieť čo od AI chceš aj všetkému čo vygeneruje. Naopak, v rukách lenivého programátora je AI úžasným nástrojom skázy na rýchle generovanie množstva nekvalitného kódu, ktorým bude frustrovať svojich kolegov.
```
