# Inruut U.S. Shopify Store

## U.S. Market Strategy, UX and Content Specification

**Status:** Approved implementation brief for a Vercel-ready prototype. No production Shopify storefront has been created.

**Prepared:** 18 August 2026

**Client material reviewed:** 19 August 2026

**Launch market:** United States only

**Language and commerce:** U.S. English, USD pricing, U.S. addresses, U.S. shipping and U.S. customer-support expectations

**Deployment constraint:** The prototype may be packaged for Vercel deployment. Final public launch still requires approval of claims, pricing, product contents, checkout, policies and operational details.

## 1. Project Summary

Inruut is a personalized Hair Root Wellness brand for men and women. It does not sell the same off-the-shelf bundle to every customer. Visitors first learn about their type of hair concern, take a guided quiz, receive one tailored Hair Root Wellness Box recommendation, and then review the complete system before purchase.

The storefront should therefore behave more like a trusted assessment and recommendation experience than a normal product catalog.

### U.S. market requirements

- The website is designed exclusively for customers in the United States.
- All public copy uses U.S. English spelling, terminology and date/number conventions.
- All prices, savings, thresholds and examples use U.S. dollars (`$` / `USD`).
- Shipping examples assume the contiguous United States; Alaska, Hawaii, Puerto Rico and other U.S. territories require confirmed fulfillment rules before launch.
- Taxes, returns, subscriptions, guarantees, privacy, SMS/email consent and health-related claims must be reviewed for applicable U.S. federal and state requirements.
- Photography, video, generated artwork, maps, packaging mockups, testimonials and lifestyle settings must be created for a diverse U.S. audience and U.S. commercial context.
- Do not use non-U.S. competitors, currencies, addresses, shipping references, maps, regulatory language, or region-specific clinical settings in the customer experience.

### Primary business goal

Move qualified visitors through this journey:

`Concern or curiosity -> education -> trust -> quiz -> personalized plan -> bundle order`

### Primary conversion

Completed purchase of a personalized Inruut Hair Root Wellness Box.

### Supporting conversions

- Quiz start
- Quiz completion
- Personalized result viewed
- Personalized bundle added to cart
- Contact details captured with clear consent
- Return visit to a saved result

## 2. Core Positioning Recommendation

### Recommended market position

**Personalized hair care based on your pattern, scalp, routine and goals.**

Inruut should not lead with a list of products. It should lead with the idea that hair concerns can look similar while having different contributing factors, so a useful routine should begin with understanding the individual.

### The promise the website must communicate

1. Your hair concern is understood.
2. Your recommendation is personalized, not pre-packed for everyone.
3. Every item in your bundle has a clear role.
4. The science is explained in plain language.
5. Expectations are realistic and progress takes consistency.
6. Inruut will tell you when an online product recommendation is not the right next step.

### Language guardrail

Until Inruut has the required clinical process and evidence, the quiz should be described as a **hair assessment**, **hair profile**, or **recommendation quiz**, not a medical diagnosis. Claims such as “find your root cause,” “clinically proven,” “regrows hair,” exact result percentages, or guaranteed timelines must only appear when supported by competent and reliable scientific evidence and approved for use in the United States.

## 3. Research Conclusion

There is no universal page structure that can be known in advance to be the “top-converting” design for Inruut. Competitor patterns and ecommerce research give us a strong first hypothesis; Inruut-specific conversion data and controlled tests must determine the winner.

### Competitor lessons

| Brand | What works | What Inruut should avoid |
| --- | --- | --- |
| Hims | Clear concern-led entry, restrained design, visible treatment qualification and a focused path from education to consultation | Copying a U.S. telehealth model unless Inruut provides the licensed clinical review, pharmacy and state-by-state operations that model requires |
| Keeps | Direct hair-loss education, treatment comparison and an assessment-led purchase journey | Presenting prescription or OTC treatment language when the Inruut catalog does not legally support it |
| Hers | Approachable women-focused education and clear routing between concern types | Flattening the range of women's hair concerns into one generic hormonal or cosmetic story |
| Nutrafol | Premium wellness presentation, ingredient education, professional credibility and strong subscription merchandising | Broad wellness or growth claims that are not supported for the finished Inruut product |
| Prose | Strong “made for you” positioning, structured consultation categories, made-to-order explanation and a personalized routine story | Promotions and email popups that interrupt the consultation |
| Function of Beauty | States the quiz benefit before starting, uses strong product imagery and keeps customization language approachable | Letting normal catalog shopping distract from a high-intent quiz flow |
| Traya | Compact charcoal navigation, a single rounded campaign hero, lime calls to action, proof and root-cause carousels, stage selectors, month-by-month timelines and dense explainer cards | Importing India-specific copy, currencies, testimonials, Ayurveda claims, result percentages, guarantees or clinical claims into the U.S. customer experience |

### Recommended conversion model

The site should use a focused, repeated sequence:

1. **Recognition:** “This looks like my concern.”
2. **Relevance:** “The same symptom can require a different routine.”
3. **Credibility:** show method, evidence, experts and honest limitations.
4. **Low-friction action:** set a truthful quiz duration and explain what the visitor receives.
5. **Personal payoff:** reveal a useful hair profile before asking for a purchase.
6. **Recommendation clarity:** show the bundle, why each item was selected, how to use it and what it costs.
7. **Purchase confidence:** transparent delivery, returns, support, payment and expectations.

## 4. Proposed Site Architecture

The six primary experiences are:

1. **Home** - brand, problem framing, trust and quiz conversion
2. **Men's Hair Loss** - pattern education, do/don't guidance and assessment entry
3. **Women's Hair Loss** - concern-specific education, do/don't guidance and assessment entry
4. **The Science** - hair biology, contributing factors, ingredients, method and evidence
5. **Hair Quiz** - multi-step assessment
6. **Your Inruut Plan** - personalized results, bundle explanation and order path

The sixth page is essential. Sending someone from a quiz directly to a generic product page would weaken the personalization promise.

### Utility pages not counted as landing pages

- About Inruut
- FAQ
- Contact or support
- Shipping and returns
- Privacy policy and quiz-data policy
- Terms and conditions
- Medical and product disclaimers
- Results and testimonials archive, if enough verified material exists

### Main navigation

- Inruut logo
- Men
- Women
- The Science
- Reviews, once enough verified reviews exist
- **Take the Hair Quiz** as the persistent primary action
- Cart icon

On mobile, the quiz action should remain easy to reach without covering content.

## 5. Page Specifications

## Page 1: Home

### Purpose

Make visitors feel understood, explain why personalization matters, establish credibility, and move them into the quiz.

### Recommended section order

1. **Utility announcement**
   - One useful message only: shipping, consultation availability or guarantee.
   - Do not rotate several promotional messages.

2. **Hero**
   - Real Inruut customer/model photography or video featuring healthy, believable people and visible hair detail.
   - Literal headline about personalized hair care, not a vague wellness slogan.
   - One-sentence explanation that each bundle is curated from the visitor's answers.
   - Primary CTA: `Take the hair quiz`.
   - Supporting reassurance: truthful time estimate and what the visitor receives.
   - No product grid or discount popup in the first viewport.

3. **Trust strip**
   - Only verified facts: expert involvement, number of customers, review source, made-to-order status, testing standard or guarantee.
   - Each quantified claim links to its explanation or evidence.

4. **Choose your concern**
   - Two strong paths: men's hair concerns and women's hair concerns.
   - Use recognizable, respectful photography rather than gender stereotypes.

5. **Why one bundle cannot fit everyone**
   - Compare two hypothetical hair profiles with similar visible thinning but different patterns, scalp states, routines or goals.
   - End with the quiz CTA.

6. **How Inruut works**
   - Take the assessment.
   - Receive your Inruut hair profile.
   - Review your curated bundle and routine.
   - Order and track progress.

7. **What “personalized” means**
   - Show that product selection, usage instructions and routine can change based on answers.
   - Explicitly say: **Your bundle is curated for you. It is not the same set sent to everyone.**

8. **Science preview**
   - Hair cycle, genetics/DHT, scalp environment and other possible contributors.
   - Keep this concise and link to The Science page.

9. **Real routines and results**
   - Verified stories organized by concern and time used.
   - Standardized before/after framing, dates, lighting disclosure and individual-results disclaimer.
   - Never imply every visitor will obtain the same result.

10. **What may be inside a Inruut bundle**
    - Show possible categories, not a fixed universal kit.
    - Each item should be labeled “selected when appropriate.”
    - This is education, not a generic add-to-cart carousel.

11. **Quiz preview**
    - Show sample question types and the personalized result screen.
    - Explain why information is requested and how it is protected.

12. **FAQ and objection handling**
    - Is every bundle different?
    - How is my bundle chosen?
    - How long does the quiz take?
    - Can Inruut diagnose a medical condition?
    - When should I speak with a dermatologist?
    - How soon can progress reasonably be assessed?
    - Can I change or reorder my bundle?

13. **Final CTA band**
    - Restate the personal outcome, not a discount.
    - CTA: `Build my Inruut plan` or `Take the hair quiz`.

## Page 2: Men's Hair Loss

### Purpose

Help a man recognize common patterns, replace panic with useful information, and show why an assessment is a sensible next step.

### Recommended section order

1. Concern-led hero with a male-specific quiz entry
2. Common visible patterns: receding temples, crown thinning, diffuse thinning and patchy loss
3. Interactive pattern guide with clear “education, not diagnosis” wording
4. What may contribute: genetics, androgen sensitivity/DHT, scalp conditions, stress, illness, nutrition, medication and hair practices
5. Plain-language DHT and follicle-miniaturization explainer
6. What to do now
7. What not to do: panic-buy, combine strong actives without guidance, rely on a single symptom, expect overnight change or ignore sudden/patchy loss
8. Signs that should lead to professional medical assessment rather than a product recommendation
9. What the Inruut quiz considers
10. Personalized-plan example for an illustrative male profile
11. Verified male result stories, if available
12. FAQ
13. Final quiz CTA

### Tone

Direct, private and reassuring. Avoid shame, jokes about baldness, “fix yourself” language, or imagery that presents a completely bald scalp as a guaranteed reversible condition.

## Page 3: Women's Hair Loss

### Purpose

Address the broader and often more emotionally sensitive set of women’s hair concerns without treating all thinning as the same issue.

### Recommended section order

1. Empathetic concern-led hero with a female-specific quiz entry
2. Common visible patterns: widening part, reduced density, diffuse shedding, temple thinning, breakage and patchy loss
3. Hair loss versus hair shedding versus breakage
4. Possible contributors: hereditary pattern loss, hormonal changes, postpartum changes, menopause, thyroid or other health conditions, stress, nutritional deficiencies, medication, traction and chemical/heat damage
5. Hair-cycle explainer
6. What to do now
7. What not to do: hide symptoms from a clinician, start unsuitable products during pregnancy, over-supplement, use tight styles continuously or treat breakage as follicle loss
8. Clear professional-care red flags
9. What the Inruut quiz considers
10. Personalized-plan example for an illustrative female profile
11. Verified female result stories, if available
12. FAQ
13. Final quiz CTA

### Tone

Warm, specific and never dismissive. Do not imply that women’s hair concerns are purely cosmetic or that one hormonal explanation applies to everyone.

## Page 4: The Science

### Purpose

Turn “science-backed” from a marketing phrase into an understandable, auditable explanation.

### Recommended section order

1. **Science hero:** what Inruut can assess and what it cannot diagnose
2. **How hair grows:** anagen, catagen and telogen cycle
3. **How pattern hair loss develops:** genes, androgen sensitivity/DHT and follicle miniaturization
4. **Why men and women often show different patterns**
5. **Other contributors:** scalp health, stress, illness, nutrition, medication and hair practices
6. **The Inruut personalization model:** inputs -> profile -> bundle rules -> routine
7. **Ingredient or product-category library:** role, evidence level, who it may suit, cautions and source links
8. **Evidence standards:** clinical study, ingredient-level evidence, cosmetic test, customer survey and anecdote must be labeled differently
9. **Realistic timelines:** what can be observed and when, with condition-appropriate caveats
10. **When Inruut is not enough:** sudden, painful, scarring or patchy loss and other red flags
11. **References and medical reviewer details**
12. **Quiz CTA**

### Required review

All medical or efficacy content should be reviewed by an appropriately licensed or credentialed U.S. professional whose qualifications match the claim. U.S. marketing, product, regulatory and legal review must approve all claims before launch.

## Page 5: Hair Quiz

### Quiz opening screen

Before asking a question, tell the visitor:

- How long it takes, based on actual testing
- What information will be requested
- What they receive at the end
- That the result is personalized
- That the quiz is not a medical diagnosis
- How sensitive answers and optional photos are used

### Recommended stages

1. **About you**
   - First name can personalize the experience but should not be required before value is demonstrated.
   - Age range and relevant profile routing.

2. **Primary concern and pattern**
   - Main goal, location, pattern illustration, onset and progression.

3. **Hair and scalp**
   - Density, shedding, breakage, dandruff/flaking, sensitivity, oiliness and styling practices.

4. **Health and lifestyle**
   - Family history, recent stress/illness, diet, sleep, medication or life-stage questions only when necessary and legally appropriate.
   - Include “prefer not to answer” where possible.

5. **Routine and preferences**
   - Current products, time available, formulation preferences, sensitivities and purchase preferences.

6. **Safety routing**
   - Pregnancy/breastfeeding, age restrictions, severe symptoms and red flags where relevant to the actual products.
   - High-risk responses should not be forced into a sale.

7. **Optional photos**
   - Only if they materially improve the recommendation.
   - Explain storage, access, retention and deletion before upload.

8. **Contact and consent**
   - Ask for email/phone near the result, after the visitor understands the value.
   - Transactional result delivery and promotional consent must be separate choices.

### Interaction rules

- One main question per screen
- Visible, truthful progress indicator with named stages
- Large image-based choices where a visual answer is easier
- Auto-advance only for unambiguous single-choice questions
- Clear back button without losing answers
- Save progress locally; offer server-side save only with consent
- No promotion popup, chat takeover or normal store navigation during the quiz
- Explain why sensitive questions are asked
- Do not ask irrelevant questions after a branch makes them unnecessary
- Inline reassurance at moments of likely hesitation
- Keyboard, screen-reader and touch accessible
- Fast on average mobile connections

### Quiz result logic

The quiz should map answers to a finite, auditable set of recommendation rules. It should not present opaque “AI” as medical authority.

Each result should contain:

- Hair-profile name or short summary
- Primary concern and visible pattern selected by the user
- Possible contributing factors, carefully worded
- What the visitor can do now
- Recommended Inruut bundle
- Why each item was included
- What was deliberately not included and why, where useful
- Daily/weekly routine
- Expected review point and realistic timeline
- Safety notes and professional-care routing
- Ability to edit relevant answers

## Page 6: Your Inruut Plan

### Purpose

Convert the quiz result into a confident purchase without breaking the personalization story.

### Recommended section order

1. Personalized profile summary
2. “Curated for [name]” bundle overview
3. Individual bundle components and the reason each was selected
4. Simple morning/evening/weekly routine
5. What to expect and when to reassess
6. Price in USD, estimated U.S. delivery dates and every recurring-payment condition shown clearly
7. One-time versus subscription choice, only if both are operationally supported
8. Returns/guarantee and support
9. Relevant proof matched to the visitor’s concern
10. Safety and professional-care guidance
11. Add personalized bundle to cart

The cart should retain a readable summary of the recommendation and a private result code for fulfillment. The customer must be able to understand what they are buying before checkout.

## 6. Shopify Implementation Recommendation

### Recommended starting architecture

- Shopify Online Store 2.0 custom theme
- Modular sections editable by the Inruut team
- Shopify products and inventory remain the source of truth
- Quiz built as a focused custom experience or carefully selected Shopify app
- Structured educational content stored in Shopify metaobjects/metafields
- Shopify customer events/pixels for funnel measurement, honoring consent

### Personalized bundle model

For the first version, use a **finite rule-based bundle system**, not unlimited manual combinations.

Recommended operational model:

1. The quiz produces a `result_code`.
2. That code maps to an approved bundle recipe and routine.
3. The customer sees the actual selected components before purchase.
4. The result code is attached to the cart/order as a private property for fulfillment.
5. Visible line-item information explains the customer’s bundle in plain language.
6. Inventory is tracked at component level where required.

Shopify supports customized bundles through bundle apps/Functions and supports line-item properties for attaching customization data. The final choice depends on the number of components, inventory rules, fulfillment workflow and whether Inruut needs subscriptions.

### Decision required before development

Shopify bundle and subscription capabilities can change. If recurring delivery is a launch requirement, validate the intended bundle setup, cancellation flow and U.S. automatic-renewal disclosures against current Shopify capabilities and applicable federal and state rules before choosing the data model.

### Do not do this

- Create a unique Shopify product manually for every quiz response
- Hide bundle contents until after payment
- Store sensitive health answers directly in public cart properties
- Put the entire quiz in a fragile theme popup
- Depend on dozens of unrelated Shopify apps that slow the storefront

## 7. Visual Direction

### Recommended design character

**Clinical clarity with human warmth.** Inruut should feel credible and modern without looking like a hospital, generic supplement store or generic supplement catalog. The prototype includes three complete visual directions that share the same U.S.-specific copy, generated assets, science explainers, quiz logic and safety boundaries.

### Design 1: guided clinical commerce

The live Traya homepage is the primary structural design reference for Design 1: use its compact sticky navigation, rounded campaign hero, bright conversion controls, dense visual explainers, stage selectors, carousels and timeline rhythm as inspiration while keeping all Inruut content original and U.S.-specific.

Local routes: `/`, `/men`, `/women`, `/science`, `/quiz`

### Design 2: editorial natural luxury

The live Alitura homepage is the primary design-language reference for Design 2: use its full-bleed photographic campaigns, centered editorial wordmark, thin uppercase navigation, monochrome announcement bar, natural stone palette, generous white space, premium product-gallery rhythm and elegant comparison modules as inspiration. Do not copy Alitura product claims, customer numbers, proprietary copy, identity or imagery.

Design 2 also includes generated men’s and women’s four-phase photo journals plus practitioner-led trust photography for standardized progress documentation, responsible referral guidance and quality preparation. Inruut practitioners must not be visually presented as doctors. Every generated sequence must be identified as illustrative education rather than a real customer testimonial, product-performance claim or guaranteed result.

Local routes: `/design-2`, `/design-2/men`, `/design-2/women`, `/design-2/science`, `/design-2/quiz`, `/design-2/plan`, `/design-2/food-guide`

The current local Design 2 implementation includes the consumer-facing five-layer system (`Nourish`, `Balance`, `Root`, `Stimulate`, `Ritual`), one-box quiz paths, optional end-of-quiz email capture with a no-email route, the plan/product-detail framework, a post-purchase Food Guide, practitioner-led trust imagery and responsible referral language. Final formulas, prices, claims and checkout remain illustrative and blocked pending approval.

### Design 3: minimal clinical journal

Design 3 is a fully independent clean, minimal and premium explainer direction. It uses full-image editorial openings, numbered chapters, asymmetric evidence layouts, crisp ruled surfaces, restrained typography, mineral green, powder blue, signal red and high-contrast black. Its hierarchy should feel like a beautifully edited science journal rather than a product catalog, while preserving the same U.S.-specific copy, imagery, interactive explainers, quiz logic and safety boundaries.

Local routes: `/design-3`, `/design-3/men`, `/design-3/women`, `/design-3/science`, `/design-3/quiz`

### Vercel deployment package

The project is now prepared for a static Vercel deployment package while preserving the current Vinext local development workflow.

- Vercel config file: `vercel.json`
- Vercel build command: `npm run build:vercel`
- Output produced for Vercel: `.vercel/output`
- Static deployment content: `.vercel/output/static`
- Optional production URL override: set `NEXT_PUBLIC_SITE_URL=https://your-domain.com`

The Vercel build command first runs the normal Vinext production build, then pre-renders all implemented routes into static HTML and copies the client assets into Vercel's Build Output API structure. The deployed prototype remains an illustrative storefront: final formulas, USD prices, checkout behavior, subscriptions, claims, policies and verified customer proof must be approved before a live commercial launch.

### Initial palette direction

Final colors depend on the logo and packaging, but the interface should use a balanced palette rather than one dominant hue:

- Clear warm white for reading surfaces
- Near-black ink for authority and accessibility
- Deep mineral green for the Inruut identity
- Fresh lime for conversion controls, active states and short emphasis moments
- Warm cream and muted olive for educational cards and timelines
- Controlled rust or red only for warnings and professional-care routing

Borrow interaction and layout principles from the approved references, not their proprietary copy, customer claims, photography, illustrations or product identity. Avoid a generic all-green “natural” store.

### Typography

- Highly legible sans-serif for body, navigation, forms and scientific explanations
- A restrained editorial display face may be used for selected brand moments
- Strong hierarchy without oversized headlines inside compact sections

### Photography and video

- Real U.S.-based customers or models with visible hair texture and scalp detail
- A diverse American cast across race, ethnicity, age, skin tone, hair type, geography and concern pattern
- Honest expressions and everyday routines, not only polished salon imagery
- Contemporary U.S. homes, bathrooms, dermatology offices and everyday routines without relying on patriotic stereotypes
- Product and packaging shown clearly with U.S. English labels, USD pricing where visible and no non-U.S. regulatory marks or currencies
- Before/after media uses consistent angle, crop, lighting and disclosure
- Video should demonstrate the assessment, bundle preparation, routine and customer experience
- Do not use non-U.S. landmarks, maps, currencies, addresses, shipping labels, pharmacies, clinics or other geographic cues

### Motion

- Subtle hair-cycle and follicle explainers
- Clear quiz transitions that confirm progress
- No decorative motion that slows reading or shifts the layout
- Respect reduced-motion preferences

## 8. ImageGen Asset Plan

ImageGen should be used later for original educational bitmap illustrations that cannot be photographed clearly. It should not replace real customer, founder, expert, packaging or product photography.

Recommended generated explainer set:

1. Healthy follicle versus miniaturized follicle
2. Simplified DHT interaction and follicle miniaturization
3. Anagen/catagen/telogen hair-growth cycle
4. Common male pattern progression
5. Common female pattern progression
6. Hair shedding versus breakage versus follicle loss
7. Scalp barrier and buildup illustration
8. “What the Inruut assessment considers” systems illustration

### Art direction for explainers

- One consistent editorial-science style
- Anatomically understandable but not graphic
- Diverse U.S. hair and skin representation across straight, wavy, curly and coily textures
- Neutral backgrounds and clear focal points
- No embedded explanatory text; labels should be live HTML for accuracy, translation and accessibility
- Use U.S. English labels and U.S.-familiar units when measurements are necessary
- Exclude non-U.S. flags, maps, currencies, packaging, clinical settings and culturally specific visual shorthand unrelated to the American audience
- Every medical illustration reviewed before publication

## 9. Copy Framework

The final copy should follow this hierarchy:

1. **Outcome:** what the visitor gets
2. **Reason:** why personalization matters
3. **Method:** how Inruut creates the recommendation
4. **Evidence:** what supports the statement
5. **Expectation:** how long it may take and what varies
6. **Action:** the next specific step

### CTA language to test

- Take the hair quiz
- Build my Inruut plan
- Find my personalized bundle
- Understand my hair pattern

Avoid vague labels such as `Learn more`, `Submit` or `Get started` when a more specific action fits.

### Copy inputs needed from the client

- Brand story and meaning of “Inruut”
- Confirmed U.S. launch coverage: contiguous 48 states, all 50 states, Washington, D.C. and/or U.S. territories
- USD price positioning, free-shipping threshold, state sales-tax handling and U.S. delivery estimates
- Exact customer segments and price positioning
- Full product catalog, ingredients, sizes, usage and cautions
- Rules that determine which product enters which bundle
- Clinical, dermatology, trichology or formulation experts involved
- Studies, lab tests, certifications and permitted claims
- Real customer reviews and usage permission
- Before/after media and consent documentation
- Guarantee, return, cancellation and refund policy
- Shipping times and support model
- One-time purchase and/or subscription decision
- Desired tone and examples of brand language to keep or avoid
- Founder story, team photos and packaging files

## 10. Conversion Measurement Plan

### Core events

- `quiz_cta_viewed`
- `quiz_cta_clicked` with page, section and CTA label
- `quiz_started`
- `quiz_stage_completed`
- `quiz_question_answered` using non-sensitive analytics values
- `quiz_abandoned` using last completed stage
- `lead_captured` with consent type
- `result_viewed` with non-sensitive result code
- `result_edited`
- `personalized_bundle_added`
- `checkout_started`
- `purchase_completed`
- `subscription_selected`, if applicable

Sensitive medical-style answers, uploaded photos and free text must not be sent casually to advertising pixels.

### Primary funnel metrics

- Landing page -> quiz start rate
- Quiz start -> quiz completion rate
- Quiz completion -> result view rate
- Result view -> add-to-cart rate
- Add-to-cart -> checkout rate
- Checkout -> purchase rate
- Overall visitor -> personalized bundle purchase rate
- Refund/cancellation rate
- Repeat-order rate

Segment results by landing page, men/women path, device, traffic source and returning/new visitor without exposing sensitive personal data.

### First A/B test backlog

1. Hero promise: “personalized bundle” versus “understand your pattern”
2. CTA wording and truthful quiz-duration reassurance
3. Proof placement directly below the hero versus after the problem section
4. Quiz contact capture immediately before result versus after a useful result preview
5. Result layout: full routine first versus bundle first
6. One-time purchase default versus subscription default, only after pricing and policy are settled

Test one meaningful hypothesis at a time and keep a written decision log.

## 11. Trust, Safety and Compliance

- Do not diagnose conditions through marketing copy or an unreviewed quiz.
- Do not promise guaranteed regrowth or a universal timeline.
- Treat a cosmetic product as a cosmetic in copy. Claims that a product treats or prevents disease or affects the body's structure or function may cause it to be regulated as a drug under U.S. law.
- Do not state or imply “FDA approved” unless that exact finished product and use have the required FDA status.
- Substantiate express and implied health-related claims before publication under FTC standards; the full page, imagery and testimonials contribute to the claim's overall impression.
- Clearly distinguish customer surveys from clinical evidence.
- Disclose when evidence supports an ingredient rather than the finished Inruut bundle.
- Testimonials and before/after media must be genuine, authorized and accompanied by clear disclosures of material connections and generally expected results where required.
- Obtain explicit written permission for all customer media and document how it may be used.
- Provide escalation guidance for sudden, painful, scarring or patchy hair loss and other relevant red flags.
- Treat quiz answers and scalp photos as sensitive data even where the law does not formally classify every field that way.
- Do not claim the quiz is “HIPAA compliant” unless Inruut' role and full data flow have been reviewed and the claim is accurate.
- Publish a U.S.-focused privacy notice and deletion process; assess state privacy requirements based on launch footprint, data practices and business thresholds.
- Separate order communication consent from promotional email and SMS consent. Use clear opt-in language and preserve consent records.
- Show subscription price, frequency, renewal, cancellation method and trial terms clearly before purchase; do not use preselected subscription choices.
- Use Shopify’s consent-aware privacy and pixel mechanisms.
- Obtain U.S. medical, regulatory and legal review before launch, including state-specific review where products, telehealth, privacy or renewal rules require it.

## 12. SEO and Content Strategy

The men, women and science pages should be useful standalone resources, not thin doorway pages.

### Initial topic clusters

- Male pattern hair loss and common patterns
- Female pattern thinning and widening part
- Hair shedding versus hair loss
- DHT and follicle miniaturization
- Hair-growth cycle
- Scalp health and dandruff
- Breakage, traction and styling damage
- When to see a dermatologist

Each medical-style article needs an author/reviewer, review date, references and clear boundaries. Avoid mass-producing low-value AI articles.

## 13. Performance and Accessibility Requirements

- Mobile-first design and quiz behavior
- Stable image/video dimensions to prevent layout shift
- Responsive modern image formats and lazy loading below the fold
- Fast first viewport without autoplaying heavy video on mobile
- Minimum WCAG AA color contrast
- Visible keyboard focus and full keyboard quiz operation
- Descriptive alt text and captions
- Live HTML labels for scientific illustrations
- Form errors that explain the correction
- No text embedded in generated diagrams
- Reduced-motion support

## 14. Launch Phases

### Phase 1: Strategy approval

- Approve positioning, pages, funnel and visual direction
- Receive client copy and product/claim data
- Confirm U.S. launch states, USD pricing, fulfillment and subscription model

### Phase 2: Content and quiz rules

- Final page copy
- Quiz question tree and recommendation matrix
- Evidence/claims review
- Asset inventory and ImageGen briefs

### Phase 3: Design

- Design system
- Mobile and desktop page designs
- Quiz and result states
- Shopify cart/checkout handoff

### Phase 4: Shopify development

- Theme and reusable sections
- Quiz logic and bundle integration
- Analytics, privacy and SEO
- Content population

### Phase 5: QA and launch

- Mobile/desktop/browser testing
- Quiz-rule and order-routing tests
- Accessibility and performance review
- Claim, legal and medical approval
- Analytics validation and controlled launch

## 15. Open Decisions

These decisions should be answered before design begins:

1. Does the initial U.S. launch cover the contiguous 48 states only, all 50 states, Washington, D.C. and/or U.S. territories?
2. Are Inruut bundles cosmetic hair care, supplements, OTC drugs, prescription treatments, or a combination?
3. Who approves the recommendation rules and medical-style content for U.S. use?
4. Is the bundle assembled from a fixed product catalog, custom-formulated, or both?
5. How many valid bundle recipes are expected at launch?
6. Is the purchase one-time, subscription, or both?
7. Will customers receive ongoing coaching or follow-up, and will any service constitute telehealth?
8. Are scalp photos required, optional, or excluded?
9. What USD price range, guarantee and U.S. delivery promise can be shown?
10. What verified proof is available at launch?

## 16. Research Sources

### Comparable experiences

- [Hims hair-loss experience](https://www.hims.com/hair-loss)
- [Keeps hair-loss treatment](https://www.keeps.com/hair-treatment)
- [Hers hair-loss experience](https://www.forhers.com/hair-loss)
- [Nutrafol](https://nutrafol.com/)
- [Prose personalized hair care](https://prose.com/)
- [Function of Beauty personalized hair care](https://functionofbeauty.com/pages/home)

### Ecommerce and Shopify

- [Baymard checkout-flow research](https://baymard.com/learn/checkout-flow-ux-optimization)
- [Baymard cart and checkout usability research](https://baymard.com/research/checkout-usability)
- [Shopify product bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles)
- [Shopify cart and line-item properties](https://shopify.dev/docs/storefronts/themes/architecture/templates/cart)
- [Shopify Customer Privacy API](https://shopify.dev/docs/api/customer-privacy)
- [Shopify web pixels](https://shopify.dev/docs/apps/build/marketing/pixels)

### Medical content baselines

- [American Academy of Dermatology: hair-loss causes](https://www.aad.org/public/diseases/hair-loss/causes/18-causes)
- [American Academy of Dermatology: female pattern hair loss](https://www.aad.org/public/diseases/hair-loss/types/female-pattern)
- [American Academy of Dermatology: male pattern hair loss](https://www.aad.org/public/diseases/hair-loss/treatment/male-pattern-hair-loss-treatment)
- [Mayo Clinic: hair-loss symptoms and causes](https://www.mayoclinic.org/diseases-conditions/hair-loss/symptoms-causes/syc-20372926)
- [Mayo Clinic: hair-loss diagnosis and treatment](https://www.mayoclinic.org/diseases-conditions/hair-loss/diagnosis-treatment/drc-20372932)
- [FDA: cosmetics labeling claims](https://www.fda.gov/cosmetics/cosmetics-labeling-claims)
- [FTC: Health Products Compliance Guidance](https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance)
- [FTC: Endorsement Guides](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking)

## 17. Client-Supplied Website Documents Review

This section records the information supplied in the local `usefullassets ` folder on 19 August 2026 and translates it into website requirements. The folder name currently includes a trailing space. Five Word documents and two screenshots were reviewed individually. The Word files contain no comments, tracked changes or embedded media; the two PNG files are separate quiz references.

The documents are useful direction, not automatic publication approval. Product, medical, nutrition, testimonial, price/value and results statements still need substantiation and U.S. regulatory review before they become customer-facing copy.

### Source-by-source findings

| Source | What it establishes | Website implication |
| --- | --- | --- |
| `Website Text (Draft).docx` | Positions the offer as a root-first system combining topical care, internal nourishment, herbal/mineral support, ritual guidance, food guidance and optional consultation. It specifically mentions a dermaroller, DMSO, horsetail, rosemary, fat-soluble vitamins, iodine and silica. It also contains a first-person age-32 stabilization story and a detailed food guide. | Replace the generic cosmetic-bundle story with the confirmed Hair Root Wellness Box architecture only after exact formulas, doses, labels, warnings and eligibility are supplied. Create a separate food-guide or post-purchase education experience rather than placing the entire guide on the sales page. Founder attribution and consultation operations must be confirmed. |
| `QUIZ_.docx` | Makes the quiz the primary sales route; branches by men's/women's concerns; asks about symptom, timeline, stress and preferences; and recommends one named box rather than a comparison grid. Proposed routes include Cycle Root Balance, Nervous System Root Reset, DHT Root Support and Scalp Restore, plus unfinished thyroid/adrenal placeholders. | Rebuild the recommendation matrix around a finite set of approved box recipes. Keep one recommendation per result, explain why it was selected, and preserve clinician escalation. Do not infer or diagnose hormonal, thyroid, adrenal or DHT-related conditions from quiz answers. |
| `Shopify Product Page 1.docx` | Defines the product-page sequence: product title and hero, quick benefits, what is inside, who it is for, how it works, personalization, proof and final CTA. The intended product name is `Hair Root Wellness Box`, with `The art of root renewal` as a supporting line. | Add a real plan/product-detail experience to the current five-route prototype. The result must lead into this page with the recommended box, actual included components, routine, price, delivery and cautions. The draft social-proof quotes are placeholders and must not be published. |
| `Shopify Product page 2.docx` | Frames the box as a complete five-part system: Internal Foundation Support, Scalp Environment Treatment, Growth Cycle Support, Root Restoration Element and Guided Ritual System. It proposes category values of `$40+`, `$35+`, `$30+`, `$25+` and `$20+`, totaling `$150+`. | Use the five-part framework as the principal merchandising explainer. Do not display the proposed component values or `$150+` total until the business can prove normal standalone value and the comparison is not misleading. |
| `What’s inside_.docx` | Supplies the strongest design brief: a centered five-block system, thin gold icons, serif titles, sans-serif descriptions, black or cream backgrounds, generous spacing, equal block sizing, subtle hover/tap feedback and a total-value anchor. It argues for revealing the framework while withholding exact products. | Build this as a premium Design 2 section, using the five categories and black/gold language. Keep the visual hierarchy, but reject the instruction to hide ingredients or products until after delivery: customers must be able to review actual contents, amounts, cautions and purchase terms before checkout. |
| `Screenshot 2026-03-23 at 10.59.07 PM.png` | Shows a low-distraction quiz introduction built around a personalized recommendation promise, a named-expert/founder endorsement, one strong CTA, warm neutral color and generous whitespace. | Adapt the focused entry pattern to Inruut. Use a real founder or qualified expert only after identity, credentials, photography and permission are supplied; do not reuse the names, drawings or copy shown in the reference. |
| `Screenshot 2026-03-23 at 11.00.40 PM.png` | Shows email capture immediately before recommendations, a discount incentive, a clear submit action and a visible option to receive results without submitting an email. | If lead capture is introduced, place it near the result and keep a clear `View my results without email` route. Promotional consent must be separate from result delivery. The `15% off` offer is not approved until pricing and promotion terms are confirmed. |

### Revised product and positioning brief

The supplied material narrows the concept from a broad personalized hair-care bundle to a more distinctive offer:

**Inruut is a personalized Hair Root Wellness Box: a coordinated system intended to support the internal foundation, scalp environment, hair-growth cycle, root-focused routine and day-to-day consistency.**

The strongest usable message is `A system, not just products.` The term `system` should become more prominent across Design 2, while `root` should remain the recurring organizing idea. The website still must explain each recommendation rather than using mystery as the luxury signal.

Naming must be normalized before implementation:

- The public brand is `Inruut`, not `Ruuts` or any pluralized variant.
- Use `Inruut Hair Root Wellness Box` as the working master product name.
- Treat `The art of root renewal` as optional campaign copy, not a substantiated outcome claim.
- The four proposed result names are working names until their recipes and eligibility rules are approved.

### Required website changes

1. **Reframe Design 2 around the box system.** Replace generic product shelves with the five-category Root Wellness System and use black, warm white and controlled gold as the principal merchandising palette.
2. **Add the missing plan/product page.** The current prototype has home, men, women, science and quiz routes, but the supplied sales flow requires a sixth experience for the selected Hair Root Wellness Box. It must show the actual box contents before purchase.
3. **Make the quiz the dominant path.** Keep persistent quiz calls to action, reduce catalog-style browsing, and state the concrete payoff: one personalized box and a routine the visitor can understand.
4. **Update the quiz branches.** Add the supplied cycle, stress, pattern, crown/hairline, scalp and preference signals where they are relevant. Keep the current sudden/patchy/painful/inflamed safety routing and add `Prefer not to answer` for sensitive questions.
5. **Create an auditable recommendation matrix.** Each valid answer pattern must map to one approved box code, component recipe, rationale, routine, warnings and reassessment point. Placeholder thyroid, adrenal, hormone and DHT labels cannot function as diagnoses.
6. **Redesign the result.** Show one recommended system, not multiple boxes. Explain the five layers, why each included component is present, what is not included, how to use it, price in USD and the next review point.
7. **Add the five-block “What’s Inside” explainer.** Use equal geometry, thin line icons, concise live HTML labels, black/gold and cream variants, restrained hover feedback, and an accessible stacked mobile layout.
8. **Keep ingredient transparency before checkout.** The framework may create intrigue earlier in the funnel, but the selected result/product page must reveal the actual products, ingredient lists, supplement facts where applicable, quantities, allergens, cautions and usage instructions.
9. **Separate education from conversion copy.** Move the long food guide into a dedicated resource, downloadable guide or post-purchase module after medical and nutrition review. Keep the product page focused on the system and its safe use.
10. **Use proof only when verified.** The draft quotes and first-person founder result are not testimonials ready for publication. Build the review components with empty or clearly labeled placeholder data until real authorization and typical-results context are available.
11. **Support optional end-of-quiz capture.** Results must remain accessible without surrendering an email. A discount can be tested later only with approved economics, terms and consent language.
12. **Preserve professional-care boundaries.** Product recommendations must yield to clinician guidance for relevant red flags and for questions that require diagnosis, laboratory testing or medication review.

### Claims and content requiring approval

The following supplied statements or concepts must not be published as written:

- Topicals `reach the tissue level to stimulate growth`.
- The box `supports hormonal balance`, `reduces cycle-related shedding`, stops hair loss or creates visible change on a stated timeline.
- DMSO, dermarolling, fat-soluble vitamins, iodine, silica or herbal compounds are suitable for an individual without formula-specific instructions, contraindications and qualified review.
- Thyroid, adrenal, hormonal or DHT status can be determined from a marketing quiz.
- The body is universally more than 70% water or filtered/distilled water produces noticeable hair benefits.
- Raw milk, avoiding seed oils, fixed plate percentages or other draft food rules are universally appropriate hair-growth guidance.
- `$40+` component values and a `$150+` total value without documented, genuine comparison prices.
- The three sample review quotes in `Shopify Product Page 1.docx`.
- The first-person age-32 result story without confirming the speaker, accuracy, permission, material connection and expected-results disclosure.
- The BUBS recommendation and discount code without confirming the relationship and adding any required affiliate disclosure.

These may be rewritten or used after the finished products, evidence, instructions, operations and legal boundaries are known. Until then, the existing realistic-expectations language is the safer source of truth.

### Information still needed from the client

- Exact contents of every proposed box, including brand/manufacturer, formula, quantity, dose or usage, label copy, warnings, contraindications and shelf life
- Which items are cosmetics, dietary supplements, devices, OTC drugs or other regulated categories
- Approved box names and the precise rules that map quiz answers to each box
- Whether DMSO and the dermaroller are truly launch products, and the qualified reviewer responsible for their instructions
- Price, genuine component comparison values, shipping, returns, guarantee and subscription terms
- Identity, credentials and role of the founder or experts represented in the quiz and consultation offer
- Consultation scope, provider qualifications, states served, scheduling, privacy and whether it constitutes healthcare or telehealth
- Substantiation for every benefit, mechanism, timeline and finished-product claim
- Real reviews, before/after permissions and records showing when and how results were obtained
- Confirmation of any affiliate relationship or discount code in the food guide
- Final decision on optional email capture and any promotion attached to it

### Recommended implementation order

1. Confirm product classification, exact box contents and claim boundaries.
2. Approve the finite box catalog and quiz-to-box recommendation matrix.
3. Update Design 2 home, men, women and science copy around the five-layer system.
4. Build the five-block `A Complete Root Wellness System` section.
5. Rebuild the quiz branches and one-box result state.
6. Add the plan/product-detail route with full pre-purchase transparency.
7. Add verified founder, expert, review and consultation material.
8. Publish the food guide only after nutrition and medical review.

No website implementation should present the supplied draft as final until steps 1 and 2 are resolved. Vercel preview deployment may be used for review, but public commercial launch remains blocked without approval of final content, product details, policies and claims.

---

**Implementation authorization:** The client has authorized a Vercel-ready prototype for the U.S. market. Production Shopify integration, final claims, real customer proof, prescription/OTC flows, subscriptions and checkout remain blocked until the relevant client inputs and approvals above are supplied.
