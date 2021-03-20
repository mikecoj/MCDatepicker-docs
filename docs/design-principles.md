---
id: design-principles
title: Design Principles
sidebar_label: Design Principles
---

## Single DOM node

MCDatepicker creates a single DOM node and appends the calendar template to it. This node is used by all calendar instances.

The calendar is rendered when the very first instance gets created .

Wen an instance gets active, MCDatepicker updates the calendar based on the instance's options.

## Multiple instances

MCDatepicker allows you to create multiple instances that are separated from each other. Each one has its own methods and apis. Because it's using a single calendar node for all instances, only one instance can be active at a time.

## The Mediator

MCDatepicker was designed as a Mediator that controls the way instances interact with the calendar node. All instances are registread with MCDatepicker (the Mediator) and each time the calendar fires an `Open` event, MCDatepicker gets the id of the element that triggered the event and finds the instance object that is linked to that element. This way MCDatepicker sets an instance to active and handle the routing betwen the calendar and the active instance.
