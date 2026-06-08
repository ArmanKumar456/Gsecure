<!--
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   🔐  G S E C U R E  —  Pull Request Template                  │
│                                                                 │
│   Security-first password manager · github.com/HarshYadav152   │
│                                                                 │
│   ⚠️  Complete EVERY section before requesting review.          │
│   Incomplete PRs will be sent back without review.             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
-->

## 📝 Description

<!-- 
  Summarize your changes clearly:
  - What problem does this PR solve?
  - What approach did you take?
  - Any important context reviewers should know?
-->

Fixes # <!-- issue number, e.g. Fixes #41 -->

---

## 🏷️ Type of Change

<!-- Check all that apply — delete none, just uncheck what doesn't apply -->

- [ ] 🐛 Bug fix (non-breaking — fixes an issue)
- [ ] ✨ New feature (non-breaking — adds functionality)
- [ ] 💥 Breaking change (alters existing behaviour or API contract)
- [ ] ♻️ Refactor (improves code without changing behaviour)
- [ ] 🔒 Security fix (patches a vulnerability or hardens auth/encryption)
- [ ] 🎨 UI / Styling (visual or layout changes only)
- [ ] 📝 Documentation update
- [ ] ⚙️ Config / CI / tooling change

---

## 🧪 How Has This Been Tested?

<!-- Describe every test you ran. Be specific enough that a reviewer can reproduce it. -->

### Test Environment
| | |
|---|---|
| **OS** | |
| **Browser & Version** | |
| **Node.js Version** | |

### Steps to Reproduce / Verify

1. 
2. 
3. 

**✅ Expected result:**

**❌ Result before this PR (for bug fixes):**

### Test Coverage
- [ ] Manually tested end-to-end on local dev
- [ ] Unit tests added or updated
- [ ] All existing tests pass locally
- [ ] No regressions in related features

---

## 🖼️ Screenshots

<!-- UI changes: before & after are required. Delete section for logic-only changes. -->

<details>
<summary>Click to expand</summary>

| Before | After |
|--------|-------|
| | |

</details>

---

## 🔒 Security Checklist (Gsecure-specific)

- [ ] No vault data, passwords, or auth tokens are logged or exposed
- [ ] No new API routes added without middleware protection
- [ ] Encryption / decryption logic is unchanged or explicitly reviewed
- [ ] No secrets or API keys are hardcoded
- [ ] User input is validated and sanitised

---

## ✅ Checklist

### Code Quality
- [ ] I have performed a self-review of my own code
- [ ] My code follows the style guidelines of this project
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] My changes generate no new warnings (`npm run lint` passes)
- [ ] No leftover `console.log`, debug code, or commented-out blocks

### Testing
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

### Documentation
- [ ] I have made corresponding changes to the documentation
- [ ] New API endpoints or changed behaviour are documented

### PR Hygiene
- [ ] PR title follows [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`…)
- [ ] This PR is focused on a single concern — no unrelated changes bundled in
- [ ] Branch is up-to-date with `main`

---

## 👁️ Reviewer Notes

<!-- Anything the reviewer should focus on, known limitations, or planned follow-ups. -->

<!--
  Thank you for contributing to Gsecure 🔐
  Questions? Reach the maintainer at HarshYadav152@outlook.com
-->