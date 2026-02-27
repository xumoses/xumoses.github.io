# Memory Bank Specification

The Memory Bank is a set of core Markdown files that maintain project context across sessions. You MUST maintain these files in the `memory-bank/` directory.

## Core Files

1.  **`productContext.md`**: Why this project exists, the problems it solves, and how it should work.
2.  **`activeContext.md`**: What is happening now, recent changes, and next steps. This is the most frequently updated file.
3.  **`systemPatterns.md`**: High-level architecture, design patterns, and technical decisions.
4.  **`techContext.md`**: Technical stack, development environment, and dependencies.
5.  **`progress.md`**: What has been completed and what is still pending.

## Workflow Rules

- **Initialization**: At the start of a session, read all files in `memory-bank/` to establish context.
- **Updates**: After every significant change or task completion, update the relevant Memory Bank files.
- **Consistency**: Ensure that `activeContext.md` and `progress.md` are always in sync with the actual state of the project.
- **Clarity**: Use clear, concise English for all documentation.

## File Structure

All Memory Bank files should be located in the root `memory-bank/` directory. If the directory does not exist, create it and initialize the core files based on your current understanding of the project.
