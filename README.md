# Borrow.ai
## Deployments - 
Backend - borrow-ai.vercel.app 
Endpoint docs - 

Frontend - 
# Introduction

**Borrow.ai** is a leverage aggregator that interfaces with multiple lending protocols to optimize the liquidity and positions of both lenders and borrowers. Lenders can choose the most optimal pool to stake based on their risk and APY preferences. Borrowers can look up and open positions for assets that unlock maximum liquidity for optimal collateral. This drastically reduces the learning curve for users to lend or borrow by abstracting away most complex choices and improving the UX.

Borrow.ai is less of a Defi aggregator which allows users to invest and more of a tool which enables users to make educated investments to maximize profits and minimize risks to levels of their preferences. 
## Technical Overview
![image](https://github.com/user-attachments/assets/1b7391e0-6bae-4328-a4f9-c94bdb2da9b3)


**Borrow.ai** consists of three important components:

### Scout Engine

The Scout Engine is a user-facing component that takes inputs of preferences and efficiently checks on-chain data from various protocols to provide the most optimal position. It considers parameters like risk preference, TVL, APY, and collateral threshold for lending positions. For borrowers, it takes inputs such as available collateral, borrow time, and volatility threshold. This way, users don't have to navigate individual platforms for the best position; everything can be done from one place.

### Execution Smart Contracts

These contracts interface with different lending protocols like AAVE, Reef, and IronFi. They also act as vaults for collateral and returns, which users can withdraw. Additionally, they allow composable lending and borrowing within the **Borrow.ai** platform and interface with some off-chain metrics based on user choices.

### Data Aggregator

The Data Aggregator indexes and processes large amounts of on-chain data, both real-time and historical, to derive the spectrum of options for a user's choice. It employs various indexing protocols combined with optimization and filtering techniques.

## Key Features

- Beginner-friendly UX with low learning curve requirements
- One-stop solution for optimized leverage finances
- Maximizes returns for lenders and liquidity for borrowers
- Reduces fragmentation of liquidity across platforms
