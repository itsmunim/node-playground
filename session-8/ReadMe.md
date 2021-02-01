# Teams

The number in parenthesis denotes maturity level in nodejs.

1. Order - Amzad(3), Saiful(3), Nesar(4)::FE
2. Payment - Toufiqul(4), Aabir(3)
3. Fulfillment - Arafat(4), Bayes(5)
4. Notification - Shahed(3), Fahim(3), Nesar(4)

# Deliverables

- Precise problem statement
- High level spec: flow chart, block diagrams etc.
- Low level spec: ERD, schema definitions, sequence diagrams(sync and async flows) etc.
- Choice of stack: which one is for what?
- API Spec: RESTful APIs and event payloads(use `swagger` if possible)
- All included in a repository in github; all can be put inside a folder called `architecture`
- A possible folder structure:
```
architecture
- hld
  - flow-chart.jpg
  - block-diagram.jpg
- lld
  - erd.jpg
  - ...
- api-spec
  - swagger.json
  - events.md
- stack.md
- solution-brief.md
```
- Prepare a solution brief in markdown, where you refer these files in proper sections; this solution brief is something you will present to explain your solution/architecture to others

# Fixed Stack Assumptions

- PubSub: `redis`
- Databases: `mysql` or `mongodb`
- Framework: `express`
- Deployment: `docker` with `docker-compose`
- Usage of `typescript` is optional; no need at this moment
