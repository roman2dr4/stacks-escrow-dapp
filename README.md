# Stacks Escrow DApp

Simple on-chain escrow contract on Stacks blockchain.

## Repository Structure


## Contract

- `escrow.clar` — simple escrow contract
- Public functions:
  - `deposit(amount)` → deposit funds
  - `release(user)` → release funds to user
  - `get-deposit(user)` → check deposit

## Frontend

- Uses `@stacks/connect` for wallet connection
- Uses `@stacks/transactions` to call contract functions
- UI allows deposit and release of funds

## Running Locally

1. Go to frontend folder:
2026-02-14 21:14:59 - added test case
2026-02-14 21:15:10 - added test case
2026-02-14 21:15:38 - added test case
2026-02-14 21:16:20 - refined logic
2026-02-14 22:00:42 - adjusted modifier
2026-02-14 22:01:12 - adjusted modifier
2026-02-14 22:01:32 - refined logic
2026-02-14 22:01:51 - added test case
2026-02-15 00:30:19 - refined logic
2026-02-15 00:30:29 - adjusted modifier
2026-02-15 07:48:36 - adjusted modifier
2026-02-15 07:48:45 - adjusted modifier
2026-02-15 08:43:56 - refined logic
2026-02-15 08:44:07 - added test case
2026-02-15 14:12:05 - refined logic
2026-02-15 14:12:14 - refined logic
2026-02-15 14:12:43 - added test case
2026-02-15 14:12:50 - refined logic
2026-02-15 15:23:07 - refined logic
2026-02-15 15:23:18 - added test case
2026-02-15 15:23:43 - adjusted modifier
2026-02-15 15:24:04 - refined logic
2026-02-15 16:23:59 - adjusted modifier
2026-02-15 16:24:09 - refined logic
2026-02-15 16:24:30 - adjusted modifier
2026-02-15 16:24:39 - added test case
2026-02-15 16:25:35 - added test case
2026-02-15 17:20:23 - added test case
2026-02-15 17:20:29 - refined logic
2026-02-15 17:20:50 - adjusted modifier
2026-02-15 17:20:55 - refined logic
2026-02-15 17:21:40 - adjusted modifier
2026-02-15 17:21:50 - refined logic
2026-02-15 17:22:05 - added test case
2026-02-15 18:20:44 - added test case
2026-02-15 18:20:53 - refined logic
2026-02-15 21:40:17 - adjusted modifier
2026-02-15 21:40:32 - adjusted modifier
2026-02-15 21:42:07 - refined logic
2026-02-15 21:42:16 - refined logic
2026-02-15 21:42:55 - added test case
2026-02-15 21:43:24 - refined logic
2026-02-15 21:43:44 - refined logic
2026-02-15 21:44:24 - adjusted modifier
2026-02-15 21:44:33 - adjusted modifier
2026-02-15 21:45:08 - refined logic
2026-02-15 21:46:29 - added test case
2026-02-15 21:46:45 - refined logic
2026-02-15 21:46:59 - adjusted modifier
2026-02-15 21:47:07 - added test case
2026-02-15 21:47:33 - added test case
2026-02-15 21:47:46 - adjusted modifier
2026-02-16 11:20:09 - added test case
2026-02-16 11:21:27 - added test case
2026-02-16 11:21:54 - added test case
2026-02-16 11:22:05 - adjusted modifier
2026-02-16 11:22:32 - added test case
2026-02-16 11:23:31 - added test case
2026-02-16 11:24:05 - added test case
2026-02-16 11:24:49 - adjusted modifier
2026-02-16 11:25:28 - refined logic
2026-02-16 11:26:09 - refined logic
2026-02-16 15:27:08 - added test case
2026-02-16 15:29:21 - refined logic
2026-02-16 15:29:42 - refined logic
2026-02-16 15:30:46 - adjusted modifier
2026-02-16 15:30:57 - refined logic
2026-02-16 15:31:49 - added test case
2026-02-16 15:32:35 - refined logic
2026-02-16 15:32:47 - adjusted modifier
2026-02-16 15:33:10 - refined logic
2026-02-16 15:34:02 - added test case
2026-02-16 15:34:17 - refined logic
2026-02-16 21:39:19 - added test case
2026-02-16 21:41:19 - adjusted modifier
2026-02-16 21:41:43 - adjusted modifier
2026-02-16 21:42:43 - refined logic
2026-02-16 21:43:15 - adjusted modifier
2026-02-16 21:43:32 - refined logic
2026-02-16 21:44:46 - added test case
2026-02-16 21:44:59 - refined logic
2026-02-16 21:45:07 - added test case
2026-02-17 12:44:13 - adjusted modifier
2026-02-17 12:44:30 - refined logic
2026-02-17 12:44:39 - added test case
2026-02-17 12:44:59 - adjusted modifier
2026-02-17 12:46:11 - added test case
2026-02-17 12:46:18 - added test case
2026-02-17 12:46:27 - refined logic
2026-02-17 12:46:35 - adjusted modifier
2026-02-17 12:46:43 - adjusted modifier
2026-02-17 12:47:35 - added test case
2026-02-17 12:47:46 - adjusted modifier
2026-02-17 12:47:57 - adjusted modifier
2026-02-17 12:48:05 - adjusted modifier
2026-02-17 12:48:51 - added test case
2026-02-17 12:49:15 - added test case
2026-02-17 12:49:47 - refined logic
2026-02-17 12:50:06 - added test case
2026-02-17 12:50:17 - refined logic
2026-02-17 12:50:26 - added test case
2026-02-17 12:51:43 - added test case
2026-02-17 12:52:07 - adjusted modifier
2026-02-17 12:52:18 - refined logic
2026-02-17 12:52:28 - adjusted modifier
2026-02-17 12:52:47 - adjusted modifier
2026-02-17 12:52:57 - refined logic
2026-02-17 12:53:43 - adjusted modifier
2026-02-17 12:53:50 - added test case
2026-02-17 12:53:58 - added test case
2026-02-17 12:54:35 - added test case
2026-02-17 12:56:32 - adjusted modifier
2026-02-17 12:56:43 - refined logic
2026-02-17 12:57:32 - adjusted modifier
2026-02-17 12:57:41 - refined logic
2026-02-18 15:29:12 - adjusted modifier
2026-02-18 15:30:05 - refined logic
2026-02-18 15:30:16 - added test case
2026-02-18 15:30:48 - added test case
2026-02-18 15:31:06 - adjusted modifier
2026-02-18 15:32:07 - added test case
2026-02-18 15:32:16 - adjusted modifier
2026-02-18 15:32:51 - adjusted modifier
2026-02-18 15:33:20 - added test case
