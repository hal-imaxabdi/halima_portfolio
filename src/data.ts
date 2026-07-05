import { Project, Certification } from "./types";

import hooklineImg from "./assets/images/hookline.png";
import semisImg from "./assets/images/semis.png";
import aiRiskImg from "./assets/images/ai-risk.png";
import coffeeShopImg from "./assets/images/coffee-shop.png";
import gymImg from "./assets/images/gym.png";
import socHomelabImg from "./assets/images/soc-homelab.png";
import indoStaysImg from "./assets/images/indostays.png";
import cafeAppImg from "./assets/images/cafeapp.png";

import googleCyberCertImg from "./assets/images/googlecyber.png";
import awsCertImg from "./assets/images/aws.jpg";
import infoSecCertImg from "./assets/images/information securtiy.png";
import googleAiCertImg from "./assets/images/google ai.png";
import tryhackmeCertImg from "./assets/images/tryhackme.png";
import techcrushCertImg from "./assets/images/techcrush.png";

export const PERSONAL_INFO = {
email: "halimamohamedabdirizak@gmail.com",
githubUrl: "https://github.com/hal-imaxabdi",
linkedinUrl: "https://www.linkedin.com/in/halima-abdirizak-mohamed/",
};

export const CERTIFICATIONS: Certification[] = [
{
title: "Google Cybersecurity Professional Certificate",
issuer: "Google",
id: "CERT-GOOG-SEC",
image: googleCyberCertImg,
},
{
title: "AWS Security Fundamentals",
issuer: "Amazon Web Services",
id: "CERT-AWS-SEC",
image: awsCertImg,
},
{
title: "Information Security Certification",
issuer: "freeCodeCamp",
id: "CERT-FCC-ISEC",
image: infoSecCertImg,
},
{
title: "Google AI Certificate",
issuer: "Google",
id: "CERT-GOOG-AI",
image: googleAiCertImg,
},
{
title: "Pre-Security Learning Path",
issuer: "TryHackMe",
id: "CERT-THM-PRESEC",
image: tryhackmeCertImg,
},
{
title: "Certification in Cybersecurity",
issuer: "TechCrush",
id: "CERT-TC-CYB",
image: techcrushCertImg,
},
];

export const PROJECTS: Project[] = [
{
id: "hookline",
number: "01",
title: "Hookline",
description:
"Chrome extension that detects phishing via typosquatting, homoglyphs, and brand-impersonation analysis.",
tech: ["Chrome Extension", "JavaScript", "NLP", "Phishing Detection"],
githubUrl: "https://github.com/hal-imaxabdi/hookline",
imageUrl: hooklineImg,
overview: {
problem:
"Lookalike domains and phishing links use subtle character swaps that are easy for the eye to miss but dangerous to click.",
role:
"I built this one on my own, handling both the detection engine and the popup UI from start to finish.",
decision:
"Instead of relying on a static blacklist, I built a homoglyph-aware character map paired with typosquatting distance scoring, so it can catch phishing domains it's never seen before.",
},
},
{
id: "semis",
number: "02",
title: "SEMIS: Secure Employee Management System",
description:
"Security-first full-stack HR system with MFA, RBAC, JWT, and OWASP-minded design.",
tech: ["React", "Node.js", "MongoDB", "RBAC", "MFA"],
githubUrl:
"https://github.com/hal-imaxabdi/SEMIS-Secure-Employee-Management-Information-System",
imageUrl: semisImg,
overview: {
problem:
"Internal HR tools often trust sessions and input too freely, exposing sensitive employee records to common web attacks.",
role:
"I built this solo, from the database schema to the backend APIs and the frontend.",
decision:
"Permissions are checked at the API and database level, not just hidden in the UI, so there's no way to bypass RBAC by hitting the API directly.",
},
},
{
id: "ai-security-audit",
number: "03",
title: "AI-Assisted Security Audit Platform",
description:
"AI-driven cybersecurity risk assessment that recommends guided audit steps and mitigations.",
tech: ["NIST CSF", "RBAC", "Risk Scoring", "AI-Assisted Audit", "Ollama"],
githubUrl:
"https://github.com/hal-imaxabdi/AI-Assisted-Risk-Assessment-Security-Audit-Platform",
imageUrl: aiRiskImg,
overview: {
problem:
"Manual NIST CSF audits are slow and inconsistent, and non-experts often struggle to judge which controls matter most.",
role:
"Academic team project. I handled the backend, including the audit logic and running the AI model locally with Ollama.",
decision:
"I ran the LLM locally through Ollama instead of calling an external API, mainly so audit data never has to leave the machine it's running on.",
},
},
{
id: "flask-auth-lab",
number: "04",
title: "Secure Flask Authentication Lab",
description:
"Hands-on lab comparing vulnerable vs. hardened authentication with BCrypt, JWT, rate limits, and CSRF.",
tech: ["Python", "Flask", "BCrypt", "JWT", "CSRF Protection"],
githubUrl:
"https://github.com/hal-imaxabdi/Secure-Flask-Authentication-Lab",
imageUrl: coffeeShopImg,
overview: {
problem:
"Weak authentication choices, like plaintext passwords and no rate limiting, are easy to describe but more convincing when shown side-by-side against a hardened version.",
role:
"Academic team project. I built the backend for both the vulnerable and secure coffee shop apps; a teammate built a separate brute-force tool to test attacks against them.",
decision:
"Both versions share the same structure so they're easy to compare directly. The BCrypt hashing, JWT sessions, rate limiting, and CSRF protection all live in the same spots across both.",
},
},
{
id: "Flexity-Gym-Management-System",
number: "05",
title: "Flexity: Gym Management & Fitness App",
description:
"Gym app for class scheduling, memberships, trainers, and workout tracking.",
tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
githubUrl: "https://github.com/hal-imaxabdi/flexity",
imageUrl: gymImg,
overview: {
problem:
"Small gyms often manage classes, memberships, and trainers across spreadsheets and paper, leading to scheduling conflicts and lost data.",
role:
"Academic project, built solo, from database design through to the full stack.",
decision:
"I kept class scheduling separate from membership management so either one could change without breaking the other as I kept adding features.",
},
},
{
id: "soc-homelab",
number: "06",
title: "SOC Homelab",
description:
"Hybrid SOC homelab sending Windows and Kali VM logs to Elastic Cloud SIEM for detection practice.",
tech: ["Elastic SIEM", "Windows", "Kali Linux", "Log Analysis"],
githubUrl: "https://github.com/hal-imaxabdi/Soc-Homelab",
imageUrl: socHomelabImg,
overview: {
problem:
"Detection skills are hard to build without real logs and a real SIEM to practice against.",
role:
"Built and configured the whole homelab on my own.",
decision:
"I went with Elastic Cloud instead of a local ELK stack, mainly so I could forward and query logs from anywhere, which is closer to how a real SOC setup works.",
},
},
{
id: "indostays-app",
number: "07",
title: "IndoStays App",
description:
"Flutter mobile app for browsing and booking accommodations with Firebase-backed features.",
tech: ["Flutter/Dart", "Firebase", "REST APIs"],
githubUrl: "https://github.com/hal-imaxabdi/IndoStays-App",
imageUrl: indoStaysImg,
overview: {
problem:
"Travelers need a simple way to browse and book accommodations without juggling multiple apps.",
role:
"Solo project. I handled the UI, state management, and Firebase integration myself.",
decision:
"I used Firebase instead of building a custom backend, so I could get the core booking experience working first and layer in more complex logic later.",
},
},
{
id: "cafe-app",
number: "08",
title: "Cafe App",
description:
"Modern Android café ordering app built with Kotlin and Jetpack Compose showcasing native app development.",
tech: ["Kotlin", "Jetpack Compose", "Android"],
githubUrl: "https://github.com/hal-imaxabdi/cafe-app",
imageUrl: cafeAppImg,
overview: {
problem:
"Ordering in person at cafés can be slow during rush hours, and small cafés often lack a native ordering app of their own.",
role:
"Built solo, using Kotlin and Jetpack Compose.",
decision:
"I went with Jetpack Compose over traditional XML layouts for a cleaner, more maintainable UI with less boilerplate.",
},
},
];
