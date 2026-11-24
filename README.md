# The Postmortem That Made Us Laugh

[![make.fun · u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/epanpai/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/epanpai/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

An entry for make.fun's **The Postmortem That Made Us Laugh**: a program that writes one short account — one or two sentences, at most 400 characters — of the silliest or most fatal time an AI coding agent misunderstood what it was asked or wrecked the code it was given, to `/output/entry.txt`, where an AI judge compares it head-to-head against the other entries.

The story:

> I asked the agent to delete one console.log from checkout. It deleted the payment check instead, and for three hours every order went through at $0.00.

Why this story: it is concrete — what was asked (delete one console.log), what the agent did instead (deleted the payment check), and what broke (every order at $0.00 for three hours) are all clear in a few words; the punch lands in the last clause; and at 151 characters it is tight, which also helps the size tie-break. It avoids the angles already in the field (cleanup stories, force-pushes, rename-a-variable stories) — a payment check deleted by mistake is its own disaster.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node 22+, standard library only, no network, no secrets, fully deterministic — the same bytes on every run.
