# Social Sentiment Analyzer (JavaScript)

## Description
This **Node.js** console application performs basic sentiment analysis on review text files using a dictionary of precomputed word sentiment scores.

It reads a review file (`bad.txt`, `good.txt`, or `review.txt`) and outputs each word's sentiment score and the running total. Finally, it converts the total score into a star rating between 1 and 5 based on predefined thresholds.

## Features
- Reads sentiment scores from `socialsent.csv`
- Accepts a review file via **command-line argument**
- Defaults to `review.txt` if no file is provided
- Outputs `[word: score, accumulated_score]` for each word found in the sentiment table
- Converts the final score to a star rating:
  - `score < -5.0` → 1 star
  - `-5.0 ≤ score < -1.0` → 2 stars
  - `-1.0 ≤ score < 1.0` → 3 stars
  - `1.0 ≤ score < 5.0` → 4 stars
  - `score ≥ 5.0` → 5 stars

## How to Run

### Prerequisites
- [Node.js](https://nodejs.org/) installed (LTS version recommended)

### Setup
1. Clone or download this repository.
2. Place the following files in the same directory:
   - `socialSentimentAnalyzer.js`
   - `socialsent.csv` (your word-sentiment dataset)
   - One or more review files (e.g., `good.txt`, `bad.txt`, or `review.txt`)

### Running the Program

Open a terminal or PowerShell in the project directory.

#### With a review file (e.g., `bad.txt`):
```bash
node socialSentimentAnalyzer.js bad.txt
Without specifying a file (uses default review.txt):

## run
node socialSentimentAnalyzer.js