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
2026-02-18 15:33:36 - refined logic
2026-02-18 15:33:56 - added test case
2026-02-18 15:34:17 - refined logic
2026-02-18 15:34:44 - refined logic
2026-02-18 15:34:55 - refined logic
2026-02-18 15:35:29 - adjusted modifier
2026-02-18 15:35:48 - adjusted modifier
2026-02-18 15:36:23 - adjusted modifier
2026-02-18 15:36:32 - refined logic
2026-02-18 15:36:40 - added test case
2026-02-18 15:37:06 - adjusted modifier
2026-02-18 15:37:44 - refined logic
2026-02-18 15:38:43 - adjusted modifier
2026-02-18 15:38:52 - refined logic
2026-02-18 15:39:48 - adjusted modifier
2026-02-18 15:40:00 - adjusted modifier
2026-02-18 15:40:31 - refined logic
2026-02-18 15:40:46 - adjusted modifier
2026-02-18 15:41:16 - refined logic
2026-02-18 15:41:46 - added test case
2026-02-18 15:41:56 - adjusted modifier
2026-02-18 15:42:06 - adjusted modifier
2026-02-18 15:43:00 - refined logic
2026-02-18 15:43:18 - refined logic
2026-02-18 15:43:36 - adjusted modifier
2026-02-18 15:44:27 - refined logic
2026-02-18 15:44:35 - added test case
2026-02-19 09:57:01 - added test case
2026-02-19 09:57:24 - adjusted modifier
2026-02-19 09:57:41 - adjusted modifier
2026-02-19 09:57:51 - refined logic
2026-02-19 09:58:22 - adjusted modifier
2026-02-19 09:59:22 - adjusted modifier
2026-02-19 09:59:32 - added test case
2026-02-19 09:59:58 - adjusted modifier
2026-02-19 15:51:25 - added test case
2026-02-19 15:52:26 - refined logic
2026-02-19 15:52:35 - adjusted modifier
2026-02-19 22:25:34 - adjusted modifier
2026-02-19 22:25:45 - added test case
2026-02-19 22:26:06 - refined logic
2026-02-19 22:26:42 - adjusted modifier
2026-02-19 22:27:14 - refined logic
2026-02-19 22:27:32 - added test case
2026-02-19 22:27:41 - added test case
2026-02-19 22:28:09 - refined logic
2026-02-19 22:28:32 - refined logic
2026-02-19 22:28:49 - added test case
2026-02-19 22:29:18 - adjusted modifier
2026-02-20 10:12:15 - refined logic
2026-02-20 10:12:37 - adjusted modifier
2026-02-20 10:14:41 - added test case
2026-02-20 10:14:50 - refined logic
2026-02-20 10:15:11 - added test case
2026-02-20 10:15:19 - adjusted modifier
2026-02-21 15:42:44 - adjusted modifier
2026-02-21 15:42:55 - refined logic
2026-02-21 15:43:32 - adjusted modifier
2026-02-21 15:43:53 - refined logic
2026-02-21 15:44:17 - added test case
2026-02-21 15:44:36 - adjusted modifier
2026-02-21 15:45:19 - refined logic
2026-02-21 15:45:45 - adjusted modifier
2026-02-21 15:45:55 - refined logic
2026-02-21 15:46:30 - added test case
2026-02-21 15:46:45 - adjusted modifier
2026-02-21 15:47:16 - refined logic
2026-02-21 15:47:33 - refined logic
2026-02-21 15:48:11 - refined logic
2026-02-21 15:48:40 - refined logic
2026-02-21 15:49:07 - refined logic
2026-02-21 15:49:43 - added test case
2026-02-21 15:50:00 - added test case
2026-02-21 15:50:27 - adjusted modifier
2026-02-21 15:52:01 - adjusted modifier
2026-02-21 15:52:10 - refined logic
2026-02-21 15:52:28 - refined logic
2026-02-21 15:52:44 - refined logic
2026-02-21 15:52:51 - added test case
2026-02-21 15:52:59 - refined logic
2026-02-21 15:53:34 - refined logic
2026-02-21 15:53:42 - added test case
2026-02-21 15:54:49 - added test case
2026-02-21 15:55:00 - adjusted modifier
2026-02-21 15:55:17 - adjusted modifier
2026-02-21 15:55:34 - refined logic
2026-02-21 15:55:49 - adjusted modifier
2026-02-22 12:31:11 - adjusted modifier
2026-02-22 12:32:14 - adjusted modifier
2026-02-22 12:32:21 - added test case
2026-02-22 12:33:38 - adjusted modifier
2026-02-22 12:34:16 - adjusted modifier
2026-02-22 12:34:24 - added test case
2026-02-23 12:36:05 - added test case
2026-02-23 12:36:25 - refined logic
2026-02-23 12:36:36 - added test case
2026-02-23 12:37:24 - refined logic
2026-02-23 12:37:50 - adjusted modifier
2026-02-23 12:38:24 - added test case
2026-02-23 12:38:35 - adjusted modifier
2026-02-23 12:38:42 - adjusted modifier
2026-02-23 12:38:52 - adjusted modifier
2026-02-23 12:39:10 - added test case
2026-02-24 11:20:34 - adjusted modifier
2026-02-24 11:20:43 - adjusted modifier
2026-02-24 11:21:20 - adjusted modifier
2026-02-24 11:23:17 - refined logic
2026-02-24 11:23:54 - adjusted modifier
2026-02-24 11:24:09 - refined logic
2026-02-24 11:24:27 - adjusted modifier
2026-02-24 16:28:47 - added test case
2026-02-24 16:29:18 - added test case
2026-02-24 16:29:53 - adjusted modifier
2026-02-24 16:30:21 - added test case
2026-02-24 16:30:32 - added test case
2026-02-24 16:31:00 - adjusted modifier
2026-02-24 16:31:18 - refined logic
2026-02-24 16:31:30 - added test case
2026-02-24 16:31:52 - adjusted modifier
2026-02-24 16:32:38 - added test case
2026-02-25 10:08:10 - adjusted modifier
2026-02-25 10:09:03 - refined logic
2026-02-25 10:09:12 - refined logic
2026-02-25 10:09:22 - added test case
2026-02-25 10:09:51 - added test case
2026-02-25 10:10:04 - refined logic
2026-02-25 10:10:15 - added test case
2026-02-25 10:10:35 - added test case
2026-02-25 10:10:49 - refined logic
2026-02-25 10:11:00 - refined logic
2026-02-25 10:11:36 - adjusted modifier
2026-02-25 10:11:59 - added test case
2026-02-25 10:13:54 - added test case
2026-02-25 10:14:18 - added test case
2026-02-25 10:15:11 - refined logic
2026-02-25 10:15:18 - added test case
2026-02-25 10:15:36 - added test case
2026-02-25 19:01:37 - adjusted modifier
2026-02-25 19:02:44 - refined logic
2026-02-25 19:02:52 - refined logic
2026-02-25 19:03:03 - added test case
2026-02-25 19:03:48 - refined logic
2026-02-25 19:04:23 - refined logic
2026-02-25 19:04:42 - adjusted modifier
2026-02-25 19:06:16 - refined logic
2026-02-25 19:06:33 - added test case
2026-02-25 19:06:57 - added test case
2026-02-25 19:07:35 - refined logic
2026-02-26 11:12:40 - adjusted modifier
2026-02-26 11:12:58 - added test case
2026-02-26 11:13:38 - adjusted modifier
2026-02-26 11:13:48 - adjusted modifier
2026-02-26 11:14:22 - refined logic
2026-02-26 11:14:38 - refined logic
2026-02-26 11:14:47 - adjusted modifier
2026-02-26 11:14:58 - refined logic
2026-02-26 11:15:08 - refined logic
2026-02-26 11:15:52 - refined logic
2026-02-26 11:16:25 - refined logic
2026-02-26 11:16:34 - adjusted modifier
2026-02-26 11:16:41 - refined logic
2026-02-26 11:16:50 - adjusted modifier
2026-02-26 11:17:12 - added test case
2026-02-26 11:17:21 - refined logic
2026-02-26 11:17:32 - adjusted modifier
2026-02-26 11:17:42 - adjusted modifier
2026-02-26 11:18:01 - added test case
