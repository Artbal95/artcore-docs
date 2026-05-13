# Core Principles of ArtCore

ArtCore is not built around folders or technologies.

It is built around a set of rules that define the behavior of the entire system.

These rules are more important than the structure itself.

## 1. Isolation is more important than reusability

In traditional approaches, the goal is often maximum code reuse.

In ArtCore, the priority is different:

> first isolation, then reusability

If something can be reused but it breaks boundaries, it is an architectural mistake.

## 2. Every entity must have a clear context

Any module, feature, or entity must be responsible only for its own area of concern.

No blurred logic.

If you cannot explain where a responsibility lives, the architecture is broken.

## 3. Shared is an exception, not a foundation

shared is not the primary place for logic.

It is used only for:

* truly universal utilities
* neutral UI components
* infrastructure-related things

Everything else must live inside its own context.

## 4. Dependencies point downward

The system is built in layers.

Higher levels may use lower ones.

But not the other way around.

This creates a predictable dependency flow.

## 5. Business logic should be close to the domain

Logic must live as close as possible to its domain area.

Not in shared.
Not in utils.
Not in global services.

But inside its own module or entity.

## 6. Minimal global state

Global state is a source of hidden dependencies.

In ArtCore:

* global state is limited
* local state is preferred
* communication happens through explicit interfaces

## 7. Explicitness is more important than magic

Architecture should be readable without guessing.

If it takes too long to understand where things are located, that is a design problem.

## 8. Each module is a mini-system

A module in ArtCore is not just a folder.

It is an autonomous unit that contains:

* UI
* logic
* state
* types
* business rules

## Summary

ArtCore does not dictate how to write code.

It defines rules that make system growth predictable.

The larger the project, the more important constraints become.
