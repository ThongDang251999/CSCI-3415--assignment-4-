// socialSentimentAnalyzer.js

const fs = require('fs');
const path = require('path');

// Global sentiment scores dictionary
let sentimentScores = {};

function buildSocialSentimentTable(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf-8');
        const lines = data.split('\n');
        for (let line of lines) {
            let parts = line.trim().split(',');
            if (parts.length === 2) {
                let word = parts[0].toLowerCase();
                let score = parseFloat(parts[1]);
                if (!isNaN(score)) {
                    sentimentScores[word] = score;
                }
            }
        }
    } catch (error) {
        console.error(`Error reading sentiment file: ${error.message}`);
    }
}

function getSocialSentimentScore(filename) {
    let totalScore = 0;
    try {
        const data = fs.readFileSync(filename, 'utf-8');
        const lines = data.split('\n');
        for (let line of lines) {
            let words = line.toLowerCase().split(/[\s.,!?'"();:\-\\/]+/);
            for (let word of words) {
                if (word && sentimentScores[word] !== undefined) {
                    let score = sentimentScores[word];
                    totalScore += score;
                    console.log(`${word}: ${score.toFixed(2)}, ${totalScore.toFixed(2)}`);
                }
            }
        }
    } catch (error) {
        console.error(`Error reading review file: ${error.message}`);
    }
    return totalScore;
}

function getStarRating(score) {
    if (score < -5.0) return 1;
    else if (score < -1.0) return 2;
    else if (score < 1.0) return 3;
    else if (score < 5.0) return 4;
    else return 5;
}

// Main execution
const sentimentFile = 'socialsent.csv';
const reviewFile = process.argv[2] || 'review.txt';

buildSocialSentimentTable(sentimentFile);
if (!fs.existsSync(reviewFile)) {
    console.error(`Review file '${reviewFile}' not found.`);
    process.exit(1);
}

let finalScore = getSocialSentimentScore(reviewFile);
let stars = getStarRating(finalScore);

console.log(`\n${reviewFile} score: ${finalScore.toFixed(2)}`);
console.log(`${reviewFile} Stars: ${stars}`);
