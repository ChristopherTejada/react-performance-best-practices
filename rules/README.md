# Performance Rules

This directory contains performance rules and guidelines for React and
Next.js applications, organized by impact level.

Each rule describes a common performance issue, explains why it matters,
and outlines recommended patterns to avoid or fix the problem.

## Impact levels

Rules are grouped into three categories:

### Critical
Rules with a direct and significant impact on performance, user
experience, and metrics such as TTFB and interaction latency.

These issues should be addressed as a priority in any production
application.

### High
Important optimizations that can noticeably improve performance,
especially as applications grow in complexity or traffic.

### Medium
Advanced patterns and micro-optimizations that help refine performance
and code quality, usually after higher-impact issues are resolved.

## How to use the rules

- Review rules during code reviews
- Use them as a checklist when optimizing existing applications
- Apply them proactively when designing new features
- Combine them with profiling tools and real measurements

Rules may reference related examples located in the `examples/`
directory when applicable.
