---
title: Voice of the Customer
subtitle: One pipeline, every signal.
role: Led program
year: "2024"
order: 4
summary: One pipeline for every customer signal on Pendo Listen with Salesforce account context. PMs hit the 5-business-day response SLA on roughly 9 in 10 submissions. Design-owned, which is uncommon at most SaaS companies.
metric: "~90%"
metricLabel: "5-day SLA hit rate"
tldr: "Artera's customer feedback in early 2024 came from Wootric, Slack, CS tickets, and one-off PM surveys. None of it converged, and prioritization conversations could not tell you whether the customer asking was a $2M health system or a pilot account. I led the migration off Wootric onto Pendo Listen, used the move as the wedge to build a single Voice of the Customer pipeline, integrated submissions with Salesforce so every signal carried ACV, segment, renewal date, and CSM owner, and committed PMs to a 5-business-day response SLA. PMs hit the SLA on roughly 9 in 10 submissions across hundreds of submissions in the first year. The internal Listen board logs 1,000+ unique views per month. The program has resequenced at least one shipped roadmap call I can point to. Design owns the program at Artera, which is uncommon at most SaaS companies."
stats:
  - value: "~90%"
    label: "5-day SLA hit rate"
  - value: "1,000+"
    label: "Internal views / mo"
  - value: "Design"
    label: "Program owner"
---

## What the program is

A single pipeline for every customer signal, built on four pieces:

1. **One hub.** Pendo Listen replaced Wootric NPS, the CS ticket overflow, the Slack complaint trail, and the PM-driven one-off surveys. Customer signal lands in one place regardless of source.
2. **Account context on every submission.** A Salesforce integration joins ACV, segment, renewal date, and CSM owner to every submitted idea. Prioritization happens with the dollars and the renewal clock in the same view as the ask.
3. **A response contract.** PMs respond inside Pendo within 5 business days. CPO sponsorship keeps the SLA in force when the queue runs long.
4. **A taxonomy that joins.** Tags on a submission cross-reference the same tags on Salesforce fields and JIRA epics. A PM can pull every account asking for a capability, sort by ACV, see which ones are six months from renewal, and walk into prioritization with a defensible position in fifteen minutes instead of half a day.

## What the program replaced

By early 2024, customer feedback at Artera was coming from everywhere at once. Wootric ran NPS, CS logged tickets, Slack carried the loudest complaints, and one-off PM surveys filled the gaps. PMs could not tell you who was saying what, what their ACV was, or whether they were six months from renewal. Feedback from a $2M health system looked identical to feedback from a pilot account in the prioritization stack.

The Slack-to-CS-to-PM-survey distribution meant the same complaint surfaced three times under three different names, often from the same account, often in the same week. PMs lost faith in the inputs because of the duplication. Customers lost faith in the outputs because nothing came back. That two-sided trust problem is what the rest of 2024 had to close.

## How it got built

The forcing function was the Wootric renewal. The ROI on a standalone NPS tool did not survive the conversation, and Pendo had a Listen module the company already paid for. I led the migration off Wootric and used it as the wedge to build the pipeline.

I worked with RevOps to integrate Pendo with Salesforce. A week after the integration shipped, prioritization conversations stopped being abstract because dollars and renewal dates sat next to the asks instead of two tabs away.

I built an importance rubric weighing severity, frequency of incoming signal, and alignment with active roadmap bets, then committed PMs to the 5-business-day response SLA. We rolled the program out at an All Hands with a companion internal blog post, trained CS and PM on the tagging library and the response template, and shipped a VoC tracker the team could open on a Tuesday afternoon without three layers of training.

The taxonomy was the part the program rose or fell on. I authored the tagging library so themes could be extracted consistently across hundreds of submissions, ran a backlog audit with the PM group to establish close criteria, and built a routing model so feedback reached the right PM without manual triage.

## What the bets were

Keeping NPS in Wootric was the cheap path. The real cost of keeping a second feedback tool was not the license fees: it was the second tagging taxonomy, the second routing model, and the second response queue the company would have to maintain in parallel. Consolidation onto Pendo Listen was cheaper before the Salesforce integration even shipped.

Standing up a separate ideas portal next to the rest of the pipeline would have collected upvotes without account context. Feedback inside Pendo Listen carries the Salesforce record with it, which is what makes a prioritization call defensible to the CRO in a roadmap review and to a customer in a renewal conversation.

CS or PM ownership of the program would have shaped it around the priorities of the owning function. Most SaaS companies put VoC under one of those two seats. Design owning it meant the program optimized for the customer's perspective on whether the loop was closing, not for intake throughput (CS) or roadmap throughput (PM).

## Outcomes

Pendo Listen took several hundred customer submissions in the first year. PMs hit the 5-business-day response SLA on roughly 9 in 10 of them, with the slip cases concentrated on lanes where the owning PM was out and no secondary was named. Pendo Listen pulls 1,000+ unique internal views per month, which is high adoption for an internal tool at Artera's scale. Product decisions carry Salesforce account context by default. The "submitted into the void" complaint stopped surfacing in CSM 1-1s where it used to come up every cycle.

The pipeline resequenced at least one roadmap call I can point to. A conversation-authoring capability initially scoped to a smaller customer segment got pulled forward after the tagging library showed the request volume was concentrated in three of the largest enterprise accounts, two of them inside a renewal window. The feature shipped the same quarter the resequencing decision was made. Without the Salesforce-joined account context the same volume would have read as long-tail and been deprioritized off the roadmap entirely.

## What I would do differently

I underweighted the change-management cost on the CS side. Tagging consistency took longer to land than the technical pipeline did because I had not budgeted enough enablement time per CSM in the rollout. The Salesforce integration was the easy half. CSM enablement on consistent tagging was the half that determined whether the data was joinable across systems at all, and I treated it as a rollout step instead of as the program.

I should have shipped the public-facing "you said, we shipped" surface at the same time as the internal pipeline. Customers who wrote in saw a response inside five business days, and they did not see the rest of the customers who asked for the same thing or the moments when their request shipped six months later. The internal loop closed inside Q2 2024; the customer-facing surface that would have given submitters proof their request had movement behind it never shipped, and the trust impact of that gap is real.

I did not name a backup PM owner per Listen lane. When a PM was out, the response SLA quietly slipped on their lane and the recovery cost (re-engaging customers who had aged past five days) was higher than the cost of naming a secondary in week one would have been.

## Status

The hub is still Pendo Listen. Every submission carries Salesforce account context. The 5-business-day SLA is in force. Design owns the program. New PMs joining Artera get walked through the rubric and the SLA on day one.
