---
title: Voice of the Customer
subtitle: One pipeline, every signal.
role: Led program
year: "2024"
order: 5
summary: One pipeline for every customer signal, sitting on Pendo Listen with Salesforce account context. 5-business-day PM response SLA.
metric: "1,000+"
metricLabel: "views / mo"
tldr: "Artera's customer feedback came from Wootric, Slack, CS tickets, and one-off surveys. None of it converged. I led the migration to a single Voice of the Customer program on Pendo Listen, integrated with Salesforce so every submission carried account context, and set a 5-business-day PM response SLA. Design now owns it at Artera, which is rare at most SaaS companies."
stats:
  - value: "1,000+"
    label: "Monthly views"
  - value: "5-day"
    label: "PM SLA"
  - value: "Design"
    label: "Program owner"
---

## Context

Artera is a patient communication platform serving large healthcare systems, and by 2024 our customer feedback was coming from everywhere at once. Wootric ran NPS, CS logged tickets in one place, Slack carried the loudest complaints, and one-off surveys filled the gaps in between. The data was rich and the signal was real, but nothing converged into a view a PM could act on.

## The problem

Roadmap conversations kept running into the same wall. We knew what customers were saying in aggregate, but we could not tell you who was saying it, what their ACV was, or whether they were six months from renewal. Feedback submitted by a $2M health system looked identical to feedback from a pilot account.

PMs were making prioritization calls without account context, and customers who took the time to write in rarely heard anything back. The feedback loop was open on both ends.

## The program

I led the migration of our NPS program out of Wootric and into Pendo in 2024, and used that move as the wedge to build something bigger: a single Voice of the Customer program with Pendo Listen as the hub. Every piece of feedback, whether it came from a CSM, a PM interview, or a customer vote on an idea, landed in one place.

I worked with our RevOps partners to integrate Pendo with Salesforce so every submission automatically carried account context: ACV, segment, renewal date, CSM owner. Prioritization conversations stopped being abstract.

From there we defined the mechanics. I built an importance rubric weighing severity, frequency, and alignment with roadmap bets, and we committed to a 5-business-day PM response SLA on every submitted idea. CS tagged incoming feedback with account context, PMs responded in-platform, and customers saw their submissions move through real states instead of disappearing. Exec sponsorship is what made the SLA stick.

## Taxonomy and mechanics

We built a tagging library so themes could be extracted consistently across hundreds of submissions, and a routing model so feedback reached the right PM without manual triage. I ran a full backlog audit with our PM group to establish close criteria, so the Listen board reflected real intent rather than a graveyard of old requests.

We rolled the program out at an All Hands with a companion internal blog post, trained CS and PM on tagging and response, and distributed a VOC tracker and response template the team could actually use on a Tuesday afternoon.

## Outcome

Pendo Listen now pulls 1,000+ unique views per month across the company, which for an internal tool at our size is meaningful adoption. Product decisions carry account context by default. Customers who submit ideas get a real response inside five business days, and the "submitted into the void" problem is gone.

At most SaaS companies VoC lives under CS or PM, and the program reflects their priorities. At Artera, design owns it.
