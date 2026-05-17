---
title: "Introducing OwnChart a patient empowerment tool through data and AI"
date: 2026-05-17
summary: "Launching OwnChart — an open source platform and iPhone app for patients and caregivers to collect, query, and understand their own health data with the help of large language models."
---

A few weeks ago I had outpatient eye surgery. A few hours after I got home, MyChart pinged me: the intraoperative note was ready. I've spent my career in healthcare and I read clinical documentation better than most patients, but it's not what I trained for. So I fed the note into Claude and asked it to explain what had actually happened.

It walked me through the procedure, and somewhere in the middle it pointed out that my surgeon had improvised. He'd gotten creative mid-procedure, in a way I would have completely missed reading the note on my own.

When my surgeon called the next day to check in, I complimented him on his creativity. Whether he knew it or not, that little exchange closed a small piece of the knowledge and power gap between us.

That moment crystallized something I've been circling for years. A through line in all of my design work has been recognizing when systems and institutions use knowledge as a form of gatekeeping. For decades inside the e-patient movement, I've heard people cry "give me my damn data." I supported it, I advocated for it, but I'll be honest — it never quite landed for me personally. Not until I started thinking about knowledge and expertise as part of a power dynamic.

Data without the means to understand it is just paperwork. Data plus on-demand, trustworthy expertise is something else entirely. It's standing.

So this week I'm launching **OwnChart** — an open source platform and iPhone app that lets patients and caregivers collect the meaningful data about their life, their body, and their clinical care, and then actually query and examine that data with the help of a large language model.

The point is not a data repository. The point is agency.

OwnChart connects to the patient portals from most major electronic health record systems — Epic, athenahealth, Oracle Health, NextGen, ModMed and others — so you can securely log in the same way you would with MyChart, and pull your full record history into a place you control. The iOS app brings in anything stored in Apple HealthKit, including wearable data like blood pressure, heart rate, heart rate variability, and your fitness and workout history. You can upload photos tied to significant life events, or screenshots and scanned documents that contain medical history you want to capture.

Then, with your consent, you can talk to any of it. Ask questions. Chase a hunch. Try to make sense of a diagnosis. If you've used Cursor for coding, this is the same shape of tool, pointed at your health and your life instead of your codebase.

The system treats each chat as something you can attach to a significant event — a diagnosis, a procedure — or roll up into a dossier, which is a collection of events, facts, and clinical data around whatever topic matters to you right now.

I have an ambitious roadmap. Next up: calendar imports so life events become part of the dataset, and an export feature so your data can move to other systems if you ever want it somewhere else.

**A few honest caveats.** OwnChart is in alpha. It is not trivial to install or set up. It is for the curious, the technical, and the brave. I built it the way I did — open source, self-hosted, patient-owned — because the alternative is another company sitting between you and your own life. That tradeoff is real, and I'm not going to pretend the on-ramp is easy yet. It will get easier.

For the curious there's a read-only [demo](https://www.ownchart.me) (sign in with `demo@ownchart.me` / `MYHEALTHdata`) and a [TestFlight preview](https://testflight.apple.com/join/TODO) of the iOS app while it works through Apple's approval process.

This project has been a labor of love. It came out of a deep belief that the best thing we can build for people navigating inscrutable systems is more agency, more standing, and more capacity to understand their own lives. Having a lifetime of medical history in one place I can query with natural language and built-in clinical expertise has already changed how I show up in my own care.

I want to acknowledge a huge source of inspiration: **Hugo Campos** and his work on [OpenKP](https://openkp.org) ([GitHub](https://github.com/hugooc/OpenKP), [his story](https://www.linkedin.com/pulse/i-dont-write-python-built-ai-tool-read-my-kaiser-record-hugo-campos-7yazc)). OwnChart was built to include Hugo's Critical AI Health Literacy (CAIHL) skill as a foundational element — a prompt skill that directs the LLM to behave like an empowering, accurate, trusted clinical expert rather than a chatbot. Users can pick between different vendors and models, but the CAIHL skill shapes how the model talks to you across all of them.

If you find this interesting, if you want to try it, if you want to argue with me about it — I'd love to hear from you.

OwnChart: [OwnChart.me](https://www.ownchart.me) · [GitHub](https://github.com/nickpdawson/OwnChart)
