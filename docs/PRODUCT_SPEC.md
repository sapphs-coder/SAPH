# SAPH — Product Specification

**Status:** Discovery / MVP planning  
**Product direction:** Personal AI-powered creator studio  
**Initial platforms:** Instagram and TikTok

## 1. Product vision

SAPH helps its owner publish consistent, distinctive short-form social content, learn what resonates with an audience, and prepare for relevant paid brand collaborations.

SAPH is a creative assistant and workflow tool. It should preserve the creator's personality rather than produce generic influencer content.

## 2. Brand and content profile

### Content pillars
- Lifestyle and everyday moments
- Beauty and fashion
- Travel
- Food and restaurants
- Fitness and wellness
- Personal development
- Daily-life vlogs

### Voice and style
The creator wants a flexible mixture of styles. SAPH should adapt tone to each post and offer selectable directions such as:
- polished and aesthetic
- warm and relatable
- playful and confident
- informative and thoughtful
- trend-aware and energetic

Avoid forcing every post into one voice. Captions should sound natural, specific to the footage, and never invent experiences, products, locations, results, or endorsements.

### Main ambition
Build a recognisable personal brand and attract paid collaborations.

## 3. Target user and jobs to be done

The first user is the creator herself. She needs to:
1. Turn everyday photos and video clips into post ideas.
2. Create platform-appropriate hooks, captions and calls to action.
3. Plan a sustainable posting rhythm for Instagram and TikTok.
4. Keep drafts organised and approve content before publication.
5. Learn from post performance and improve future content.
6. Prepare a credible profile and materials for brand enquiries.

## 4. MVP scope — build first

### A. Creator dashboard
- Show today's content task and the week's planned posts.
- Quick actions: Create a post, Generate captions, Plan my week.
- Show draft / ready / published status.
- Start with sample content and clearly label it as demo data.

### B. Caption studio
Inputs:
- Content pillar
- Platform (Instagram, TikTok, or both)
- Short description of the post or footage
- Desired tone
- Optional key details, product names, location, and call to action

Outputs:
- 3 distinct caption options
- 3 opening-hook options
- Relevant hashtag suggestions (not a promise of reach)
- Optional CTA
- Platform-specific variations
- Copy and edit controls

Rules:
- Never fabricate personal details or brand relationships.
- Avoid engagement bait and repetitive hashtag stuffing.
- Let the creator edit and approve every draft.

### C. Weekly content planner
- Seven-day calendar/list view.
- Create, edit, move, and delete draft ideas.
- Assign a content pillar and target platform.
- Track status: idea, draft, ready, published.
- Offer a balanced mix of pillars without requiring a post every day.
- Daily posting is the initial goal, but the planner should support rest/buffer days.

### D. Brand voice profile
- Store preferred tone and wording preferences.
- Allow the creator to add examples of her own captions.
- Use these examples to guide future drafts.
- Provide controls to revise or remove preferences.

## 5. Later phases (not part of first MVP)

### Video editing assistance
- Upload/select source clips.
- Generate an edit plan with clip order, suggested trims, on-screen text, pacing, and aspect ratio.
- Export or render short-form video only after a suitable video-processing pipeline is selected.
- Do not claim to edit/render video until that capability is implemented and tested.

### Publishing and scheduling
- Investigate official Instagram and TikTok publishing APIs and eligibility.
- Until integrations are implemented and authorised, SAPH prepares content for manual publishing.
- Require explicit creator approval before publishing.

### Analytics and growth
- Import permitted account/post metrics.
- Track views, reach, watch time, saves, shares, comments, profile visits and follower changes where available.
- Compare performance by pillar, format and hook.
- Avoid promising follower growth or virality.

### Brand collaboration workspace
- Track target brands and outreach status.
- Draft personalised collaboration pitches.
- Prepare a media kit using verified creator statistics only.
- Clearly distinguish gifted, affiliate and paid partnerships.

## 6. Core user journey

1. Open dashboard.
2. Choose Create a post.
3. Describe or upload the content (MVP starts with a text description; media upload can follow).
4. Select platform, pillar and tone.
5. Generate several caption/hook options.
6. Edit and save as a draft.
7. Add it to the weekly planner.
8. Approve and publish manually until official publishing integrations are ready.
9. Record results later when analytics is available.

## 7. Non-functional requirements

- Mobile-first responsive interface.
- Accessible labels, keyboard navigation and readable contrast.
- Fast, simple workflow with minimal setup.
- Keep private media and account credentials secure.
- Never ask users to paste passwords or access tokens into the app.
- Be transparent when AI output is generated or when sample/demo data is shown.
- Provide clear loading, empty, error and success states.

## 8. MVP acceptance criteria

The first usable prototype is complete when:
- Dashboard loads on mobile and desktop.
- Creator can enter post details and select platform, pillar and tone.
- Caption studio returns three editable caption drafts and hook ideas (initially deterministic demo generation is acceptable if clearly labelled).
- Creator can copy a caption.
- Creator can save a draft and see it in the planner.
- Creator can change a draft's status and edit or delete it.
- No content is published automatically.
- README explains setup, current limitations and next steps.

## 9. Decisions still to confirm

- Preferred product form: responsive web app first (recommended), or native mobile app.
- Visual identity: colours, typography and logo direction.
- Whether to connect real AI generation in MVP or first validate the workflow with a clearly labelled prototype.
- Preferred video-editing approach and budget.
- Which Instagram/TikTok account integrations are available and eligible.

## 10. Build sequence

1. Responsive dashboard and navigation.
2. Caption Studio form and draft preview.
3. Weekly planner with persistent draft storage.
4. Brand voice settings.
5. Real AI generation integration.
6. Media upload and video edit-plan workflow.
7. Official publishing and analytics integrations, subject to platform permissions.
